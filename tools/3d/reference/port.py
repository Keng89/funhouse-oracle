import asyncio
from playwright.async_api import async_playwright
from PIL import Image
NEW="olivia chloe sophie ava grace lily nadia ruby emma hannah mia charlotte bella victoria diana natalie rosa anna jess leo diego victor richard".split()
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(args=["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader"])
        pg=await b.new_page(viewport={"width":600,"height":900})
        await pg.goto("http://127.0.0.1:8765/index.html")
        await pg.evaluate("localStorage.clear();localStorage.setItem('fho_stage3d','true');localStorage.setItem('fho_voice','false')");await pg.reload()
        for _ in range(120):
            if await pg.evaluate("typeof E!=='undefined' && E.ready && !!E.model"): break
            await pg.wait_for_timeout(500)
        await pg.add_style_tag(content="#caption,#soundPill,.stage-tools,#stageName,#stageSheet{display:none!important}")
        await pg.evaluate("(async()=>{await setBg3d('studio')})()");await pg.wait_for_timeout(1500)
        for cid in NEW:
            f=await pg.evaluate(f"(async()=>{{await loadChar3d('{cid}');E.cam='face';frameCam(true);return cur3d().f}})()")
            await pg.wait_for_timeout(1300)
            el=await pg.query_selector("#stageBox");await el.screenshot(path="/tmp/t3d/pt.png")
            im=Image.open("/tmp/t3d/pt.png");w,h=im.size;s=int(min(w,h)*.62);cx,cy=w//2,int(h*.48)
            im.crop((cx-s//2,cy-s//2,cx+s//2,cy+s//2)).resize((112,112),Image.LANCZOS).convert("RGB").save(f"/tmp/t3d/avatars/{f}.jpg",quality=85)
            print(cid,f)
        await b.close()
asyncio.run(main())
