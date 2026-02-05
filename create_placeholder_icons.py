#!/usr/bin/env python3
import os

ICONS_DIR = '/workspaces/IM/web/assets/icons'
MISSING_ICONS = [
    'apple', 'bread', 'cat', 'dog', 'car', 'bicycle', 'bed', 'lamp', 'book', 'pencil',
    'clock', 'calendar', 'phone', 'laptop', 'camera', 'pencil2', 'eye', 'hat', 'hammer', 'soccer_ball',
    'swimmer', 'flower', 'heart', 'pill', 'cheese', 'pizza', 'water_drop', 'coffee', 'gift', 'candle',
    'television', 'plug', 'house', 'bridge', 'mountain', 'lake', 'bird', 'fish', 'smile', 'cry',
    'suitcase', 'airplane', 'garden', 'watering_can', 'saw', 'screw', 'radio', 'book_open', 'desk', 'file_folder',
    'train', 'bus', 'envelope', 'speech_balloon', 'lock', 'alarm', 'puzzle', 'map', 'moon', 'star',
    'table', 'teacher', 'egg', 'screwdriver', 'pliers', 'tennis_racket', 'basketball', 'drone', 'robot', 'volcano',
    'island', 'hedge', 'lawn', 'ship', 'sailboat', 'jacket', 'glove', 'microphone', 'two_hearts', 'fear',
    'horse', 'cow', 'cake', 'ice_cream', 'atom', 'lab', 'compass', 'washing_machine', 'dryer', 'server',
    'cloud', 'picnic', 'hiking', 'helmet', 'fire_truck', 'christmas_tree', 'egg_decorated', 'baker', 'wrench', 'desert',
    'ocean', 'paintbrush', 'frame', 'seed', 'flower_pot', 'fridge', 'stove', 'bee', 'butterfly', 'skiing',
    'surfing', 'honey', 'nut', 'scooter', 'taxi', 'computer', 'test_tube', 'market', 'plaza', 'fog',
    'doctor', 'fork', 'spoon', 'mother', 'father', 'blackboard', 'teacher2', 'piano', 'violin', 'timer',
    'hourglass', 'soap', 'cliff', 'cave', 'socks', 'coat', 'hedge2', 'bell', 'lantern', 'fireworks',
    'controller', 'monitor', 'escalator', 'ferry', 'frying_pan', 'pot', 'brick', 'mortar', 'backpack', 'path',
    'fox', 'wolf', 'rice', 'noodle', 'chess', 'playing_cards', 'lecture', 'exam', 'fishing', 'camping',
    'spice', 'salt', 'parrot', 'guinea_pig', 'rainbow', 'thunderstorm', 'ticket', 'map2', 'police', 'pilot',
    'theater', 'cinema', 'mask', 'ointment', 'constellation', 'telescope', 'glasses', 'shirt', 'meadow', 'river',
    'mountain_biking', 'film_frames', 'guitar', 'drum', 'sun', 'eye', 'health_worker', 'doctor'
]

# Filter out duplicates and those that already exist
existing = set(os.listdir(ICONS_DIR))
to_create = [icon for icon in set(MISSING_ICONS) if f"{icon}.svg" not in existing]

print(f"Creating {len(to_create)} missing icon placeholders...")

colors = {
    'apple': '#e74c3c', 'bread': '#d4a574', 'cat': '#8b6f47', 'dog': '#a0826d', 'car': '#3498db',
    'bicycle': '#2ecc71', 'bed': '#95a5a6', 'lamp': '#f1c40f', 'book': '#e67e22', 'pencil': '#f39c12',
    'flower': '#e91e63', 'heart': '#e74c3c', 'pizza': '#d4a574', 'coffee': '#8b6f47', 'gift': '#f1c40f',
}

for icon_name in to_create:
    color = colors.get(icon_name, '#3498db')
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="{color}" rx="10" opacity="0.2"/>
  <circle cx="50" cy="50" r="30" fill="{color}"/>
  <text x="50" y="65" font-size="10" font-family="Arial" text-anchor="middle" fill="#666">{icon_name[:8]}</text>
</svg>'''
    
    filepath = os.path.join(ICONS_DIR, f"{icon_name}.svg")
    try:
        with open(filepath, 'w') as f:
            f.write(svg_content)
        print(f"✓ {icon_name}.svg")
    except Exception as e:
        print(f"✗ {icon_name}.svg: {e}")

print(f"Done! Created {len(to_create)} icons")
