# Third-party components and licences (commercial use)

Everything bundled with Funhouse Oracle is licensed for commercial use, including a paid subscription app. Keep this file and CREDITS.txt in the app.

| Component | Used for | Licence | Notes |
|---|---|---|---|
| three.js 0.170 | 3D stage | MIT | Bundled in `three-3d.js` |
| Microsoft Rocketbox avatars | 42 realistic 3D people | MIT | Keep `avatars/ROCKETBOX-LICENSE.txt` |
| Poly Haven HDRIs | 3D backgrounds | CC0 | No attribution required (credited anyway) |
| ts-fsrs 5.2.3 | Spaced-repetition review | MIT | Bundled in `fsrs.js` |
| CEFR-J Wordlist 1.5 | A1–B2 vocabulary levels | Free for commercial use **with citation** | Cite: The CEFR-J Wordlist Version 1.5, compiled by Yukio Tono, TUFS |
| Octanove Vocabulary Profile C1/C2 | C1–C2 vocabulary levels | CC BY-SA 4.0 | Attribute; `data/en-words.json` (the adapted data) stays CC BY-SA |
| WordNet 3.0 | Word meanings and examples | WordNet licence (permissive) | Keep the Princeton copyright notice |
| English course content (45 units) | English Academy | Original, written for this app | Yours |
| WebLLM (@mlc-ai/web-llm 0.2.86) | In-browser AI | Apache-2.0 | Loaded from jsDelivr |
| kokoro-js 1.2.1 + Kokoro-82M | Natural offline voice | Apache-2.0 (code and weights) | Loaded on demand |
| Google Fonts | Typography | SIL OFL | |

## In-browser AI models (the user's device downloads them)

| Model family | Licence | Commercial use |
|---|---|---|
| Qwen 3.5 (0.8B–9B), Qwen 2.5 0.5B/1.5B/7B | Apache-2.0 | Yes |
| Gemma 4 | Apache-2.0 | Yes |
| Gemma 2 | Gemma Terms of Use | Yes, follow the prohibited-use policy |
| Llama 3.1 / 3.2, Hermes 3 | Llama Community Licence | Yes (under 700M monthly users); show "Built with Llama" |
| Phi-4 mini | MIT | Yes |
| Ministral 3 | Apache-2.0 | Yes |
| SmolLM2 | Apache-2.0 | Yes |

Avoid adding Qwen 2.5 3B / 72B (Qwen Research licence: non-commercial).

## Cloud AI and voices (bring your own key)

Users paste their own keys, so each provider's terms apply to them. For a subscription where you pay for AI, run a small server (for example a Cloudflare Worker) that keeps your key secret. Never ship a key inside the web page.
- Google AI Studio free tier: prompts may be used for training; check the terms before using it for paid users (EU/UK/EEA need a paid tier).
- Cohere's free tier is non-commercial; it is not included.

This is a practical summary, not legal advice.

## Added in v11
| Component | Used for | Licence |
|---|---|---|
| @pixiv/three-vrm 3.5.5 | Anime-style (VRM) characters | MIT (bundled in three-3d.js) |
| "Aiko" (VRM1_Constraint_Twist_Sample, pixiv Inc.) | Built-in anime character | VRM Public License 1.0: commercial use by corporations, redistribution and modification allowed, credit not required |
| Coaching programs, Wheel of Life, speaking coach | Coach | Original content |
| User-uploaded .vrm files | Personal characters | The user is responsible for the rights to files they upload; they stay on their device |
