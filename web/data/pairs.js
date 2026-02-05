/**
 * Zentrale Wortpaar-Datenbank
 */

const PAIRS = [

  {
    id: 1,
    category: "Alltag",
    a: { word: "Schule", image: "school.svg" },
    b: { word: "Tüte", image: "reusable_bag.svg" }
  },

  {
    id: 2,
    category: "Kleidung",
    a: { word: "Hand", image: "hand.svg" },
    b: { word: "Schuh", image: "shoe.svg" }
  },

  {
    id: 3,
    category: "Gesundheit",
    a: { word: "Zahn", image: "tooth.svg" },
    b: { word: "Arzt", image: "health_worker.svg" }
  },

  {
    id: 4,
    category: "Natur",
    a: { word: "Regen", image: "cloud_with_rain.svg" },
    b: { word: "Bogen", image: "bow_and_arrow.svg" }
  },

  {
    id: 5,
    category: "Schlafen",
    a: { word: "Kopf", image: "kopf.svg" },
    b: { word: "Kissen", image: "kissen.svg" }
  },

  {
    id: 6,
    category: "Einkaufen",
    a: { word: "Markt", image: "markt.svg" },
    b: { word: "Tasche", image: "tasche.svg" }
  },

  {
    id: 7,
    category: "Natur",
    a: { word: "Wald", image: "forest.svg" },
    b: { word: "Hütte", image: "hut.svg" }
  },

  {
    id: 8,
    category: "Urlaub",
    a: { word: "Strand", image: "strand.svg" },
    b: { word: "Handtuch", image: "towel.svg" }
  },

  {
    id: 9,
    category: "Arbeit",
    a: { word: "Büro", image: "office.svg" },
    b: { word: "Stuhl", image: "chair.svg" }
  },

  {
    id: 10,
    category: "Küche",
    a: { word: "Küche", image: "kitchen.svg" },
    b: { word: "Messer", image: "knife.svg" }
  },

  {
    id: 11,
    category: "Natur",
    a: { word: "Wald", image: "deciduous_tree.svg" },
    b: { word: "Pilz", image: "beer_mug.svg" }
  },

  {
    id: 12,
    category: "Essen",
    a: { word: "Apfel", image: "apple.svg" },
    b: { word: "Brot", image: "bread.svg" }
  },
  {
    id: 13,
    category: "Tiere",
    a: { word: "Katze", image: "cat.svg" },
    b: { word: "Hund", image: "dog.svg" }
  },
  {
    id: 14,
    category: "Verkehr",
    a: { word: "Auto", image: "car.svg" },
    b: { word: "Fahrrad", image: "bicycle.svg" }
  },
  {
    id: 15,
    category: "Haushalt",
    a: { word: "Bett", image: "bed.svg" },
    b: { word: "Lampe", image: "lamp.svg" }
  },
  {
    id: 16,
    category: "Schule",
    a: { word: "Buch", image: "book.svg" },
    b: { word: "Stift", image: "pencil.svg" }
  },
  {
    id: 17,
    category: "Zeit",
    a: { word: "Uhr", image: "clock.svg" },
    b: { word: "Kalender", image: "calendar.svg" }
  },
  {
    id: 18,
    category: "Technik",
    a: { word: "Telefon", image: "phone.svg" },
    b: { word: "Laptop", image: "laptop.svg" }
  },
  {
    id: 19,
    category: "Freizeit",
    a: { word: "Fahrradtour", image: "mountain_biking.svg" },
    b: { word: "Film", image: "film_frames.svg" }
  },
  {
    id: 20,
    category: "Musik",
    a: { word: "Gitarre", image: "guitar.svg" },
    b: { word: "Trommel", image: "drum.svg" }
  },
  {
    id: 21,
    category: "Wetter",
    a: { word: "Sonne", image: "sun.svg" },
    b: { word: "Regen", image: "cloud_with_rain.svg" }
  },
  {
    id: 22,
    category: "Freizeit",
    a: { word: "Fotografie", image: "camera.svg" },
    b: { word: "Zeichnen", image: "pencil2.svg" }
  },
  {
    id: 23,
    category: "Körper",
    a: { word: "Auge", image: "eye.svg" },
    b: { word: "Hand", image: "hand.svg" }
  },
  {
    id: 24,
    category: "Kleidung",
    a: { word: "Hut", image: "hat.svg" },
    b: { word: "Schuh", image: "shoe.svg" }
  },
  {
    id: 25,
    category: "Arbeit",
    a: { word: "Büro", image: "office.svg" },
    b: { word: "Hammer", image: "hammer.svg" }
  },
  {
    id: 26,
    category: "Sport",
    a: { word: "Ball", image: "soccer_ball.svg" },
    b: { word: "Schwimmen", image: "swimmer.svg" }
  },
  {
    id: 27,
    category: "Natur",
    a: { word: "Baum", image: "deciduous_tree.svg" },
    b: { word: "Blume", image: "flower.svg" }
  },
  {
    id: 28,
    category: "Gesundheit",
    a: { word: "Herz", image: "heart.svg" },
    b: { word: "Medizin", image: "pill.svg" }
  },
  {
    id: 29,
    category: "Essen",
    a: { word: "Käse", image: "cheese.svg" },
    b: { word: "Pizza", image: "pizza.svg" }
  },
  {
    id: 30,
    category: "Getränke",
    a: { word: "Wasser", image: "water_drop.svg" },
    b: { word: "Kaffee", image: "coffee.svg" }
  },
  {
    id: 31,
    category: "Alltag",
    a: { word: "Geschenk", image: "gift.svg" },
    b: { word: "Kerze", image: "candle.svg" }
  },
  {
    id: 32,
    category: "Elektronik",
    a: { word: "Fernseher", image: "television.svg" },
    b: { word: "Stecker", image: "plug.svg" }
  },
  {
    id: 33,
    category: "Bau",
    a: { word: "Haus", image: "house.svg" },
    b: { word: "Brücke", image: "bridge.svg" }
  },
  {
    id: 34,
    category: "Natur",
    a: { word: "Berg", image: "mountain.svg" },
    b: { word: "See", image: "lake.svg" }
  },
  {
    id: 35,
    category: "Tiere",
    a: { word: "Vogel", image: "bird.svg" },
    b: { word: "Fisch", image: "fish.svg" }
  },
  {
    id: 36,
    category: "Alltag",
    a: { word: "Freude", image: "smile.svg" },
    b: { word: "Trauer", image: "cry.svg" }
  },
  {
    id: 37,
    category: "Reise",
    a: { word: "Koffer", image: "suitcase.svg" },
    b: { word: "Flugzeug", image: "airplane.svg" }
  },
  {
    id: 38,
    category: "Natur",
    a: { word: "Garten", image: "garden.svg" },
    b: { word: "Gießkanne", image: "watering_can.svg" }
  },
  {
    id: 39,
    category: "Handwerk",
    a: { word: "Säge", image: "saw.svg" },
    b: { word: "Schraube", image: "screw.svg" }
  },
  {
    id: 40,
    category: "Freizeit",
    a: { word: "Radio", image: "radio.svg" },
    b: { word: "Buch", image: "book_open.svg" }
  },
  {
    id: 41,
    category: "Büro",
    a: { word: "Schreibtisch", image: "desk.svg" },
    b: { word: "Akten", image: "file_folder.svg" }
  },
  {
    id: 42,
    category: "Transport",
    a: { word: "Zug", image: "train.svg" },
    b: { word: "Bus", image: "bus.svg" }
  },
  {
    id: 43,
    category: "Kommunikation",
    a: { word: "Brief", image: "envelope.svg" },
    b: { word: "Nachricht", image: "speech_balloon.svg" }
  },
  {
    id: 44,
    category: "Sicherheit",
    a: { word: "Schloss", image: "lock.svg" },
    b: { word: "Alarm", image: "alarm.svg" }
  },
  {
    id: 45,
    category: "Spiel",
    a: { word: "Puzzle", image: "puzzle.svg" },
    b: { word: "Karte", image: "map.svg" }
  },
  {
    id: 46,
    category: "Natur",
    a: { word: "Mond", image: "moon.svg" },
    b: { word: "Sterne", image: "star.svg" }
  },
  {
    id: 47,
    category: "Haushalt",
    a: { word: "Tisch", image: "table.svg" },
    b: { word: "Stuhl", image: "chair.svg" }
  },
  {
    id: 48,
    category: "Arbeit",
    a: { word: "Lehrer", image: "teacher.svg" },
    b: { word: "Arzt", image: "health_worker.svg" }
  },
  {
    id: 49,
    category: "Essen",
    a: { word: "Ei", image: "egg.svg" },
    b: { word: "Salat", image: "salad.svg" }
  },
  {
    id: 50,
    category: "Werkzeug",
    a: { word: "Schraubenzieher", image: "screwdriver.svg" },
    b: { word: "Zange", image: "pliers.svg" }
  },
  {
    id: 51,
    category: "Freizeit",
    a: { word: "Tennis", image: "tennis_racket.svg" },
    b: { word: "Basketball", image: "basketball.svg" }
  },
  {
    id: 52,
    category: "Technik",
    a: { word: "Drohne", image: "drone.svg" },
    b: { word: "Roboter", image: "robot.svg" }
  },
  {
    id: 53,
    category: "Natur",
    a: { word: "Vulkan", image: "volcano.svg" },
    b: { word: "Insel", image: "island.svg" }
  },
  {
    id: 54,
    category: "Haushalt",
    a: { word: "Küche", image: "kitchen.svg" },
    b: { word: "Messer", image: "knife.svg" }
  },
  {
    id: 55,
    category: "Natur",
    a: { word: "Hecke", image: "hedge.svg" },
    b: { word: "Rasen", image: "lawn.svg" }
  },
  {
    id: 56,
    category: "Transport",
    a: { word: "Schiff", image: "ship.svg" },
    b: { word: "Segel", image: "sailboat.svg" }
  },
  {
    id: 57,
    category: "Kleidung",
    a: { word: "Jacke", image: "jacket.svg" },
    b: { word: "Handschuh", image: "glove.svg" }
  },
  {
    id: 58,
    category: "Medien",
    a: { word: "Kamera", image: "camera.svg" },
    b: { word: "Mikrofon", image: "microphone.svg" }
  },
  {
    id: 59,
    category: "Alltag",
    a: { word: "Liebe", image: "two_hearts.svg" },
    b: { word: "Angst", image: "fear.svg" }
  },
  {
    id: 60,
    category: "Tiere",
    a: { word: "Pferd", image: "horse.svg" },
    b: { word: "Kuh", image: "cow.svg" }
  },
  {
    id: 61,
    category: "Essen",
    a: { word: "Kuchen", image: "cake.svg" },
    b: { word: "Eis", image: "ice_cream.svg" }
  },
  {
    id: 62,
    category: "Schule",
    a: { word: "Atom", image: "atom.svg" },
    b: { word: "Labor", image: "lab.svg" }
  },
  {
    id: 63,
    category: "Reise",
    a: { word: "Karte", image: "map.svg" },
    b: { word: "Kompass", image: "compass.svg" }
  },
  {
    id: 64,
    category: "Haushalt",
    a: { word: "Waschmaschine", image: "washing_machine.svg" },
    b: { word: "Trockner", image: "dryer.svg" }
  },
  {
    id: 65,
    category: "Technik",
    a: { word: "Server", image: "server.svg" },
    b: { word: "Cloud", image: "cloud.svg" }
  },
  {
    id: 66,
    category: "Freizeit",
    a: { word: "Picknick", image: "picnic.svg" },
    b: { word: "Wandern", image: "hiking.svg" }
  },
  {
    id: 67,
    category: "Sicherheit",
    a: { word: "Helm", image: "helmet.svg" },
    b: { word: "Feuerwehr", image: "fire_truck.svg" }
  },
  {
    id: 68,
    category: "Alltag",
    a: { word: "Tannenbaum", image: "christmas_tree.svg" },
    b: { word: "Ostern", image: "egg_decorated.svg" }
  },
  {
    id: 69,
    category: "Arbeit",
    a: { word: "Bäcker", image: "baker.svg" },
    b: { word: "Mechaniker", image: "wrench.svg" }
  },
  {
    id: 70,
    category: "Natur",
    a: { word: "Wüste", image: "desert.svg" },
    b: { word: "Ozean", image: "ocean.svg" }
  },
  {
    id: 71,
    category: "Kunst",
    a: { word: "Pinsel", image: "paintbrush.svg" },
    b: { word: "Leinwand", image: "frame.svg" }
  },
  {
    id: 72,
    category: "Natur",
    a: { word: "Samen", image: "seed.svg" },
    b: { word: "Topf", image: "flower_pot.svg" }
  },
  {
    id: 73,
    category: "Haushalt",
    a: { word: "Kühlschrank", image: "fridge.svg" },
    b: { word: "Ofen", image: "stove.svg" }
  },
  {
    id: 74,
    category: "Tiere",
    a: { word: "Biene", image: "bee.svg" },
    b: { word: "Schmetterling", image: "butterfly.svg" }
  },
  {
    id: 75,
    category: "Freizeit",
    a: { word: "Skifahren", image: "skiing.svg" },
    b: { word: "Surfen", image: "surfing.svg" }
  },
  {
    id: 76,
    category: "Essen",
    a: { word: "Honig", image: "honey.svg" },
    b: { word: "Nuss", image: "nut.svg" }
  },
  {
    id: 77,
    category: "Transport",
    a: { word: "Roller", image: "scooter.svg" },
    b: { word: "Taxi", image: "taxi.svg" }
  },
  {
    id: 78,
    category: "Schule",
    a: { word: "Computer", image: "computer.svg" },
    b: { word: "Labor", image: "test_tube.svg" }
  },
  {
    id: 79,
    category: "Alltag",
    a: { word: "Markt", image: "market.svg" },
    b: { word: "Platz", image: "plaza.svg" }
  },
  {
    id: 80,
    category: "Wetter",
    a: { word: "Schnee", image: "snowflake.svg" },
    b: { word: "Nebelm", image: "fog.svg" }
  },
  {
    id: 81,
    category: "Gesundheit",
    a: { word: "Zahn", image: "tooth.svg" },
    b: { word: "Arzt", image: "doctor.svg" }
  },
  {
    id: 82,
    category: "Küche",
    a: { word: "Gabel", image: "fork.svg" },
    b: { word: "Löffel", image: "spoon.svg" }
  },
  {
    id: 83,
    category: "Alltag",
    a: { word: "Mutter", image: "mother.svg" },
    b: { word: "Vater", image: "father.svg" }
  },
  {
    id: 84,
    category: "Schule",
    a: { word: "Tafel", image: "blackboard.svg" },
    b: { word: "Lehrer", image: "teacher2.svg" }
  },
  {
    id: 85,
    category: "Musik",
    a: { word: "Klavier", image: "piano.svg" },
    b: { word: "Geige", image: "violin.svg" }
  },
  {
    id: 86,
    category: "Zeit",
    a: { word: "Minute", image: "timer.svg" },
    b: { word: "Stunde", image: "hourglass.svg" }
  },
  {
    id: 87,
    category: "Haushalt",
    a: { word: "Seife", image: "soap.svg" },
    b: { word: "Handtuch", image: "towel.svg" }
  },
  {
    id: 88,
    category: "Natur",
    a: { word: "Klippe", image: "cliff.svg" },
    b: { word: "Höhle", image: "cave.svg" }
  },
  {
    id: 89,
    category: "Kleidung",
    a: { word: "Socken", image: "socks.svg" },
    b: { word: "Mantel", image: "coat.svg" }
  },
  {
    id: 90,
    category: "Natur",
    a: { word: "Hecke", image: "hedge2.svg" },
    b: { word: "Glocke", image: "bell.svg" }
  },
  {
    id: 91,
    category: "Alltag",
    a: { word: "Laterne", image: "lantern.svg" },
    b: { word: "Feuerwerk", image: "fireworks.svg" }
  },
  {
    id: 92,
    category: "Technik",
    a: { word: "Steuergerät", image: "controller.svg" },
    b: { word: "Bildschirm", image: "monitor.svg" }
  },
  {
    id: 93,
    category: "Transport",
    a: { word: "Rolltreppe", image: "escalator.svg" },
    b: { word: "Fähre", image: "ferry.svg" }
  },
  {
    id: 94,
    category: "Küche",
    a: { word: "Pfanne", image: "frying_pan.svg" },
    b: { word: "Topf", image: "pot.svg" }
  },
  {
    id: 95,
    category: "Handwerk",
    a: { word: "Ziegel", image: "brick.svg" },
    b: { word: "Mörtel", image: "mortar.svg" }
  },
  {
    id: 96,
    category: "Unterwegs",
    a: { word: "Rucksack", image: "backpack.svg" },
    b: { word: "Weg", image: "path.svg" }
  },
  {
    id: 97,
    category: "Tiere",
    a: { word: "Fuchs", image: "fox.svg" },
    b: { word: "Wolf", image: "wolf.svg" }
  },
  {
    id: 98,
    category: "Essen",
    a: { word: "Reis", image: "rice.svg" },
    b: { word: "Nudel", image: "noodle.svg" }
  },
  {
    id: 99,
    category: "Spiele",
    a: { word: "Schach", image: "chess.svg" },
    b: { word: "Karte", image: "playing_cards.svg" }
  },
  {
    id: 100,
    category: "Schule",
    a: { word: "Vorlesung", image: "lecture.svg" },
    b: { word: "Prüfung", image: "exam.svg" }
  },
  {
    id: 101,
    category: "Freizeit",
    a: { word: "Angeln", image: "fishing.svg" },
    b: { word: "Camping", image: "camping.svg" }
  },
  {
    id: 102,
    category: "Küche",
    a: { word: "Gewürz", image: "spice.svg" },
    b: { word: "Salz", image: "salt.svg" }
  },
  {
    id: 103,
    category: "Tiere",
    a: { word: "Wellensittich", image: "parrot.svg" },
    b: { word: "Meerschweinchen", image: "guinea_pig.svg" }
  },
  {
    id: 104,
    category: "Natur",
    a: { word: "Regenbogen", image: "rainbow.svg" },
    b: { word: "Gewitter", image: "thunderstorm.svg" }
  },
  {
    id: 105,
    category: "Transport",
    a: { word: "Fahrschein", image: "ticket.svg" },
    b: { word: "Karte", image: "map2.svg" }
  },
  {
    id: 106,
    category: "Arbeit",
    a: { word: "Polizist", image: "police.svg" },
    b: { word: "Pilot", image: "pilot.svg" }
  },
  {
    id: 107,
    category: "Freizeit",
    a: { word: "Theater", image: "theater.svg" },
    b: { word: "Kino", image: "cinema.svg" }
  },
  {
    id: 108,
    category: "Gesundheit",
    a: { word: "Maske", image: "mask.svg" },
    b: { word: "Salbe", image: "ointment.svg" }
  },
  {
    id: 109,
    category: "Schule",
    a: { word: "Stern", image: "constellation.svg" },
    b: { word: "Teleskop", image: "telescope.svg" }
  },
  {
    id: 110,
    category: "Kleidung",
    a: { word: "Brille", image: "glasses.svg" },
    b: { word: "Hemd", image: "shirt.svg" }
  },
  {
    id: 111,
    category: "Natur",
    a: { word: "Wiese", image: "meadow.svg" },
    b: { word: "Fluss", image: "river.svg" }
  }

];




