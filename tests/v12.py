import asyncio
from playwright.async_api import async_playwright
from PIL import Image
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(args=["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader"])
        pg=await b.new_page(viewport={"width":390,"height":844},device_scale_factor=2)
        errs=[];pg.on("pageerror",lambda e:errs.append("PAGEERR "+str(e)[:300]))
        pg.on("console",lambda m:errs.append("console:"+m.text[:250]) if m.type in("error",) and "Failed to load resource" not in m.text and "AudioContext" not in m.text else None)
        await pg.goto("http://127.0.0.1:8765/csp.html")
        await pg.evaluate("localStorage.setItem('fho_onb2','true');localStorage.setItem('fho_toured','true');localStorage.setItem('fho_legalV','1');localStorage.setItem('fho_hints','{\"chat\":1,\"learn\":1,\"today\":1,\"games\":1}');localStorage.setItem('fho_stage3d','true');localStorage.setItem('fho_micHinted','true')");await pg.reload()
        for _ in range(120):
            if await pg.evaluate("typeof E!=='undefined' && E.ready && !!E.model"): break
            await pg.wait_for_timeout(500)
        await pg.wait_for_timeout(1500)
        await pg.screenshot(path="/tmp/t3d/u0.png")
        el=await pg.query_selector("#stageBox")
        await pg.add_style_tag(content="#soundPill{display:none!important}")
        await pg.evaluate("(async()=>{await setBg3d('studio')})()");await pg.wait_for_timeout(1000)
        for v in ["aiko","yuna","mika","sora","rin","hana","luna","nami"]:
            ok=await pg.evaluate(f"(async()=>{{const r=await loadVRMBuiltin(VRM_BUILTIN.find(x=>x.id==='{v}'));E.cam='face';frameCam(true);E.vg=null;return r}})()")
            await pg.evaluate("ST.talkUntil=0;try{speechSynthesis.cancel()}catch(e){}");await pg.wait_for_timeout(1800)
            await pg.add_style_tag(content="#caption,.stage-tools,#stageName,#stageSheet{visibility:hidden!important}")
            await el.screenshot(path=f"/tmp/t3d/an_{v}.png")
            im=Image.open(f"/tmp/t3d/an_{v}.png");w,h=im.size;s=int(min(w,h)*.62);cx,cy=w//2,int(h*.46)
            im.crop((cx-s//2,cy-s//2,cx+s//2,cy+s//2)).resize((112,112),Image.LANCZOS).convert("RGB").save(f"/tmp/t3d/vrm/{v}.jpg",quality=86)
            print(v,ok)
        await pg.evaluate("E.cam='upper';frameCam(true)");await pg.wait_for_timeout(1500)
        await pg.add_style_tag(content="#caption,.stage-tools,#stageName{visibility:visible!important}")
        await pg.screenshot(path="/tmp/t3d/u1.png")
        await pg.evaluate("switchTab('learn');ACD.mode='topics';saveACD();renderLearn()");await pg.wait_for_timeout(400)
        await pg.screenshot(path="/tmp/t3d/u2.png")
        await pg.evaluate("startClass('Investing for beginners',0)");await pg.wait_for_timeout(800)
        await pg.screenshot(path="/tmp/t3d/u3.png")
        await pg.evaluate("document.querySelectorAll('.hb-modal').forEach(m=>m.remove());switchTab('games')");await pg.wait_for_timeout(300)
        await pg.screenshot(path="/tmp/t3d/u4.png")
        await pg.evaluate("switchTab('learn');ACD.mode='en';saveACD();renderLearn();startLesson(EN_UNITS[0],'w')");await pg.wait_for_timeout(600)
        await pg.screenshot(path="/tmp/t3d/u5.png")
        print("hf on",await pg.evaluate("ACD.hf"),"tabs",await pg.evaluate("[...document.querySelectorAll('.tabs .tab')].filter(t=>!t.hidden).map(t=>t.textContent)"))
        await pg.evaluate("switchTab('chat')");await pg.wait_for_timeout(300)
        await pg.screenshot(path="/tmp/t3d/u6.png",full_page=False)
        print("errs",errs[:10])
        await b.close()
asyncio.run(main())
