import asyncio
from playwright.async_api import async_playwright

# v19 "Conversation mode": ONE tap starts a voice session that never needs
# pressing again — it survives sends, replies, silences and recognition
# restarts, pauses for TTS / hidden tab, and only ends on tap-off or a hard
# permission denial. (A mic can never start with zero taps: one gesture per
# chat is the browser floor — everything after that tap is automatic.)
FAKE_SR = """
window.__recs=[];window.__srThrow=false;
window.SpeechRecognition=class{
  constructor(){window.__recs.push(this);this.started=false;this.lang="";this.continuous=false;this.interimResults=false}
  start(){if(window.__srThrow)throw new Error('no mic device');this.started=true}
  stop(){const s=this;setTimeout(()=>{s.onend&&s.onend()},10)}
  abort(){this.stop()}
  emit(pairs){const ev={resultIndex:0,results:pairs.map(pr=>{const r=[{transcript:pr[0],confidence:.9}];r.isFinal=pr[1];return r})};this.onresult&&this.onresult(ev)}
  end(){this.onend&&this.onend()}
  fail(error){if(this.onerror)this.onerror({error});this.end()}
};
window.__GoodSR=window.SpeechRecognition;
"""

async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(args=["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader"])
        pg=await b.new_page(viewport={"width":390,"height":844},device_scale_factor=2)
        errs=[];pg.on("pageerror",lambda e:errs.append("PAGEERR "+str(e)[:300]))
        pg.on("console",lambda m:errs.append("console:"+m.text[:250]) if m.type=="error" and "Failed to load resource" not in m.text and "AudioContext" not in m.text else None)
        await pg.add_init_script(FAKE_SR)
        await pg.goto("http://127.0.0.1:8765/csp.html")
        await pg.evaluate("""localStorage.clear();
          localStorage.setItem('fho_onb2','true');localStorage.setItem('fho_toured','true');
          localStorage.setItem('fho_legalV','1');localStorage.setItem('fho_hints','true');
          localStorage.setItem('fho_micHinted','true');localStorage.setItem('fho_voice','true')""")
        await pg.reload();await pg.wait_for_timeout(2500)
        ev=pg.evaluate
        async def wait_js(expr,timeout=10000):
            t=0
            while t<timeout:
                if await ev(f"!!({expr})"):return
                await pg.wait_for_timeout(200);t+=200
            raise TimeoutError(expr)
        async def wait_rec(n,timeout=10000):
            await wait_js(f"__recs.length>{n}",timeout=timeout)
            return await ev("__recs.length")
        # --- ONE tap: session on, listening state + hint bar visible
        await pg.click("#micBtn")
        n=await wait_rec(0)
        print("session on:",await ev("[micOn,$('#micBtn').classList.contains('rec'),!$('#micHintBar').hidden,$('#micHintBar').textContent]"))
        # --- the owner test: TWO voice messages, no second tap anywhere
        await ev(f"__recs[{n-1}].emit([['first message',true]])")
        await wait_js("[...document.querySelectorAll('#chat .msg.me .bubble')].some(b=>b.textContent==='first message')",timeout=8000)
        await wait_js("S.busy===false")
        n=await wait_rec(n)  # recognition resumed by itself after the reply
        await ev(f"__recs[{n-1}].emit([['second message',true]])")
        await wait_js("[...document.querySelectorAll('#chat .msg.me .bubble')].some(b=>b.textContent==='second message')",timeout=8000)
        print("two messages, one tap:",await ev("[[...document.querySelectorAll('#chat .msg.me .bubble')].map(b=>b.textContent),micOn]"))
        await wait_js("S.busy===false")
        n=await wait_rec(n)
        # --- silence endurance: 8 bare ends in a row (v18's budget died at 6)
        ok=True
        for _ in range(8):
            await ev(f"__recs[{n-1}].end()")
            try:n=await wait_rec(n)
            except Exception:ok=False;break
        print("survives 8 silent ends:",ok,"session on:",await ev("micOn"))
        # --- recoverable errors restart with backoff; session stays on
        await ev(f"__recs[{n-1}].fail('no-speech')")
        n=await wait_rec(n)
        await ev(f"__recs[{n-1}].fail('network')")
        n=await wait_rec(n)
        print("error recovery:",await ev("micOn"),"recs so far:",n)
        # --- TTS pause: while the companion "speaks" (ST.talkUntil) no new run
        #     starts; when speech ends the session resumes by itself
        await ev("ST.talkUntil=performance.now()+1500")
        await ev(f"__recs[{n-1}].end()");await pg.wait_for_timeout(700)
        print("no restart while companion speaks:",await ev(f"__recs.length==={n}"))
        n=await wait_rec(n)
        print("resumed after speech ended:",await ev("micOn"))
        # --- hidden tab: recognition stops and does NOT restart; visible again: resumes
        await ev("window.__vh=false;Object.defineProperty(document,'hidden',{configurable:true,get:()=>window.__vh})")
        await ev("window.__vh=true;document.dispatchEvent(new Event('visibilitychange'))")
        await pg.wait_for_timeout(900)
        print("paused while hidden:",await ev(f"[__recs.length==={n},!$('#micBtn').classList.contains('rec'),micOn]"))
        await ev("window.__vh=false;document.dispatchEvent(new Event('visibilitychange'))")
        n=await wait_rec(n)
        print("resumed when visible:",await ev("micOn"))
        # --- toggle OFF: no restart ever after
        await pg.click("#micBtn");await pg.wait_for_timeout(300)
        n_off=await ev("__recs.length")
        await ev(f"__recs[{n_off-1}].end()");await pg.wait_for_timeout(900)
        print("toggle off = no restart:",await ev(f"[__recs.length==={n_off},!micOn,$('#micHintBar').hidden]"))
        # --- recognition cannot even start: visible stalled state, not silent death
        await ev("__srThrow=true")
        await pg.click("#micBtn");await pg.wait_for_timeout(2600)
        print("stalled state shown:",await ev("[micOn,micDead,$('#micHintBar').textContent.includes(\"couldn't restart\")]"))
        # --- recognizer works again: tap off / on recovers cleanly
        await ev("__srThrow=false")
        await pg.click("#micBtn");await pg.wait_for_timeout(200)
        await pg.click("#micBtn")
        n_pre=await ev("__recs.length")
        await wait_js(f"__recs.length>{n_pre}",timeout=8000)
        print("recovered:",await ev("[micOn,!micDead,$('#micBtn').classList.contains('rec')]"))
        # --- hard denial ends the session, hint bar goes away, no restart
        n_last=await ev("__recs.length")
        await ev(f"__recs[{n_last-1}].fail('not-allowed')");await pg.wait_for_timeout(700)
        print("denial ends session:",await ev(f"[__recs.length==={n_last},!micOn,$('#micHintBar').hidden]"))
        # ================= v19 LANGUAGE LOCK =================
        # Auto mode, pinned to English, voice session on: foreign-language
        # messages must NOT flip S.cur / replyLang / recognition.lang —
        # after 3 in a row the app may only SUGGEST a switch.
        await ev("S.lang='auto';S.cur='en';store.set('lang','auto');store.set('cur','en');applyUI()")
        c0=await ev("__recs.length")
        await pg.click("#micBtn")
        n=await wait_rec(c0)
        print("lang lock start:",await ev(f"[S.cur,replyLang(),__recs[{n-1}].lang]"))
        async def say_vi():
            await pg.fill("#input","Tôi muốn ăn cơm với gia đình hôm nay")
            await pg.click("#sendBtn")
            await wait_js("S.busy===false")
            await pg.wait_for_timeout(150)
        for _ in range(3): await say_vi()
        print("no flip, suggestion shown:",await ev("[S.cur,replyLang(),!$('#langHintBar').hidden,$('#langHintTxt').textContent]"))
        await wait_js("$('#micBtn').classList.contains('rec')")
        print("stt still pinned:",await ev("__recs[__recs.length-1].lang"))
        # dismiss is one-time: more foreign messages neither re-show it nor flip
        await pg.click("#langHintNo")
        for _ in range(3): await say_vi()
        print("dismissed stays dismissed:",await ev("[S.cur,$('#langHintBar').hidden]"))
        # the explicit control re-pins everything, STT included
        await ev("switchTab('me')")
        await pg.select_option("#langSel","vi")
        await ev("switchTab('chat')")
        print("explicit switch re-pins:",await ev("[S.lang,S.cur,replyLang()]"))
        await wait_js("$('#micBtn').classList.contains('rec')")
        c1=await ev("__recs.length")
        await ev(f"__recs[{c1-1}].end()")
        n=await wait_rec(c1)
        print("stt re-pinned:",await ev(f"__recs[{n-1}].lang"))
        await ev("switchTab('me')")
        await pg.select_option("#langSel","en")
        await ev("switchTab('chat')")
        # back in Auto (pin stays English): the suggestion may return, and
        # tapping Switch on it is the other deliberate re-pin
        await ev("S.lang='auto';store.set('lang','auto');applyUI()")
        for _ in range(3): await say_vi()
        print("suggestion returns after manual change:",await ev("!$('#langHintBar').hidden"))
        await pg.click("#langHintYes")
        print("hint switch re-pins:",await ev("[S.lang,S.cur,replyLang(),$('#langHintBar').hidden]"))
        # ================= asking switches / teaching translator / open registry =================
        LB="[...document.querySelectorAll('#chat .msg.bot .bubble')].slice(-1)[0].textContent"
        async def say_typed(msg):
            await pg.fill("#input",msg);await pg.click("#sendBtn");await wait_js("S.busy===false");await pg.wait_for_timeout(150)
        await ev("langPin('en')")
        # an explicit ASK switches at once, confirmed in the new language
        await say_typed("Vietnamese please")
        print("ask switches (vi):",await ev(f"[S.cur,replyLang(),{LB}.includes('tiếng Việt')]"))
        await say_typed("speak French")
        print("ask switches (fr):",await ev(f"[S.cur,{LB}.includes('français')]"))
        # asking ABOUT a language is a translation request now — no switch
        await say_typed("how do you say hello in Vietnamese?")
        print("how-do-you-say translates, no switch:",await ev(f"[S.cur,{LB}.includes('Xin chào')]"))
        # a mis-heard foreign utterance (auto-sent by the mic) never switches
        await wait_js("$('#micBtn').classList.contains('rec')")
        cl=await ev("__recs.length")
        await ev(f"__recs[{cl-1}].emit([['hola amigo como estas',true]])")
        await wait_js("[...document.querySelectorAll('#chat .msg.me .bubble')].some(b=>b.textContent==='hola amigo como estas')")
        await wait_js("S.busy===false")
        print("mis-heard utterance: no switch:",await ev("S.cur"))
        # native request forms switch too
        await say_typed("nói tiếng Việt")
        print("native request switches:",await ev("S.cur"))
        await ev("langPin('en')")
        # teaching translation: translation + word-by-word + pronunciation +
        # usage, spoken in the TARGET voice only, pin untouched
        await ev("(()=>{window.__utts=[];speechSynthesis.speak=u=>{window.__utts.push({t:u.text,l:u.lang,v:u.voice?u.voice.lang:null})};return true})()")
        await say_typed("say 'how are you' in Vietnamese")
        print("teaching translation:",await ev(f"[{LB}.includes('Bạn có khỏe không'),{LB}.includes('Word by word'),{LB}.includes('KWAY'),{LB}.includes('When to use'),S.cur]"))
        print("spoken in target voice:",await ev("[__utts.some(u=>u.l==='vi-VN'&&u.t.includes('khỏe')),S.cur]"))
        # saying it back earns praise, still no switch
        await say_typed("Bạn có khỏe không")
        print("repeat praised:",await ev(f"[{LB}.includes('exactly right'),S.cur]"))
        # 'please' on a translation request does NOT make it a switch
        await say_typed("translate 'thank you' to French please")
        print("translate+please: no switch:",await ev(f"[S.cur,{LB}.includes('Merci')]"))
        # registry languages outside the original list: Khmer + Tagalog
        await say_typed("translate 'how are you' to Khmer")
        print("khmer translation:",await ev(f"[{LB}.includes('អ្នកសុខសប្បាយទេ'),__utts.some(u=>u.l==='km-KH'),S.cur]"))
        await say_typed("say 'thank you' in Tagalog")
        print("tagalog translation:",await ev(f"[{LB}.includes('Salamat'),S.cur]"))
        # conversation switch to a registry language: tag pinned, STT follows,
        # and a switch is plain conversation — NO lesson format
        await say_typed("Portuguese please")
        print("portuguese switch, no lesson:",await ev(f"[S.cur,S.langTag,replyLang(),!{LB}.includes('Word by word')]"))
        await wait_js("$('#micBtn').classList.contains('rec')")
        cp=await ev("__recs.length")
        await ev(f"__recs[{cp-1}].end()")
        n=await wait_rec(cp)
        print("stt follows pt pin:",await ev(f"__recs[{n-1}].lang"))
        # native-script name resolves: ខ្មែរ please -> Khmer
        await say_typed("ខ្មែរ please")
        print("native-script switch:",await ev("[S.cur,S.langTag]"))
        print("\n".join(errs[:15]) or "no errors")
        await b.close()
asyncio.run(main())
