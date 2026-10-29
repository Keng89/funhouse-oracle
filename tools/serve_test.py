#!/usr/bin/env python3
"""Serve the repo root on http://127.0.0.1:8765 and create csp.html, a copy of index.html with the
same Content-Security-Policy as claude.ai artifacts (no WebAssembly, connect-src 'self', scripts
only from cdnjs). The Playwright tests in tests/ open http://127.0.0.1:8765/csp.html.
Usage (repo root): python3 tools/serve_test.py"""
import http.server, os, socketserver
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSP = ('<meta http-equiv="Content-Security-Policy" content="default-src \'self\'; script-src \'self\' \'unsafe-inline\' '
       'https://cdnjs.cloudflare.com; style-src \'self\' \'unsafe-inline\' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; '
       'img-src \'self\' data: blob:; connect-src \'self\'; worker-src \'self\' blob:">')
os.chdir(ROOT)
html = open("index.html", encoding="utf-8").read().replace('<meta charset="utf-8">', '<meta charset="utf-8">' + CSP, 1)
open("csp.html", "w", encoding="utf-8").write(html)
socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("127.0.0.1", 8765), http.server.SimpleHTTPRequestHandler) as s:
    print("Serving on http://127.0.0.1:8765/csp.html  (Ctrl+C to stop)"); s.serve_forever()
