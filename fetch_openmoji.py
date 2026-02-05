#!/usr/bin/env python3
"""Download real OpenMoji SVGs for all referenced icons in pairs.js"""

import re
import os
import json
import urllib.request
import urllib.error
import ssl
import sys
from pathlib import Path

ICONS_DIR = Path('/workspaces/IM/web/assets/icons')
PAIRS_FILE = Path('/workspaces/IM/web/data/pairs.js')

# Read pairs.js and extract image references
with open(PAIRS_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

referenced_imgs = sorted(set(re.findall(r'image:\s*"([^"]+)"', content)))
existing_files = set(f.name for f in ICONS_DIR.glob('*.svg'))
missing = [img for img in referenced_imgs if img not in existing_files]

print(f"Total referenced: {len(referenced_imgs)}")
print(f"Existing: {len(existing_files)}")
print(f"Missing: {len(missing)}")

if not missing:
    print("✓ All icons exist!")
    sys.exit(0)

print(f"\nMissing icons: {', '.join(missing)}\n")

# Download OpenMoji JSON catalog
ctx = ssl.create_default_context()
url = 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/data/openmoji.json'

print("📥 Downloading OpenMoji catalog...")
try:
    with urllib.request.urlopen(url, context=ctx, timeout=30) as resp:
        openmoji_data = json.load(resp)
    print(f"✓ Loaded {len(openmoji_data)} OpenMoji entries\n")
except Exception as e:
    print(f"✗ Failed to download: {e}")
    sys.exit(1)

# Build lookup index
slug_map = {entry.get('slug', ''): entry for entry in openmoji_data}
annotation_map = {}
for entry in openmoji_data:
    ann = entry.get('annotation', '').lower().replace(' ', '_').replace('-', '_')
    if ann:
        annotation_map[ann] = entry

# Match and download
downloaded = 0
skipped = 0

for icon_name in missing:
    base = icon_name.replace('.svg', '').lower()
    
    # Try matching strategies
    entry = None
    
    # 1. Direct slug match
    if base in slug_map:
        entry = slug_map[base]
    
    # 2. Annotation match (exact)
    elif base in annotation_map:
        entry = annotation_map[base]
    
    # 3. Loose annotation search
    if not entry:
        for e in openmoji_data:
            annotation = e.get('annotation', '').lower()
            slug = e.get('slug', '').lower()
            search_base = base.replace('_', ' ')
            
            if search_base in annotation or search_base in slug:
                entry = e
                break
    
    if not entry:
        print(f"⊘ {icon_name}: no OpenMoji match found")
        skipped += 1
        continue
    
    # Get hex code
    hexcode = entry.get('hex') or entry.get('hexcode') or entry.get('uc')
    if isinstance(hexcode, (list, tuple)):
        hexcode = hexcode[0]
    
    if not hexcode:
        print(f"⊘ {icon_name}: no hex code")
        skipped += 1
        continue
    
    # Clean hex and build URL
    hex_clean = ''.join(c for c in str(hexcode) if c.isalnum()).upper()
    svg_url = f'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/{hex_clean}.svg'
    
    # Download
    try:
        with urllib.request.urlopen(svg_url, context=ctx, timeout=10) as resp:
            svg_data = resp.read()
        
        target = ICONS_DIR / icon_name
        target.write_bytes(svg_data)
        print(f"✓ {icon_name}")
        downloaded += 1
    except urllib.error.HTTPError as e:
        print(f"✗ {icon_name}: HTTP {e.code} ({hex_clean})")
        skipped += 1
    except Exception as e:
        print(f"✗ {icon_name}: {type(e).__name__}")
        skipped += 1

print(f"\n{'='*50}")
print(f"Downloaded: {downloaded}")
print(f"Skipped: {skipped}")
print(f"Total missing: {len(missing)}")
