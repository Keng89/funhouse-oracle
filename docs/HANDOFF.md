# Funhouse Oracle: complete handoff guide

This guide is for any developer or AI coding assistant that continues building Funhouse Oracle. Read it fully before changing anything. It explains what the app is, how the code is organized, the rules that keep it working, how to test and publish it, and what to build next.

- **Owner:** Pai Keng Kuan (GitHub: Keng89). Contact in the app: paidigitalstore@gmail.com
- **Repository:** https://github.com/Keng89/funhouse-oracle (public, branch `main`)
- **Live site:** https://keng89.github.io/funhouse-oracle/ (GitHub Pages, deployed from `main`, repo root)
- **Public legal pages:** https://keng89.github.io/funhouse-oracle/legal/
- **Current version:** v17 (October 29, 2026)
- **Business plan:** subscription app. Payments are **not built yet**.

---

## 1. What the app is

A fun, mostly offline AI web app (installable PWA) with talking characters. Main areas, by bottom tab:

| Tab | What's in it |
|---|---|
| 💬 **Chat** | Talk with a character by text or voice. Personality modes: Companion 🤝 (remembers your life, follows up), Life Coach 🧭, Teacher 🎓, Comedian 🎤, Genie 🧞, Fortune 🔮, Professor, Free, Pirate, Cat, Hype, Kids 🧸, Bard, plus your own custom character. Saved chats, memory, quick-start shortcuts. |
| 🎓 **Learn** | **Any topic** (AI teacher, beginner → advanced, 9 topic categories). **English Academy**: 28-question placement test with instant feedback and results page, 45 units from A0 to C2 (words, grammar, speaking lessons), an explanation for each of the 226 grammar questions, level tests, mistakes notebook, spaced-repetition review (FSRS), 9,700-word explorer, Daily 5, 8 offline branching conversations, skill levels (speak/listen/read/write), can-do goals, weekly report and share card, beginner support. **Other languages** (Lingo Lab, 10 languages). |
| ☀️ **Today** | Daily helper: tip of the day, Daily 5, weekly report, 8 coaching programs (7 days each), Wheel of Life, goals, speaking coach, mood check-in, to-dos with calendar reminders, focus timer, journal. |
| 🎮 **Play** | Games hub (15 chat games + 5 character games: copy my moves, rock paper scissors, guess my feeling, dance beat, story dice), 📚 27 kids' stories read aloud plus story maker and "any story you want", 🔮 Future (fortunes, horoscope), 🪙 Wishes. |
| ⚙️ **Settings** | Settings grid: AI brain, voice, characters, avatar builder, language and name, memory (add/edit/pin), own character, goals, backup and restore, kids profiles, text size, legal and privacy, help and tour. |

**The stage** (above every tab): a talking character, which can be any of these:
- a realistic 3D person (42+ Microsoft Rocketbox avatars, with wardrobe, makeup, jewellery and real panoramas);
- an anime VRM girl (8 colour variants, or upload your own .vrm);
- a 2D cartoon (25 characters plus an avatar builder);
- a talking photo of any portrait.

Lip-sync, blinking, gestures and emotions. Stage tools: 3D toggle, sound, wardrobe, characters, backgrounds, moves, video-call mode, photo, captions, size, hide.

**Kids mode:** parent creates Kids profiles with a 4-digit PIN. Kids see only stories, bedtime story, story maker, a gentle offline chat, English A0–A1, Daily 5 and character games. Daily time limit with a lock screen. PIN needed to exit. Chats aren't saved, memory is off, cloud AI is off, and the mic is off unless a parent allows it.

**AI brains** (Settings → AI brain, or the brain chip at the top):
1. **Spark**: built-in, rule-based, offline, instant. Default.
2. **In-browser AI** via WebLLM 0.2.86: downloads a model (Qwen, Gemma 4, Phi-4 mini, Llama 3.x, SmolLM2…). Needs WebGPU, so it doesn't work inside claude.ai artifacts (CSP). It works on the hosted site.
3. **Chrome built-in AI** (Gemini Nano, `LanguageModel` API): desktop Chrome only. Disabled automatically on phones.
4. **Local server**: Ollama / LM Studio on the user's computer.
5. **Cloud with the user's own key**: Groq, Google Gemini, OpenRouter, Cerebras, Mistral, OpenAI, Anthropic, DeepSeek, or a custom OpenAI-compatible URL. Default model names in `CLOUD` (src/js/06) may be outdated; verify them.

**Voices:** best device voice (quality-ranked), Kokoro natural voice (kokoro-js 1.2.1, offline after download), OpenAI or ElevenLabs with the user's key. Speech recognition uses the browser's Web Speech API.

**Languages:** UI and offline replies in English and Vietnamese (full), plus Spanish, French, Chinese and Cantonese for core parts. 22 languages are auto-detected in chat. New UI strings since v10 exist in English and Vietnamese only; other languages fall back to English.

**Legal & safety (v17):**
- First-run consent screen with age confirmation (13+ or parent), versioned by `LEGAL_V`.
- AI disclosure: stage label "· 🤖 AI" and a note at the top of the chat.
- Crisis protocol: an on-device check runs before any brain replies, then shows a caring reply and a crisis-lines card. The message is not sent to the AI.
- Safety rules are appended to every AI system prompt.
- Break reminders: kids every 45 minutes, everyone after 3 hours.
- In-context disclaimers, photo-permission notice, "Delete all my data" button.
- Legal center with 7 pages, also published as static pages in `legal/`.

---

## 2. Repository layout

```
/                       GitHub Pages site root (what users load)
  index.html            BUILT app. Never edit by hand. Generated from src/ by tools/build.py
  sw.js                 service worker (offline cache). Bump V on every release
  manifest.webmanifest  PWA manifest
  three-3d.js           three.js + GLTFLoader + three-vrm bundle (window.FHO3D). See tools/3d
  fsrs.js               ts-fsrs bundle (window.FSRSLIB)
  data/en-words.json    9,700-word list (CEFR-J / Octanove / WordNet)
  avatars/              Rocketbox 3D people (glTF/JSON + textures, portraits, clothing masks)
  vrm/                  anime character (model.json + webp textures) and portraits
  bg/                   panoramas and backgrounds
  legal/                public legal pages (generated by tools/legal_pages.js)
  CREDITS.txt, COMMERCIAL-LICENSES.md   licences, keep them
src/                    SOURCE OF TRUTH
  head.html             <title>, manifest link, fonts link
  styles.css            all CSS (later sections override earlier ones)
  body.html             static HTML skeleton (header, stage, tabs, views, composer)
  js/01-core.js … js/13-v17-legal-safety.js   scripts, in load order
  build-manifest.json   script order + whitespace between blocks (keeps builds byte-identical)
tools/
  build.py              builds index.html and build/artifact.html from src/
  legal_pages.js        regenerates legal/*.html from the LEGAL texts in src/js/13
  serve_test.py         local server on :8765 + csp.html (artifact CSP) for tests
  3d/                   how to rebuild three-3d.js; reference scripts for avatar conversion
tests/                  Playwright end-to-end tests (v10 … v17) + run_all.sh
docs/HANDOFF.md         this file
AGENTS.md               short pointer for AI assistants
```

### What each script contains (src/js)

| File | Main contents and key globals |
|---|---|
| 01-core.js | Helpers `$`, `h(tag,attrs,...kids)`, `store`, `today`, `pick`, `shuffle`, `fill`. Languages `LANGS`, state `S`, personalities `MODES`, `PACKS` (UI text + offline replies per language), `T()`/`TT()`, Spark brain `sparkReply`, games, chat `send()`, `addMsg`, `oracle`, `speak`, `listenFor`, `switchTab`, `loadBrain`, `sysPrompt` |
| 02-cantonese-future-lingo.js | Cantonese pack, Future tab, Lingo Lab (other languages), `renderLearn` base |
| 03-stage2d-scenes-avatar-builder.js | 2D talking stage, scenes, avatar builder, characters `curChar()` |
| 04-stage3d-rocketbox.js | 3D stage `E` (three.js scene), Rocketbox loader, `cur3d()`, lip-sync, gestures, panoramas |
| 05-v8-… | Sound prompts, talking photos (`phFile`), voice games |
| 06-v9-… | More 3D people, wardrobe (`WDEF`, `applyWard`), AI brain switcher (`BC`, `CLOUD`, WebLLM, local, cloud engines) |
| 07-v10-… | `EN_LEVELS`, `EN_UNITS`, `EN_PLACEMENT`, `EN_ROLEPLAYS`; English Academy (`ACD` saved state, `ACV` view state, `startLesson`, `acRenderLesson`, `speakBlock`, `enSay`, `trNative`, FSRS `rateCard`); habits/XP/streaks/quests `HB`, `HBS`, `onboarding()`; voices `VX`, Kokoro `kkSpeak`, `speakAs(char,text,after,lang)`; brains v2 (`chromeEngine`, `hasChromeAI`, `bestModel`); companion memory `MEM`, `addFact`, `extractMem`, `CRISIS`, `compReply`, saved chats `CMP`; Today `renderToday` |
| 08-v11-v12-… | Makeup shader (`patchHead`), anime VRM (`loadVRMBuiltin`, `vrmChar()`), Coach (`PROGRAMS`, `coachReply`, `modal(title)` returns `{m,b,close}`), Teacher mode, topic classes (`TOPICS`, `startClass`), 5-tab navigation, `quickStart()`, `aiSetup()` |
| 09-v13-… | `STORY_CATS`, `STORIES`, reader (`openReader`, `readPage`), story maker (`makeStory`, `requestStory`), character games `CGAMES`, `charGamesBox()` |
| 10-v14-… | Help center `openHelp`, `GUIDES`, `TIPS`, guided tour `startTour`, Settings grid `#setIndex`, first-visit tab hints |
| 11-v15-… | `EN_WHY` (explanations), `EN_PLACEMENT2`, `acWhy`, `acMiss`, mistakes notebook, level tests, placement results page |
| 12-v16-… | `CONVOS` (offline conversations), skills `skRec`/`skLevel`, activity log `ACD.log`, Daily 5 `startDaily`, welcome back, weekly report `weekCard`/`shareWeek`, can-do panel, beginner support `begOn()`, backup `openBackup`/`restoreFile`, text size, editable memories, Kids profiles (`KIDS`, `kidsOn()`, `enterKid`, `exitKid`, `askPin`, `kidTick`) |
| 13-v17-… | `LEGAL_V`, `LEGAL_DATE`, `LEGAL_CONTACT`, `LEGAL` (legal texts), `openLegal`, consent `showConsent`, `SAFETY_SYS`, `CRISIS2`, crisis `send` wrapper, break reminders, kids mic control, `deleteAll` |

---

## 3. Architecture rules (read before coding)

1. **Edit `src/`, then run `python3 tools/build.py`.** Never edit `index.html` directly; the build overwrites it. Commit `src/` and the rebuilt `index.html` together.
2. **All scripts share one global scope.** Each `src/js` file becomes a classic `<script>` in order. A top-level `const`/`let`/`function` name in one file is visible to every later file, and **declaring the same `const`/`let` name twice breaks the whole app**. Before adding a top-level name, search for it: `grep -rnE "(const|let|var|function) NAME\b" src/js`.
3. **Extending behaviour: the wrapping pattern.** Later versions change earlier functions by wrapping them in a block:
   ```js
   {const _old=renderToday;renderToday=function(){_old();/* add things */};}
   ```
   This works only for names declared with `function` or `let`, not `const`. Wrappers stack, so the last one runs first. The crisis wrapper around `send()` in 13-v17 must stay the **outermost** (last) `send` wrapper, so safety runs before any brain.
4. **Text and translations.** UI strings live in `PACKS.<lang>.ui`. Add new keys to `en` and `vi` with `Object.assign(PACKS.en.ui,{key:"…"})` and read them with `TT("key")`. Missing languages fall back to English. Use `fill(TT("key"),{n:3})` for `{n}` placeholders.
5. **Saved data.** Use `store.get(key, default)` / `store.set(key, value)`. They prefix keys with `fho_` in localStorage and JSON-encode values. Backup and "Delete all my data" work on every `fho_` key, so new data is covered automatically. Big binary files (uploaded VRM models) live in IndexedDB database `fho`, store `vrm`. Main saved objects: `acad` (English progress `ACD`), `habit` (`HBS`), `mem2` (`MEM`), `convos` (`CMP`), `kids` (`KIDS`), `stories`, `brainCfg`, `legalV`.
6. **Building HTML.** Use `h("div",{class:"x",onclick:fn},child1,"text")`, not `innerHTML` with user text (prevents injection). `modal(title)` gives a bottom-sheet dialog `{m,b,close}`.
7. **AI engines.** Every brain is an object exposing an OpenAI-style streaming API: `S.engine.chat.completions.create({messages,stream:true,max_tokens,temperature})`, which returns an async iterator of chunks (`chunk.choices[0].delta.content`). `S.brainOn` says whether a smart brain is active. The system prompt always comes from `sysPrompt()`, which is wrapped by mode, tutor and coach code, and finally by the safety rules. Never bypass `sysPrompt()`.
8. **Speaking.** Use `speakAs(character, text, onDone, lang)` or `speak(text)`. English lessons use `enSay(text, after, slow)`. Lip-sync reads audio amplitude automatically.
9. **Kids-mode invariants (must never break):**
   - nothing personal leaves the device;
   - `S.brainOn` stays false;
   - `CMP.snap`, `addFact`, `extractMem`, `addFollow` and `proactive` do nothing;
   - only views `kids`, `chat`, `stories`, `learn` are reachable;
   - the mic stays off unless the parent enables it;
   - exiting needs the PIN.

   `tests/v16.py` and `tests/v17.py` check these.
10. **Service worker.** `sw.js` caches code network-first and media cache-first. On every release:
    - bump `const V='fho-vNN'` in `sw.js`;
    - if `three-3d.js` changed, bump its `?v=` number in `src/js/04-…`.

    Otherwise phones keep old files.
11. **claude.ai artifact limits** (only matter if you keep publishing there): no WebAssembly; `connect-src 'self'` (no outside fetch, so cloud AI and WebLLM don't work there); scripts only from cdnjs or the artifact's own files; file types limited (that's why the 3D models are `.json` + images, not `.glb`/`.vrm`). The GitHub Pages site has none of these limits.
12. **Licences.** Only add assets, models and libraries that allow commercial use. Update `CREDITS.txt`, `COMMERCIAL-LICENSES.md` and the Licences page (in `LEGAL`). Never add Qwen 2.5 3B/72B (non-commercial) or Cohere's free tier.
13. **Secrets.** Never put an API key in the front-end code. Users' own keys stay in their browser. A key you pay for must live on a server (see Roadmap step 1).

---

## 4. Build, test and publish

### Requirements
Python 3.10+, Node 18+ (only for legal pages and the 3D bundle), and Playwright for tests:
```
pip install playwright && python3 -m playwright install chromium
```

### Everyday workflow
```
# 1. edit files in src/
python3 tools/build.py            # writes index.html and build/artifact.html
python3 tools/serve_test.py       # terminal A: serves http://127.0.0.1:8765/csp.html
bash tests/run_all.sh             # terminal B: every test should end with "errs []" or "no errors"
# 2. bump V in sw.js (fho-v18, …)
git add -A && git commit -m "v18: …" && git push   # GitHub Pages redeploys in ~1 minute
```
Open http://127.0.0.1:8765/ (no CSP) to try the full app locally, including WebLLM and cloud AI.

### If you change legal text
1. Edit `LEGAL` / `LEGAL_DATE` in `src/js/13-v17-legal-safety.js`.
2. If users must accept again, increase `LEGAL_V`.
3. Run `node tools/legal_pages.js` to regenerate `legal/*.html`.
4. Build, commit and push.

### Tests
Tests are Python Playwright scripts. They open the app at a phone size (390×844), drive it with `page.evaluate`, and print results. Each test pre-sets localStorage (`fho_onb2`, `fho_toured`, `fho_legalV`, `fho_hints`) to skip onboarding, the tour and consent. When you add a first-run screen, add its key there too. Add a new `tests/vNN.py` for every release.

### Publishing elsewhere
Any static host works: upload the repo root without `src/`, `tools/`, `tests/` and `docs/`. Good options:
- GitHub Pages (current; already live).
- **Cloudflare Pages**: free, fast worldwide, and the natural partner for the AI server in step 1. Connect the GitHub repo, build command none, output directory `/`.
- A custom domain: buy one (for example funhouseoracle.com), then add it in GitHub Pages or Cloudflare Pages settings. Update `start_url` in the manifest if the path changes.

---

## 5. Roadmap: what to build next, in order

### Step 1. Hosted AI server (the most important missing piece)
**Problem:** on phones, smart AI needs the user to bring their own API key, and most users won't.

**Build:** a Cloudflare Worker (or similar) at, for example, `api.funhouseoracle.com`:
- `POST /v1/chat`: an OpenAI-compatible streaming proxy to your chosen provider. The key is stored as a Worker secret, never in the app.
- Per-user daily limits. Free tier example: 30 messages a day; paid tier: much higher. Identify users by an anonymous install ID first, then by account after Step 3.
- Rate limiting and abuse protection (Cloudflare Turnstile on first use).
- Run the same crisis check (`CRISIS2` regex) on the server as a second safety layer, and count crisis referrals as a plain number (no message content) for California SB 243 reporting from July 2027.
- No message logging by default. Update the Privacy Policy before launch: say which provider processes messages, and that you don't store them.

**In the app:**
- Add a new brain kind `hosted` in `src/js/06` and `07` with the same engine interface.
- Make it the default when online. Keep Spark as the offline fallback.
- Add the server domain to the Privacy Policy "Services your device connects to" list.

Choose a provider whose terms allow your use and don't train on API data.

### Step 2. Focus the product on one main promise
Recommended promise: **"Learn to speak English with a talking AI character."**
- First screen for new users: "What do you want to do?" with English speaking (main), Chat with a companion, Kids stories.
- Make the Learn tab the default for English learners.
- Lead with Daily 5 and Conversation practice.
- Keep everything else, but secondary.
- Store listing, landing page and ads all use this one promise.

### Step 3. Accounts and sync (needs Step 1's server)
Email magic-link or Google/Apple sign-in. Options: Cloudflare D1 + Workers, Supabase or Firebase.
- Sync the `fho_` data (the backup JSON format from `backupData()` already defines it), end-to-end encrypted if possible.
- Kids profiles live under the parent's account.
- Update the Privacy Policy, because you will now store personal data. COPPA and PIPEDA duties increase.

### Step 4. Payments (subscription)
Stripe Checkout + Customer Portal, or Lemon Squeezy / Paddle (merchant of record, which handles sales tax for you). In the app stores, Google Play Billing / Apple In-App Purchase are required for digital subscriptions.

Before launch:
- a refund and cancellation policy;
- clear price and renewal terms shown before paying;
- easy one-tap cancel;
- a reminder before a trial ends;
- Ontario consumer-protection rules;
- GST/HST registration once you pass the threshold.

Gate premium features with a signed entitlement from the server, not a local flag.

### Step 5. Real-device QA and a Lite mode
- Test on iPhone Safari, cheap Android Chrome, Samsung Internet and desktop: mic, voices, 3D performance, first load on 3G, install as app.
- Add **Lite mode** (2D characters, no 3D download) that turns on automatically for low-memory devices (`navigator.deviceMemory < 4`) or when the user picks it.
- Measure the first meaningful load. Lazy-load the big scripts (stories, course, explanations) if needed.

### Step 6. Privacy-friendly analytics (opt-in)
Count anonymous events: lesson started/finished, Daily 5 done, feature opened, retention on day 1/7/30. Use your own Worker endpoint or a privacy analytics tool (Plausible, Umami). Ask for consent and update the Privacy Policy.

### Step 7. Code cleanup
Convert `src/js` to ES modules with a bundler (Vite or esbuild), replace the wrapping chains with clear hooks/events, add TypeScript gradually, and run the Playwright tests in GitHub Actions on every push. Do this before the codebase grows further.

### Step 8. Better speaking feedback
Real pronunciation scoring (phoneme-level) with an on-device model or a server API. Show which sounds were wrong, with mouth tips. This is what English learners pay for.

### Step 9. App stores
- **Google Play:** wrap the PWA with a Trusted Web Activity (Bubblewrap or PWABuilder).
- **iOS:** Capacitor.
- Needs: icons, screenshots, a short video, privacy-policy URL (`/legal/privacy.html`), data-safety form (matches the Privacy Policy), and an age rating. The companion means "Teen/12+" at minimum. Kids profiles don't make it a kids-category app.

### Step 10. Content quality
- Have an English teacher review the 45 units and the explanations.
- Record native-speaker audio for key sentences.
- Complete the Vietnamese and other UI translations.
- Translate the legal pages (keep English as the official version).

---

## 6. Open items for the owner

These need a human decision:
1. Confirm the operator name ("Pai Keng Kuan"), the contact email, and Ontario as the governing law in `LEGAL`.
2. Have a Canadian lawyer review the Terms and Privacy Policy, especially before payments.
3. Choose the AI provider and budget for Step 1.
4. Decide on prices and free-tier limits.
5. Decide whether to keep publishing to claude.ai artifacts or only the website.

---

## 7. Known limitations and gotchas
- Speech recognition and voices differ a lot between browsers. iOS Safari is the most limited.
- WebLLM and cloud AI don't work inside the claude.ai artifact (CSP); they do on the website.
- Backups don't include uploaded photos or VRM models (IndexedDB).
- Some long lines in `src/js` are dense. Use an editor with word wrap or run Prettier on a copy to read them, but keep the build byte-stable unless you mean to reformat.
- `ACD` (English progress) is swapped with the child's data while kids mode is active. The parent's copy is in `fho_acad_parent`. Never write code that assumes `ACD` always belongs to the parent.
- The tour, onboarding, consent and welcome-back screens are sequenced to avoid overlapping. Check this when adding a new first-run screen.
- Model names in `CLOUD` and the WebLLM model list go out of date. Refresh them from each provider's docs.

---

## 8. A prompt you can give to an AI assistant

> You are continuing development of Funhouse Oracle, a PWA in the GitHub repo Keng89/funhouse-oracle. First read `docs/HANDOFF.md` completely and follow its rules: edit only `src/`, rebuild with `python3 tools/build.py`, never redeclare a top-level `const`/`let` name (search before adding), extend functions with the wrapping pattern, add UI strings to `PACKS.en.ui` and `PACKS.vi.ui`, keep the kids-mode and crisis-safety rules intact, bump the version in `sw.js`, run `python3 tools/serve_test.py` and `bash tests/run_all.sh` and make sure every test passes, add a new test for your change, then commit with a clear message. Today's task: [describe the task, for example "Roadmap Step 1: build the hosted AI Cloudflare Worker and a `hosted` brain in the app"]. Before writing code, tell me your plan in a few bullet points.
