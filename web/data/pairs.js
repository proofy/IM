/**
 * Zentrale Wortpaar-Datenbank
 */

/** @typedef {import('../types/pairs.types').WordPair} WordPair */
/** @type {WordPair[]} */

export const PAIRS = [

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
  a: { word: "Kopf", image: "kopf" },
  b: { word: "Kissen", image: "kissen" }
},

{
  id: 6,
  category: "Einkaufen",
  a: { word: "Markt", image: "markt" },
  b: { word: "Tasche", image: "tasche" }
},

{
  id: 7,
  category: "Natur",
  a: { word: "Wald", image: "wald" },
  b: { word: "Hütte", image: "huette" }
},

{
  id: 8,
  category: "Urlaub",
  a: { word: "Strand", image: "strand" },
  b: { word: "Handtuch", image: "handtuch" }
},

{
  id: 9,
  category: "Arbeit",
  a: { word: "Büro", image: "buero" },
  b: { word: "Stuhl", image: "stuhl" }
},

{
  id: 10,
  category: "Küche",
  a: { word: "Küche", image: "kueche" },
  b: { word: "Messer", image: "messer" }
},

{
  id: 11,
  category: "Natur",
  a: {word: "Wald", image: "deciduous_tree.svg"},
  b: {word: "Pilz", image: "beer_mug.svg"  }
}

];



