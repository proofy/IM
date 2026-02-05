#!/bin/bash
# Download OpenMoji icons for all referenced images in pairs.js

ICONS_DIR="./web/assets/icons"
PAIRS_FILE="./web/data/pairs.js"

# Extract unique image names from pairs.js
echo "🔍 Extracting referenced icons from pairs.js..."
REFERENCED=$(grep -o 'image: "[^"]*"' "$PAIRS_FILE" | grep -o '"[^"]*"' | tr -d '"' | sort -u)

# Download OpenMoji catalog
echo "📥 Downloading OpenMoji catalog (this may take a moment)..."
CATALOG=$(curl -s https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/data/openmoji.json)

if [ -z "$CATALOG" ]; then
  echo "❌ Failed to download OpenMoji catalog"
  exit 1
fi

echo "✓ Catalog loaded"

# Function to get hex code for an icon
get_hex() {
  local name="$1"
  local hex=$(echo "$CATALOG" | jq -r ".[] | select(.slug==\"$name\" or .annotation==\"$name\") | .hex // .hexcode // .uc" | head -1)
  
  # If direct match fails, try loose matching
  if [ -z "$hex" ] || [ "$hex" = "null" ]; then
    name_clean=$(echo "$name" | sed 's/_/ /g')
    hex=$(echo "$CATALOG" | jq -r ".[] | select(.annotation | contains(\"$name_clean\")) | .hex // .hexcode // .uc" | head -1)
  fi
  
  echo "$hex"
}

# Download each missing icon
DOWNLOADED=0
FAILED=0

for img in $REFERENCED; do
  if [ -f "$ICONS_DIR/$img" ]; then
    continue  # Already exists
  fi
  
  base=${img%.*}
  hex=$(get_hex "$base")
  
  if [ -z "$hex" ] || [ "$hex" = "null" ]; then
    echo "⊘ $img: no OpenMoji match"
    ((FAILED++))
    continue
  fi
  
  # Clean up hex code
  hex_clean=$(echo "$hex" | tr -d ' ,' | tr '[:lower:]' '[:upper:]')
  url="https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/${hex_clean}.svg"
  
  if curl -s -f "$url" -o "$ICONS_DIR/$img"; then
    echo "✓ $img"
    ((DOWNLOADED++))
  else
    echo "✗ $img (hex: $hex_clean)"
    ((FAILED++))
  fi
done

echo ""
echo "Downloaded: $DOWNLOADED icons"
[ $FAILED -gt 0 ] && echo "Failed: $FAILED icons"
