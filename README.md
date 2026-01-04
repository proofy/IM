# IM
Inoffizieller Mitspieler - Ein Wort kann dich verraten


# ✅ KONTEXTBESCHREIBUNG – SPIEL
## 🎮 Titel
Inoffizieller Mitspieler
Untertitel: Ein Wort kann dich verraten

# 🧩 Spielidee (Kurzfassung)
Inoffizieller Mitspieler ist ein lokales Social‑Deduction‑Partyspiel für 3–8 Spieler, gespielt auf einem Smartphone.
Alle Spieler erhalten ähnliche, aber nicht identische Begriffe.Mindestens ein Spieler ist der IM (Inoffizieller Mitspieler) und bekommt ein abweichendes, aber semantisch nahes Wort.
Durch Erklärungen, Nachfragen und Diskussion versuchen die Spieler herauszufinden,wer nicht ganz dasselbe Wort meint.

Ein falsches Wort kann dich verraten.


# 🕵️ Rollen
✅ Normale Mitspieler

erhalten dasselbe oder sehr ähnliche Wörter
wissen nicht, wer der IM ist

✅ IM – Inoffizieller Mitspieler

erhält ein abweichendes, verwandtes Wort
weiß, dass er IM ist
kennt keine anderen IMs (falls mehrere)


# 🎭 Wissensstand

Jeder Spieler kennt nur seinen eigenen Begriff
Es gibt keinen Moderator
Alle Spieler nutzen ein einziges Gerät, nacheinander


# 🔁 Spielablauf

📱 Smartphone wird herumgereicht  
Jeder Spieler:
sieht einen Bereit‑Bildschirm
deckt sein Wort + Icon auf
bestätigt → nächster Spieler


Nach dem letzten Reveal:
Gerät wird abgelegt
freie Diskussion beginnt


Gruppe stimmt ab, wer der IM ist


# ❗ Zentrale Regeln

✅ Kein sofortiges Ausscheiden bei falscher Wahl
✅ Alle bleiben bis zum Ende Teil der Diskussion
✅ Freie Diskussion ohne Redezeit‑Regeln
✅ Fokus auf soziale Deduktion, nicht auf Eliminierung
✅ Kein Punktesystem (optional später)


# 🧠 Begriffspaare & Icon‑System
✅ Wörterpare sind in der Datei data/pairs.js zu finden

In a ist das Wort (word) für den normalen Mitspieler zu finden, zusätzlich der Name des SVC-Icons das angeigt werden soll
In b ist das Wort für den IM zu finden

Das Wort für den IM soll irgendwie etwas mit dem Wort der normalen Spieler zu tun haben, aber eben nicht banal bzw. zu direkt sein.

Beispiele:

    a: { word: "Schule", image: "school.svg" },
    b: { word: "Tüte", image: "reusable_bag.svg" }

Hier ist die Verbindung, dass es auch eine Schultüte gibt.

  a: { word: "Regen", image: "cloud_with_rain.svg" },
  b: { word: "Bogen", image: "bow_and_arrow.svg" }

Hier ist die Assoziation, dass es sich um einen Regenbogen handeln könnte. Aber das Icon macht es dem IM schwieriger.

Als Regel gelten für die Wortpaare:
- es dürfen nicht die gleichen Wörter in a und b vorkommen. Auch keine Teile des Wortes

# ✅ Icons

dienen als Gedankenstütze
dürfen das Wort nicht eindeutig verraten
alle Icons gleich groß, stilistisch konsistent
bewusst piktogramm‑artig

✅ Bisher verwendete Open‑Source‑Icon‑Quellen

OpenMoji (CC BY‑SA)


# 🎨 Design‑Leitplanken

ruhiges, reduziertes Design
keine Fotos
keine realistischen Details
Icons dürfen mehrdeutig sein
Normale Mitspeiler haben einen blauen Rahmen um ihr Begriff
IM hat einen riten Rahmen um sein Begriff


# 🧩 Technische Umsetzung
## ✅ Plattform

- reine Web‑App
- lokal im Browser
- offline nutzbar
- später Android‑WebView‑fähig

## ✅ Entwicklungsumgebung

lokaler Testserver


# 📁 Projektstruktur (festgelegt)
inoffizieller-mitspieler/
├─ web/
│  ├─ index.html
│  ├─ css/
│  │  └─ style.css
│  ├─ js/
│  │  ├─ data.js
│  │  ├─ game.js
│  │  └─ reveal.js
│  └─ assets/
│     └─ icons/
└─ README.md

## ▶️ Lokalen Server starten
cd inoffizieller-mitspieler/web
python3 -m http.server 8000

## 🔜 Noch offen / nächste Schritte ( ToDo)

- exakte IM‑Verteilung je Spielerzahl
- vollständige Wort‑/Icon‑Liste
- UI‑Feinschliff (Animationen, Dark‑Mode)
- optionale Spielvarianten


# ✅ Kurz‑Prompt (falls du es ultrakompakt brauchst)

Wir entwickeln das lokale Social‑Deduction‑Spiel „Inoffizieller Mitspieler – Ein Wort kann dich verraten“.3–8 Spieler, ein Smartphone, ähnliche Begriffe mit Icons, mindestens ein IM mit abweichendem Wort.Reveal nacheinander, danach freie Diskussion.Web‑App ohne Backend, Open‑Source‑Icons, Fokus auf Mehrdeutigkeit.