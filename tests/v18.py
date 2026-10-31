import asyncio
from playwright.async_api import async_playwright

FAKE_SR = """
window.__recs=[];
window.SpeechRecognition=class{
  constructor(){window.__recs.push(this);this.started=false;this.lang="";this.continuous=false;this.interimResults=false}
  start(){this.started=true}
  stop(){const s=this;setTimeout(()=>{s.onend&&s.onend()},10)}
  abort(){this.stop()}
  emit(pairs){const ev={resultIndex:0,results:pairs.map(pr=>{const r=[{transcript:pr[0],confidence:.9}];r.isFinal=pr[1];return r})};this.onresult&&this.onresult(ev)}
  end(){this.onend&&this.onend()}
  fail(error){if(this.onerror)this.onerror({error});this.end()}
};
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
        print("mic visible:",await ev("!$('#micBtn').hidden"),"consent gone:",await ev("!$('#consentModal')"))
        # --- tap once: continuous + interim config, .rec state, live text in the input
        await pg.click("#micBtn");await pg.wait_for_timeout(200)
        print("started:",await ev("[__recs.length,__recs[0].continuous,__recs[0].interimResults,$('#micBtn').classList.contains('rec')]"))
        await ev("__recs[0].emit([['hello wor',false]])")
        print("interim in input:",await ev("$('#input').value"))
        await ev("__recs[0].emit([['hello world',true]])")
        await ev("__recs[0].emit([['hello world',true],['how are you',true]])")
        print("finals in input:",await ev("$('#input').value"))
        # --- auto-send ~1.4s after the last final segment
        await pg.wait_for_timeout(1800)
        print("auto-sent:",await ev("[...document.querySelectorAll('#chat .msg.me .bubble')].map(b=>b.textContent)"))
        print("mic off after send:",await ev("[!$('#micBtn').classList.contains('rec'),$('#input').value]"))
        await pg.wait_for_function("S.busy===false");await pg.wait_for_timeout(300)
        # --- browser ends recognition on its own: restart, text folds across sessions
        await pg.click("#micBtn");await pg.wait_for_timeout(200)
        n0=await ev("__recs.length")
        await ev(f"__recs[{n0-1}].emit([['restart test',true]])")
        await ev(f"__recs[{n0-1}].end()");await pg.wait_for_timeout(200)
        print("restarted:",await ev(f"[__recs.length,{n0},document.querySelector('#micBtn').classList.contains('rec')]"))
        n1=await ev("__recs.length")
        await ev(f"__recs[{n1-1}].emit([['second part',true]])")
        print("folded text:",await ev("$('#input').value"))
        # --- tap again: stop + send what accumulated
        await pg.click("#micBtn");await pg.wait_for_timeout(400)
        print("tap-off sent:",await ev("[...document.querySelectorAll('#chat .msg.me .bubble')].map(b=>b.textContent).slice(-1)"))
        await pg.wait_for_function("S.busy===false");await pg.wait_for_timeout(300)
        # --- tap on, tap off, nothing said: no empty message
        before=await ev("document.querySelectorAll('#chat .msg.me').length")
        await pg.click("#micBtn");await pg.wait_for_timeout(150)
        await pg.click("#micBtn");await pg.wait_for_timeout(300)
        print("no empty send:",await ev(f"document.querySelectorAll('#chat .msg.me').length==={before}"),"mic off:",await ev("!$('#micBtn').classList.contains('rec')"))
        # --- typed send while mic is on: sends once, mic stops, no restart
        await pg.click("#micBtn");await pg.wait_for_timeout(150)
        n2=await ev("__recs.length")
        await ev(f"__recs[{n2-1}].emit([['typed draft',true]])")
        await pg.click("#sendBtn");await pg.wait_for_timeout(600)
        print("typed send once:",await ev("[...document.querySelectorAll('#chat .msg.me .bubble')].map(b=>b.textContent).slice(-1)"),
              "no restart:",await ev(f"__recs.length==={n2}"),"mic off:",await ev("!$('#micBtn').classList.contains('rec')"))
        await pg.wait_for_function("S.busy===false");await pg.wait_for_timeout(300)
        # --- fatal error: mic off, talk off, no restart loop
        await pg.click("#micBtn");await pg.wait_for_timeout(150)
        n3=await ev("__recs.length")
        await ev(f"__recs[{n3-1}].fail('not-allowed')");await pg.wait_for_timeout(400)
        print("fatal stops:",await ev(f"[__recs.length==={n3},!$('#micBtn').classList.contains('rec'),S.talk]"))
        print("\n".join(errs[:15]) or "no errors")
        await b.close()
asyncio.run(main())
