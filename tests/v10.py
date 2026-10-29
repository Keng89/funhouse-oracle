import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(args=["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader"])
        ctx=await b.new_context(viewport={"width":390,"height":844},device_scale_factor=2)
        pg=await ctx.new_page()
        errs=[];pg.on("pageerror",lambda e:errs.append("PAGEERR "+str(e)[:300]))
        pg.on("console",lambda m:errs.append("console:"+m.text[:200]) if m.type=="error" and "Failed to load resource" not in m.text and "AudioContext" not in m.text else None)
        await pg.add_init_script("localStorage.setItem('fho_toured','true');localStorage.setItem('fho_legalV','1')")
        await pg.goto("http://127.0.0.1:8765/csp.html");await pg.wait_for_timeout(3000)
        await pg.screenshot(path="/tmp/t3d/x0.png")
        print("onboarding shown:",await pg.evaluate("!!document.querySelector('#onbModal')"))
        await pg.evaluate("[...document.querySelectorAll('#onbModal .ac-tile')].slice(0,2).forEach(b=>b.click())")
        await pg.evaluate("[...document.querySelectorAll('#onbModal .btn')][0].click()");await pg.wait_for_timeout(500)
        await pg.screenshot(path="/tmp/t3d/x1.png")
        # placement
        await pg.evaluate("[...document.querySelectorAll('#onbModal .btn')][0].click()");await pg.wait_for_timeout(600)
        for i in range(20):
            ok=await pg.evaluate("""(()=>{const q=EN_PLACEMENT[ACV.pl?ACV.pl.i:99];if(!q)return false;const lv=LVIDX(q[0]);const btns=[...document.querySelectorAll('#acad .ac-opt')];const t=lv<=3?q[2]:q[3].split('|')[0];const b=btns.find(x=>x.textContent===t);if(b)b.click();return !!b})()""")
            if not ok: break
            await pg.wait_for_timeout(120)
        await pg.wait_for_timeout(800)
        print("placed level:",await pg.evaluate("ACD.lv"),await pg.evaluate("ACD.placed"))
        await pg.screenshot(path="/tmp/t3d/x2.png",full_page=False)
        # words lesson on first B2 unit
        await pg.evaluate("startLesson(EN_UNITS[0],'w')");await pg.wait_for_timeout(400)
        await pg.screenshot(path="/tmp/t3d/x3.png")
        n=0
        while n<60:
            st=await pg.evaluate("ACV.les?ACV.les.items[ACV.les.i]?ACV.les.items[ACV.les.i].t:(ACV.les.state||'none'):'gone'")
            if st in("end","gone","none"): break
            if st=="intro": await pg.evaluate("document.querySelector('#acad .ac-check').click()")
            elif st=="mc": await pg.evaluate("(()=>{const it=ACV.les.items[ACV.les.i];[...document.querySelectorAll('#acad .ac-opt')].find(b=>b.textContent===it.ans).click()})()")
            elif st=="type":
                await pg.evaluate("(()=>{const it=ACV.les.items[ACV.les.i];document.querySelector('#acad .ac-input').value=it.ans;document.querySelector('#acad .ac-check').click()})()")
            if n==10: await pg.screenshot(path="/tmp/t3d/x4.png")
            await pg.wait_for_timeout(80)
            nb=await pg.evaluate("(()=>{const b=document.querySelector('#acad .ac-fb .btn');if(b){b.click();return 1}return 0})()")
            await pg.wait_for_timeout(80);n+=1
        await pg.wait_for_timeout(500)
        print("words lesson:",await pg.evaluate("[ACV.les&&ACV.les.state,ACV.les&&ACV.les.acc,Object.keys(ACD.srs).length]"))
        await pg.screenshot(path="/tmp/t3d/x5.png")
        # grammar lesson
        await pg.evaluate("startLesson(EN_UNITS[7],'g')");await pg.wait_for_timeout(300)
        await pg.evaluate("document.querySelector('#acad .ac-check').click()");await pg.wait_for_timeout(200)
        await pg.screenshot(path="/tmp/t3d/x6.png")
        # build item test
        await pg.evaluate("(()=>{const L=ACV.les;L.i=L.items.findIndex(x=>x.t==='build');renderAcad()})()");await pg.wait_for_timeout(200)
        await pg.evaluate("(()=>{const words=ACV.les.items[ACV.les.i].target.replace(/[.,!?]/g,'').split(/\\s+/);const bank=[...document.querySelectorAll('#acad .ac-bank .ac-tile2')];words.forEach(w=>{const b=bank.find(x=>x.textContent===w&&!x.disabled);b&&b.click()})})()")
        await pg.evaluate("document.querySelector('#acad .ac-check').click()");await pg.wait_for_timeout(200)
        print("build ok:",await pg.evaluate("!!document.querySelector('#acad .ac-fb.ok')"))
        await pg.screenshot(path="/tmp/t3d/x7.png")
        # speak lesson role
        await pg.evaluate("startLesson(EN_UNITS[0],'s')");await pg.wait_for_timeout(300)
        await pg.evaluate("document.querySelector('#acad .ac-check').click()");await pg.wait_for_timeout(300)
        await pg.screenshot(path="/tmp/t3d/x8.png")
        # review with FSRS
        await pg.evaluate("Object.values(ACD.srs).forEach(c=>c.due=0);ACV.view='review';ACV.rv=null;renderAcad()");await pg.wait_for_timeout(300)
        await pg.evaluate("document.querySelector('#acad .ac-check').click()");await pg.wait_for_timeout(200)
        await pg.screenshot(path="/tmp/t3d/x9.png")
        await pg.evaluate("[...document.querySelectorAll('#acad .ac-rate .ac-opt')][2].click()");await pg.wait_for_timeout(600)
        print("fsrs loaded:",await pg.evaluate("!!window.FSRSLIB"),"next due days:",await pg.evaluate("(()=>{const c=Object.values(ACD.srs).find(x=>x.c);return c?((c.due-Date.now())/864e5).toFixed(2):null})()"))
        # words explorer
        await pg.evaluate("ACV.view='words';ACV.wx=null;renderAcad()");await pg.wait_for_timeout(1200)
        await pg.screenshot(path="/tmp/t3d/x10.png")
        # companion
        await pg.evaluate("switchTab('chat');S.mode='friend';renderModes()")
        for t in ["Hi! My name is Pai and I work as a designer.","I have a job interview tomorrow and I'm really nervous because the company is huge.","My dog is called Luna."]:
            await pg.fill("#input",t);await pg.click("#sendBtn");await pg.wait_for_timeout(1300)
        print("facts:",await pg.evaluate("MEM.facts.map(f=>f.t)"),"fu:",await pg.evaluate("MEM.fu.map(f=>f.w+'@'+f.d)"))
        await pg.screenshot(path="/tmp/t3d/x11.png")
        # fake time passage: follow-up due
        await pg.evaluate("MEM.fu.forEach(f=>{f.d='2000-01-01'});saveMEM();CMP.snap()");await pg.wait_for_timeout(1000)
        print("convos:",await pg.evaluate("CMP.list.length"))
        await pg.reload();await pg.wait_for_timeout(3000)
        print("after reload msgs:",await pg.evaluate("document.querySelectorAll('#chat .msg').length"),"last bot:",await pg.evaluate("[...document.querySelectorAll('#chat .msg.bot .bubble')].slice(-1)[0].textContent"))
        await pg.screenshot(path="/tmp/t3d/x12.png")
        await pg.evaluate("CMP.newChat('friend')");await pg.wait_for_timeout(500)
        await pg.evaluate("openChats()");await pg.wait_for_timeout(300)
        await pg.screenshot(path="/tmp/t3d/x13.png")
        await pg.evaluate("$('#chatsDrawer').remove();switchTab('today')");await pg.wait_for_timeout(300)
        await pg.fill("#view-today .dy-add .ac-input","Finish slides");await pg.evaluate("document.querySelector('#view-today .dy-add .btn').click()")
        await pg.evaluate("document.querySelectorAll('#view-today .dy-mood')[1].click()");await pg.wait_for_timeout(300)
        await pg.screenshot(path="/tmp/t3d/x14.png",full_page=True)
        await pg.evaluate("openHB()");await pg.wait_for_timeout(300)
        await pg.screenshot(path="/tmp/t3d/x15.png")
        await pg.evaluate("$('#hbModal').remove();switchTab('me')");await pg.wait_for_timeout(300)
        await pg.evaluate("$('#vxPanel').scrollIntoView()");await pg.wait_for_timeout(200)
        await pg.screenshot(path="/tmp/t3d/x16.png")
        print("xp:",await pg.evaluate("[HBS.xp,HB.today(),HB.streakNow(),HB.quests().list,Object.keys(HBS.badges)]"))
        print("errs",errs[:15])
        await b.close()
asyncio.run(main())
