#!/usr/bin/env bash
# Runs every Playwright test. Start the server first in another terminal: python3 tools/serve_test.py
# Needs: pip install playwright && python3 -m playwright install chromium
set -e
cd "$(dirname "$0")"
for t in v10 v12 v13 v14 v15 v16 v17 v18 v19; do echo "=== $t"; python3 $t.py 2>&1 | tail -4; done
