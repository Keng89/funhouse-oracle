#!/usr/bin/env python3
"""Build Funhouse Oracle from src/.

Outputs:
  index.html            the hosted app (GitHub Pages / any static host), full HTML document
  build/artifact.html   the same app without <html>/<head>/<body> wrappers (for claude.ai artifacts)

Usage: python3 tools/build.py            (run from the repo root)
       python3 tools/build.py --check    (fail if the built files differ from what's committed)
"""
import json, os, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "src")

def read(p):
    with open(os.path.join(SRC, p), encoding="utf-8") as f:
        return f.read()

def build_artifact():
    m = json.loads(read("build-manifest.json"))
    out = read("head.html") + "<style>\n" + read("styles.css") + "</style>" + read("body.html")
    for name, sep in zip(m["scripts"], m["seps"]):
        out += "<script>" + read("js/" + name) + "</script>" + sep
    return out

def build_hosted(art):
    lines = art.split("\n")
    end = next(i for i, l in enumerate(lines) if "</style>" in l)
    head = "\n".join(lines[: end + 1]) + "\n"
    body = "\n".join(lines[end + 1 :])
    if not body.endswith("\n"):
        body += "\n"
    return ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
            '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
            + head + "</head>\n<body>\n" + body + "</body>\n</html>\n")

def main():
    art = build_artifact()
    hosted = build_hosted(art)
    targets = {os.path.join(ROOT, "build", "artifact.html"): art, os.path.join(ROOT, "index.html"): hosted}
    if "--check" in sys.argv:
        bad = [p for p, c in targets.items() if not os.path.exists(p) or open(p, encoding="utf-8").read() != c]
        if bad:
            print("Out of date:", *bad); sys.exit(1)
        print("Build is up to date."); return
    os.makedirs(os.path.join(ROOT, "build"), exist_ok=True)
    for p, c in targets.items():
        with open(p, "w", encoding="utf-8") as f:
            f.write(c)
        print("wrote", os.path.relpath(p, ROOT), f"({len(c)//1024} KB)")

if __name__ == "__main__":
    main()
