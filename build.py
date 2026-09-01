#!/usr/bin/env python3
"""Assembles builder_final.html from src/template.html + src/styles.css + src/app.js + src/photos/*.b64.
Run after editing anything under src/. See CLAUDE.md "Workflow for adding a new piece."
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent
SRC = ROOT / 'src'
OUT = ROOT / 'builder_final.html'

template = (SRC / 'template.html').read_text(encoding='utf-8')
css = (SRC / 'styles.css').read_text(encoding='utf-8')
js = (SRC / 'app.js').read_text(encoding='utf-8')

photo_dir = SRC / 'photos'
photo_files = sorted(p for p in photo_dir.glob('*.b64'))

placeholder_re = re.compile(r'\{\{PHOTO_([A-Z0-9_]+)\}\}')
placeholders_in_js = set(placeholder_re.findall(js))

seen_names = set()
for photo_path in photo_files:
    name = photo_path.stem
    seen_names.add(name)
    placeholder = f'{{{{PHOTO_{name}}}}}'
    occurrences = js.count(placeholder)
    if occurrences != 1:
        sys.exit(f'error: expected exactly 1 occurrence of {placeholder} in app.js, found {occurrences}')
    b64 = photo_path.read_text(encoding='utf-8').strip()
    js = js.replace(placeholder, b64, 1)

missing = placeholders_in_js - seen_names
if missing:
    sys.exit(f'error: app.js references photo placeholders with no matching .b64 file: {sorted(missing)}')

if '{{PHOTO_' in js:
    sys.exit('error: leftover PHOTO placeholder in app.js after substitution')

out = template.replace('{{STYLES}}', css, 1).replace('{{SCRIPT}}', js, 1)

if '{{' in out:
    idx = out.index('{{')
    sys.exit(f'error: leftover {{}} placeholder in assembled output near: {out[idx:idx+60]!r}')

OUT.write_text(out, encoding='utf-8')
print(f'wrote {OUT} ({len(out)} bytes)')
