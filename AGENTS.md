# Instructions for AI coding assistants

Read `docs/HANDOFF.md` before making any change. The short version:

- Source lives in `src/`. Build with `python3 tools/build.py`. Never edit `index.html` by hand.
- All `src/js` files share one global scope. Search before adding a top-level name; a duplicate `const`/`let` breaks the app.
- Extend existing functions with the wrapping pattern `{const _f=fn;fn=function(){_f();…};}`.
- UI text goes in `PACKS.en.ui` and `PACKS.vi.ui`; read it with `TT("key")`.
- Keep kids-mode protections and the crisis-safety `send` wrapper intact.
- Bump `V` in `sw.js` on every release.
- Test: `python3 tools/serve_test.py`, then `bash tests/run_all.sh`. Add a test for each change.
- Never put a paid API key in front-end code.
