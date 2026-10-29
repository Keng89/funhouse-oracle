import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(args=["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader"])
        pg=await b.new_page(viewport={"width":390,"height":844},device_scale_factor=2)
        errs=[];pg.on("pageerror",lambda e:errs.append("PAGEERR "+str(e)[:300]))
        pg.on("console",lambda m:errs.append("console:"+m.text[:250]) if m.type=="error" and "Failed to load resource" not in m.text and "AudioContext" not in m.text else None)
        await pg.goto("http://127.0.0.1:8765/csp.html")
        await pg.evaluate("localStorage.setItem('fho_onb2','true');localStorage.setItem('fho_toured','true');localStorage.setItem('fho_legalV','1');localStorage.setItem('fho_hints','{\"chat\":1,\"learn\":1,\"today\":1,\"games\":1}');localStorage.setItem('fho_stage3d','true');localStorage.setItem('fho_micHinted','true')");await pg.reload()
        for _ in range(120):
            if await pg.evaluate("typeof E!=='undefined' && E.ready && !!E.model"): break
            await pg.wait_for_timeout(500)
        await pg.add_style_tag(content="#soundPill{display:none!important}")
        await pg.evaluate("switchTab('stories')");await pg.wait_for_timeout(400);await pg.screenshot(path="/tmp/t3d/s0.png")
        print("stories",await pg.evaluate("STORIES.length"),"cards",await pg.evaluate("document.querySelectorAll('.st-card').length"))
        await pg.evaluate("openReader(STORIES[0])");await pg.wait_for_timeout(400);await pg.screenshot(path="/tmp/t3d/s1.png")
        await pg.evaluate("RD.i=2;drawPage()");await pg.wait_for_timeout(200)
        await pg.evaluate("openReader(STORIES.find(s=>s.cat==='choose'))");await pg.wait_for_timeout(300);await pg.screenshot(path="/tmp/t3d/s2.png")
        await pg.evaluate("document.querySelector('.st-choices .btn').click()");await pg.wait_for_timeout(200)
        print("cyoa page",await pg.evaluate("RD.i"))
        await pg.evaluate("closeReader();openMaker()");await pg.wait_for_timeout(300);await pg.screenshot(path="/tmp/t3d/s3.png")
        await pg.evaluate("[...document.querySelectorAll('.hb-modal .btn')].find(b=>b.textContent.includes('Surprise')).click()");await pg.wait_for_timeout(600);await pg.screenshot(path="/tmp/t3d/s4.png")
        print("made",await pg.evaluate("[RD&&RD.s.t,RD&&RD.s.pages.map(p=>p[1]).join(' | ').slice(0,400)]"))
        await pg.evaluate("closeReader();requestStory('a unicorn who is scared of the dark',5,0)");await pg.wait_for_timeout(500)
        print("ask offline",await pg.evaluate("RD&&RD.s.t"))
        await pg.evaluate("closeReader();switchTab('games')");await pg.wait_for_timeout(300);await pg.screenshot(path="/tmp/t3d/s5.png")
        # games
        await pg.evaluate("startGame('rps')");await pg.wait_for_timeout(500)
        for i in range(6):
            await pg.evaluate("if(S.game)command('g:rps_r','✊')");await pg.wait_for_timeout(900)
        print("rps",await pg.evaluate("[...document.querySelectorAll('#chat .msg.bot .bubble')].slice(-1)[0].textContent"))
        await pg.evaluate("startGame('simon')");await pg.wait_for_timeout(1300);await pg.screenshot(path="/tmp/t3d/s6.png")
        await pg.wait_for_timeout(3500)
        print("simon phase",await pg.evaluate("S.game&&S.game.phase"),await pg.evaluate("S.game&&S.game.seq"))
        await pg.evaluate("S.game.seq.forEach(m=>command('g:mv_'+m,m))");await pg.wait_for_timeout(500)
        print("simon round",await pg.evaluate("S.game&&S.game.r"))
        await pg.evaluate("endGame('x');startGame('feel')");await pg.wait_for_timeout(1800);await pg.screenshot(path="/tmp/t3d/s7.png")
        for i in range(8):
            await pg.evaluate("if(S.game&&S.game.cur)command('g:fe_'+S.game.cur[0],'x')");await pg.wait_for_timeout(2600)
        print("feel",await pg.evaluate("[...document.querySelectorAll('#chat .msg.bot .bubble')].slice(-1)[0].textContent"))
        await pg.evaluate("startGame('dice')");await pg.wait_for_timeout(1600);await pg.screenshot(path="/tmp/t3d/s8.png")
        await pg.evaluate("endGame('x');startGame('dance')");await pg.wait_for_timeout(3500);await pg.screenshot(path="/tmp/t3d/s9.png")
        for i in range(10):
            await pg.evaluate("(()=>{const g=S.game;if(!g)return;const k=Math.round((performance.now()-g.t0)/g.beat);const target=g.t0+(k+1)*g.beat;setTimeout(()=>document.querySelector('#dancePad').dispatchEvent(new PointerEvent('pointerdown',{bubbles:true})),target-performance.now())})()")
            await pg.wait_for_timeout(650)
        await pg.wait_for_timeout(12000)
        print("dance",await pg.evaluate("[...document.querySelectorAll('#chat .msg.bot .bubble')].slice(-1)[0].textContent"))
        await pg.fill("#input","tell me a story about a brave kitten");await pg.click("#sendBtn");await pg.wait_for_timeout(2500)
        print("chat story",await pg.evaluate("RD&&RD.s.t"))
        print("errs",errs[:10])
        await b.close()
asyncio.run(main())
