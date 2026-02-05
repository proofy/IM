#!/usr/bin/env python3
"""Download missing OpenMoji icons and create placeholders for unavailable ones."""

import re
import os
import json
import urllib.request
import ssl
import sys

ROOT = '.'
PAIRS_FILE = os.path.join(ROOT, 'web/data/pairs.js')
ICONS_DIR = os.path.join(ROOT, 'web/assets/icons')

# Extract referenced image names from pairs.js
with open(PAIRS_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

referenced_imgs = re.findall(r'image:\s*"([^"]+)"', content)
referenced_imgs = sorted(set(referenced_imgs))

# Get existing files
existing_files = set(os.listdir(ICONS_DIR))

# Find missing icons
missing = [img for img in referenced_imgs if img not in existing_files]

print(f"Referenced icons: {len(referenced_imgs)}")
print(f"Existing icons: {len(existing_files)}")
print(f"Missing icons: {len(missing)}")

if not missing:
    print("All icons exist!")
    sys.exit(0)

print("\nMissing icons:", missing)

# Fetch OpenMoji data
print("\nDownloading OpenMoji catalog...")
url = 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/data/openmoji.json'
ctx = ssl.create_default_context()

try:
    with urllib.request.urlopen(url, context=ctx, timeout=30) as resp:
        data = json.load(resp)
    print(f"Downloaded {len(data)} OpenMoji entries")
except Exception as e:
    print(f"Failed to download OpenMoji catalog: {e}")
    data = []

# Try to match missing icons to OpenMoji entries
downloaded = 0
for missing_icon in missing:
    # Extract base name (remove .svg, replace underscore/dash with space)
    base_name = os.path.splitext(missing_icon)[0].lower()
    search_terms = [base_name, base_name.replace('_', ' '), base_name.replace('-', ' ')]
    
    candidate = None
    
    # Try direct slug match first
    for entry in data:
        if entry.get('slug', '').lower() == base_name:
            candidate = entry
            break
    
    # Try annotation/slug contains
    if not candidate:
        for entry in data:
            annotation = entry.get('annotation', '').lower()
            slug = entry.get('slug', '').lower()
            for term in search_terms:
                if term in annotation or term in slug:
                    candidate = entry
                    break
            if candidate:
                break
    
    if not candidate:
        print(f"No match for {missing_icon} - creating placeholder")
        # Create a simple placeholder SVG
        placeholder_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#e0e0e0" rx="20"/>
  <text x="256" y="280" font-size="180" font-family="Arial" text-anchor="middle" fill="#888">?</text>
  <text x="256" y="380" font-size="36" font-family="Arial" text-anchor="middle" fill="#666">{base_name}</text>
</svg>'''
        try:
            with open(os.path.join(ICONS_DIR, missing_icon), 'w') as f:
                f.write(placeholder_svg)
            print(f"Created placeholder for {missing_icon}")
            downloaded += 1
        except Exception as e:
            print(f"Error creating placeholder for {missing_icon}: {e}")
        continue
    
    # Get hex code
    hexcode = candidate.get('hex') or candidate.get('hexcode') or candidate.get('uc')
    if isinstance(hexcode, list):
        hexcode = hexcode[0]
    
    if not hexcode:
        print(f"No hex for {missing_icon} - creating placeholder")
        placeholder_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#e0e0e0" rx="20"/>
  <text x="256" y="280" font-size="180" font-family="Arial" text-anchor="middle" fill="#888">?</text>
  <text x="256" y="380" font-size="36" font-family="Arial" text-anchor="middle" fill="#666">{base_name}</text>
</svg>'''
        try:
            with open(os.path.join(ICONS_DIR, missing_icon), 'w') as f:
                f.write(placeholder_svg)
            print(f"Created placeholder for {missing_icon}")
            downloaded += 1
        except Exception as e:
            print(f"Error creating placeholder for {missing_icon}: {e}")
        continue
    
    # Normalize hex code
    h = ''.join([c for c in str(hexcode) if c.isalnum()]).upper()
    svg_url = f'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/{h}.svg'
    
    print(f"Downloading {missing_icon} from {svg_url}...", end=' ')
    try:
        with urllib.request.urlopen(svg_url, context=ctx, timeout=10) as resp:
            svg_content = resp.read()
        with open(os.path.join(ICONS_DIR, missing_icon), 'wb') as f:
            f.write(svg_content)
        print("✓")
        downloaded += 1
    except Exception as e:
        print(f"✗ ({e})")
        # Create placeholder as fallback
        placeholder_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#e0e0e0" rx="20"/>
  <text x="256" y="280" font-size="180" font-family="Arial" text-anchor="middle" fill="#888">?</text>
  <text x="256" y="380" font-size="36" font-family="Arial" text-anchor="middle" fill="#666">{base_name}</text>
</svg>'''
        try:
            with open(os.path.join(ICONS_DIR, missing_icon), 'w') as f:
                f.write(placeholder_svg)
            print(f"  → Created placeholder for {missing_icon}")
            downloaded += 1
        except Exception as e:
            print(f"  → Error creating placeholder: {e}")

print(f"\nDownloaded/created {downloaded} icons")
