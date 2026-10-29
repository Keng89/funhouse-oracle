import asyncio
from playwright.async_api import async_playwright
from PIL import Image
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(args=["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader"])
        pg=await b.new_page(viewport={"width":390,"height":844},device_scale_factor=2)
        await pg.goto("http://127.0.0.1:8765/csp.html")
        await pg.evaluate("localStorage.setItem('fho_onb2','true');localStorage.setItem('fho_stage3d','true');localStorage.setItem('fho_micHinted','true')");await pg.reload()
        for _ in range(120):
            if await pg.evaluate("typeof E!=='undefined' && E.ready && !!E.model"): break
            await pg.wait_for_timeout(500)
        await pg.add_style_tag(content="#soundPill,#caption,.stage-tools{display:none!important}")
        await pg.evaluate("(async()=>{await setBg3d('studio');await loadChar3d('charlotte');E.cam='face';frameCam(true);wset({mk:'glam'},true)})()");await pg.wait_for_timeout(2500)
        el=await pg.query_selector("#stageBox");shots=[]
        for i,js in enumerate(["wset({mk:'natural'},true)","wset({mk:'glam'},true)","wset({mk:'pink'},true)","wset({mk:'smoky'},true)"]):
            await pg.evaluate(js);await pg.wait_for_timeout(700);await el.screenshot(path=f"/tmp/t3d/mk{i}.png");shots.append(f"/tmp/t3d/mk{i}.png")
        print(await pg.evaluate("[W.headU.uEyeL.value.toArray(),W.headU.uEyeR.value.toArray(),W.headU.uLipC.value.toArray()]"))
        ims=[Image.open(s).crop((150,120,600,560)) for s in shots];w,h=ims[0].size;g=Image.new('RGB',(w*4,h))
        for i,im in enumerate(ims):g.paste(im,(i*w,0))
        g.save('/tmp/t3d/mkgrid.png');await b.close()
asyncio.run(main())
