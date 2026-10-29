# 3D bundle (three-3d.js)

`three-3d.js` (repo root) is three.js 0.170 + GLTFLoader + @pixiv/three-vrm 3.5.5, bundled into one file
because claude.ai artifacts can't load ES modules from npm. It sets `window.FHO3D = {THREE, GLTFLoader, VRMLoaderPlugin, VRMUtils}`.

Rebuild:
```
cd tools/3d
npm install
npx esbuild entry.js --bundle --minify --format=iife --outfile=../../three-3d.js
```
After rebuilding, bump the `?v=` number where the app loads `three-3d.js` (search `three-3d.js?v=` in src/js/04-stage3d-rocketbox.js)
and bump the version `V` in `sw.js`, so phones don't keep the old file.

`reference/` holds the one-off Python scripts used to convert Microsoft Rocketbox avatars (FBX → glTF, portraits,
clothing masks, face landmarks). They are kept for reference; paths inside them point to old temporary folders.
