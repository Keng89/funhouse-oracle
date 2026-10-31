import asyncio, json
from playwright.async_api import async_playwright

# v20 fixes from the Phase-1 audit: (M2) token cap 260 -> 512 + Continue chip
# for replies cut mid-sentence; (M6) chat translation gains the on-device
# Translator step, a translation-sized brain cap, "translate this" resolution
# and the "translate to X: <text>" form; (M3) browser TTS chunks long replies
# instead of dying mid-sentence; (B1) SSE idle timeout unwedges a stalled
# stream; (M7) cloud-voice fallback keeps the reply's language; (M4)
# visualViewport keyboard handling; (m1) no forced question ending; (m2)
# aria-live announces once, not per token; (m3) dir=auto; (m4) tap targets;
# (m12) friendly brain errors; (m15) dead 01 brain code removed.
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
"""

LONG = ("The little fox ran through the pine forest and over the silver river, past the "
        "sleeping village and the old stone mill, then it climbed the long hill toward "
        "the moon and kept going and going through the dark and the wind and the")
CONT = "…and at last it curled up under the oldest oak and slept soundly."

async def main():
    assert "fho-v20" in open("sw.js", encoding="utf-8").read(), "sw.js version not bumped"
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
          localStorage.setItem('fho_micHinted','true')""")
        await pg.reload();await pg.wait_for_timeout(2500)
        ev=pg.evaluate
        async def wait_js(expr,timeout=10000):
            t=0
            while t<timeout:
                if await ev(f"!!({expr})"):return
                await pg.wait_for_timeout(200);t+=200
            raise TimeoutError(expr)
        LB="[...document.querySelectorAll('#chat .msg.bot .bubble')].slice(-1)[0].textContent"
        CHIPS="[...document.querySelectorAll('#chips .chip')].map(b=>b.textContent)"
        async def say_typed(msg):
            n=await ev("document.querySelectorAll('#chat .msg.bot .bubble').length")
            await ev(f"$('#input').value={json.dumps(msg)};$('#sendBtn').click()")
            await wait_js(f"document.querySelectorAll('#chat .msg.bot .bubble').length>{n}&&S.busy===false")

        # --- m15: the dead 01 copies are gone; the live functions are 06's
        print("dead code removed:",await ev("[aiReply.toString().includes('max_tokens:200'),loadBrain.toString().includes('0.2.78'),aiReply.toString().includes('max_tokens:512')]"))
        # --- m1: sysPrompt no longer forces a question ending
        print("prompt tic softened:",await ev("[sysPrompt().includes('Always end with one short playful question'),sysPrompt().includes('vary it')]"))
        # --- m12: friendly error mapping, raw JSON stays in the console
        print("friendly errors:",await ev("[brErrText(new Error('401 {bad key}')),brErrText(new Error('429 too many')),brErrText(new Error('stall: no stream data')),brErrText(new Error('Failed to fetch'))]"))
        # --- B1: a stream that goes quiet is aborted by the idle timeout
        print("sse idle timeout:",await ev("""(async()=>{const keep=SSE_IDLE_MS;SSE_IDLE_MS=300;const enc=new TextEncoder();
          const stream=new ReadableStream({start(c){c.enqueue(enc.encode('data: {"choices":[{"delta":{"content":"hi"}}]}\\n\\n'))}});
          const got=[];let err='';
          try{for await(const ch of sseLines({body:stream},j=>j.choices[0].delta.content||''))got.push(ch.choices[0].delta.content)}catch(e){err=String(e.message||e)}
          SSE_IDLE_MS=keep;return [got,err]})()"""))
        # --- M2: fake brain, long reply cut mid-sentence -> Continue chip -> rest arrives
        await ev("(()=>{window.__calls=0;window.__mt=0;"
                 "S.engine={kind:'fake',label:'Fake',chat:{completions:{create:async o=>{window.__calls++;window.__mt=o.max_tokens;"
                 "const txt=window.__calls===1?"+json.dumps(LONG)+":"+json.dumps(CONT)+";"
                 "return (async function*(){yield {choices:[{delta:{content:txt}}]}})()}}}};"
                 "S.brainOn=true;return true})()")
        await say_typed("tell me a long story")
        print("long reply + cap:",await ev(f"[{LB}.startsWith('The little fox'),window.__mt,{CHIPS}]"))
        await ev("[...document.querySelectorAll('#chips .chip')].find(b=>b.textContent.includes('Continue')).click()")
        await wait_js("S.busy===false")
        print("continued:",await ev(f"[{LB}.includes('oldest oak'),window.__calls]"))
        # --- B1/M2: a stream that dies mid-reply keeps the partial, chat recovers
        await ev("(()=>{S.engine={kind:'fake',label:'Fake',chat:{completions:{create:async o=>(async function*(){yield {choices:[{delta:{content:"+json.dumps(LONG)+"}}]};throw new Error('boom 500')})()}}};return true})()")
        await say_typed("another long one please")
        print("partial kept + recovered:",await ev(f"[S.busy,{LB}.startsWith('The little fox'),{CHIPS}.some(t=>t.includes('Continue'))]"))
        await ev("S.brainOn=false;S.engine=null")
        # --- M6: 'translate this' resolves to the last assistant message
        await ev("S.history=[{role:'user',content:'hi'},{role:'assistant',content:'hello'}]")
        await say_typed("translate this to Vietnamese")
        print("translate-this:",await ev(f"{LB}.includes('Xin chào')"))
        # --- M6: colon form 'translate to X: <text>'
        await say_typed("translate to Spanish: good morning")
        print("colon form:",await ev(f"{LB}.includes('Buenos días')"))
        # --- M3: browser TTS speaks a bedtime story in chunks, not one utterance
        await ev("""(()=>{window.__utts=[];const real=window.SpeechSynthesisUtterance;
          speechSynthesis.speak=u=>{window.__utts.push(u.text);setTimeout(()=>{u.onend&&u.onend()},5)};return !!real})()""")
        print("tts chunks:",await ev("""(async()=>{let done=false;browserSpeak(curChar(),bedtimeStory(),()=>{done=true},'en');
          const t0=Date.now();while(!done&&Date.now()-t0<8000)await new Promise(r=>setTimeout(r,50));
          const mx=Math.max(...window.__utts.map(t=>t.length));return [done,window.__utts.length,mx]})()"""))
        # --- M7: cloud voice fails -> fallback speaks VIETNAMESE, not English
        await ev("""(()=>{window.__utts=[];window.__realFetch=window.fetch;window.fetch=async()=>({ok:false,status:503});
          window.__vxSave={e:VX.engine,k:VX.elKey};
          speechSynthesis.speak=u=>{window.__utts.push({t:u.text,l:u.lang});setTimeout(()=>{u.onend&&u.onend()},5)};
          VX.engine='cloud';VX.cprov='eleven';VX.elKey='test-key';return true})()""")
        print("cloud fallback lang:",await ev("(async()=>{await new Promise(r=>cloudSpeak(curChar(),'Xin chào bạn, hôm nay bạn có khỏe không',r,'vi'));return window.__utts})()"))
        await ev("window.fetch=window.__realFetch;VX.engine=window.__vxSave.e;VX.elKey=window.__vxSave.k")
        # --- m3: bubbles + composer are dir=auto
        print("dir auto:",await ev("[document.querySelector('#chat .msg.bot .bubble').dir,$('#input').dir]"))
        # --- m2: #chat is not a live region; the final reply is announced once
        await say_typed("hello")
        await pg.wait_for_timeout(300)
        print("aria:",await ev("[$('#chat').getAttribute('aria-live'),!!$('#srLive'),$('#srLive').textContent.length>0]"))
        # --- m4: tap targets at phone width (390px -> the <=420px rules apply)
        print("tap targets:",await ev("[$('#talkBtn').getBoundingClientRect().height,$('#sendBtn').getBoundingClientRect().height,document.querySelector('.stage-tools button').getBoundingClientRect().height]"))
        # --- M4: focusing the composer with a visualViewport present: no errors, composer visible
        await pg.click("#input");await pg.wait_for_timeout(400)
        print("composer visible:",await ev("(()=>{const r=$('#composer').getBoundingClientRect();return [r.bottom<=innerHeight+1,r.height>0]})()"))
        print("\n".join(errs[:15]) or "no errors")
        await b.close()
asyncio.run(main())
