import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(args=["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader"])
        pg=await b.new_page(viewport={"width":390,"height":844},device_scale_factor=2)
        errs=[];pg.on("pageerror",lambda e:errs.append("PAGEERR "+str(e)[:300]))
        pg.on("console",lambda m:errs.append("console:"+m.text[:250]) if m.type=="error" and "Failed to load resource" not in m.text and "AudioContext" not in m.text else None)
        await pg.goto("http://127.0.0.1:8765/csp.html")
        await pg.evaluate("localStorage.clear();localStorage.setItem('fho_onb2','true');localStorage.setItem('fho_toured','true');localStorage.setItem('fho_legalV','1');localStorage.setItem('fho_hints','{\"chat\":1,\"learn\":1,\"today\":1,\"games\":1}')");await pg.reload()
        await pg.wait_for_timeout(2500)
        await pg.evaluate("switchTab('learn');ACD.mode='en';saveACD();renderLearn();startPlacement()");await pg.wait_for_timeout(400)
        # answer: correct for A0-B1, wrong for B2+
        for i in range(28):
            st=await pg.evaluate("ACV.view")
            if st!="place": break
            q=await pg.evaluate("EN_PLACEMENT2[ACV.pl.i]")
            right=q[0] in ("A0","A1","A2","B1") or (q[0]=="B2" and i%2==0)
            target=q[2] if right else q[3].split("|")[0]
            await pg.evaluate("t=>[...document.querySelectorAll('#acad .ac-opt')].find(b=>b.textContent===t).click()",target);await pg.wait_for_timeout(150)
            if i==17: await pg.screenshot(path="t15_wrong.png")
            if i==2: await pg.screenshot(path="t15_right.png")
            await pg.evaluate("document.querySelector('#acad .ac-fb .btn:last-child').click()");await pg.wait_for_timeout(120)
        print("view",await pg.evaluate("ACV.view"),"lv",await pg.evaluate("ACD.placeLast&&[ACD.placeLast.lv,ACD.placeLast.ok,ACD.placeLast.n,ACD.placeLast.miss.length]"),"nb",await pg.evaluate("ACD.mist.length"))
        await pg.screenshot(path="t15_res.png")
        await pg.evaluate("document.querySelector('#acad .ac-review').scrollIntoView()");await pg.wait_for_timeout(300);await pg.screenshot(path="t15_res2.png")
        await pg.evaluate("ACV.view='home';renderAcad()");await pg.wait_for_timeout(300)
        print("tiles",await pg.evaluate("[...document.querySelectorAll('#acad .ac-tile b')].map(b=>b.textContent)"),"tests",await pg.evaluate("document.querySelectorAll('.ac-test').length"))
        # grammar lesson with a wrong answer
        await pg.evaluate("startLesson(EN_UNITS.find(u=>u.id==='a2-5'),'g')");await pg.wait_for_timeout(300)
        await pg.evaluate("document.querySelector('#acad .ac-check').click()");await pg.wait_for_timeout(300)
        await pg.evaluate("[...document.querySelectorAll('#acad .ac-opt')].find(b=>b.textContent!==ACV.les.items[ACV.les.i].ans).click()");await pg.wait_for_timeout(300)
        print("why:",await pg.evaluate("document.querySelector('#acad .ac-why')?.textContent"))
        await pg.screenshot(path="t15_lesson.png")
        # finish lesson quickly
        for _ in range(30):
            if await pg.evaluate("ACV.les.state==='end'"): break
            await pg.evaluate("ACV.les.i++;ACV.les.state=null;renderAcad()");await pg.wait_for_timeout(60)
        await pg.wait_for_timeout(300)
        print("end review:",await pg.evaluate("!!document.querySelector('.ac-review .ac-mrow')"),"practice btn",await pg.evaluate("[...document.querySelectorAll('.ac-end button')].map(b=>b.textContent)"))
        await pg.screenshot(path="t15_end.png",full_page=True)
        # level test
        await pg.evaluate("startLevelTest('A2')");await pg.wait_for_timeout(300)
        n=await pg.evaluate("ACV.les.items.length");print("test items",n)
        for i in range(n):
            await pg.evaluate("(()=>{const it=ACV.les.items[ACV.les.i];const bs=[...document.querySelectorAll('#acad .ac-opt')];(bs.find(b=>b.textContent===it.ans)).click()})()");await pg.wait_for_timeout(80)
            await pg.evaluate("document.querySelector('#acad .ac-fb .btn:last-child').click()");await pg.wait_for_timeout(80)
        await pg.wait_for_timeout(300)
        print("test end",await pg.evaluate("[ACV.les.state,ACV.les.acc,ACD.tests,ACD.lv]"))
        await pg.screenshot(path="t15_test.png")
        # notebook practice
        await pg.evaluate("ACV.view='home';renderAcad();practiseNotebook()");await pg.wait_for_timeout(300)
        before=await pg.evaluate("ACD.mist.length")
        await pg.evaluate("(()=>{const it=ACV.les.items[ACV.les.i];[...document.querySelectorAll('#acad .ac-opt')].find(b=>b.textContent===it.ans).click()})()");await pg.wait_for_timeout(200)
        print("notebook",before,"->",await pg.evaluate("ACD.mist.length"))
        print("\n".join(errs[:15]) or "no errors")
        await b.close()
asyncio.run(main())
