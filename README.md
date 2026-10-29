# Funhouse Oracle 🔮

A fun, mostly-offline AI chat website: ask anything, make wishes, play games, see your future, and learn languages, with a **realistic 3D person** talking to you in **real photographed places**.

## Features
- **3D talking people** (19): kids, teens, adults, seniors, doctors, many backgrounds. Lip-sync, blinking, eye contact, smiles and 11 gestures. Tap them to react.
- **12 real panoramas** (living room, city, park, forest, mountains, sunset…) or your own photo / 360° photo.
- **2D cartoon stage** with 25 characters and an avatar builder.
- **10 personality modes** + create your own character.
- **22 languages** with auto-detect (full offline replies in English, Tiếng Việt, Español, Français, 中文, 粵語).
- **Future tab**: crystal ball forecast, horoscope + Chinese zodiac, destiny cards, message from future you, time capsule.
- **Lingo Lab**: learn languages from zero (offline lessons for 10 languages, speaking score, flashcards) + AI tutor up to C2.
- **15 games**: party mode, riddles, mind reader, would you rather, truth or dare and more.
- **Video-call mode**, word-timed lip-sync, happy / sad / surprised faces, scenes that follow the time of day.
- **Installable offline app** on GitHub Pages (service worker caches everything after the first visit).
- Voice, hands-free talk mode, optional in-browser AI model (WebLLM).

## Run it
Static site, no build step. Enable **GitHub Pages** (Settings → Pages → Deploy from branch → `main` / root).
Locally: `python3 -m http.server` then open http://localhost:8000 (opening the file directly won't load the 3D people).

## Credits
- 3D people: [Microsoft Rocketbox](https://github.com/microsoft/Microsoft-Rocketbox) (MIT), converted to glTF.
- Panoramas: [Poly Haven](https://polyhaven.com) (CC0) via pmndrs/drei-assets.
- 3D engine: [three.js](https://threejs.org) (MIT), bundled as `three-3d.js`.
See `CREDITS.txt`.
