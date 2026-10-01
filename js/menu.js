// ---------------------------------------------------------------------------
// Menu data — add, remove or edit categories and items here.
//
// Category: { id, name, subtitle?, items: [...] }
// Item fields:
//   id        unique string (used in the URL, keep it simple)
//   name      display name
//   desc      description
//   price     base price in rupees
//   veg       true for veg (all mithai here is veg) — shows the green dot
//   images    optional list of photo URLs, e.g. ["images/kaju-katli.jpg"]
//             (first one is the thumbnail; the item page shows a gallery)
//   emoji     shown on a coloured tile when there is no photo
//   badge     optional "POPULAR", "NEW", "VRAT FRIENDLY", ...
//   stock     optional number — shows "ONLY N LEFT!" when 10 or fewer
//   soldOut   optional true
//   options   optional list of option groups:
//             { name, required, max, choices: [{ label, price }] }
//             required: customer must pick one; max: how many can be picked
//             price on a choice is added to the base price
// ---------------------------------------------------------------------------

const WEIGHT = (half, kg) => ({
  name: "Select weight", required: true, max: 1, choices: [
    { label: "250 g", price: 0 },
    { label: "500 g", price: half },
    { label: "1 kg", price: kg }
  ]
});

const GIFTING = {
  name: "Add-ons", required: false, max: 3, choices: [
    { label: "Festive gift wrap", price: 50 },
    { label: "Greeting card with your message", price: 30 },
    { label: "Silver-foil (varq) finish", price: 60 }
  ]
};

window.MENU = [
  {
    id: "navratri",
    name: "Navratri Specials",
    subtitle: "Vrat-friendly · no grains, onion or garlic · made with sendha namak",
    items: [
      {
        id: "singhara-barfi",
        name: "Singhare ki Barfi",
        desc: "Water-chestnut flour slow-roasted in desi ghee with khoya and cardamom. Perfect for the vrat.",
        price: 220, veg: true, emoji: "🟫", badge: "VRAT FRIENDLY", stock: 8,
        options: [WEIGHT(200, 600)]
      },
      {
        id: "rajgira-laddoo",
        name: "Rajgira Laddoo",
        desc: "Puffed amaranth bound with jaggery and ghee. Light, crunchy and vrat-safe.",
        price: 180, veg: true, emoji: "🟡", badge: "VRAT FRIENDLY",
        options: [WEIGHT(160, 500)]
      },
      {
        id: "makhana-kheer",
        name: "Kesar Makhana Kheer",
        desc: "Roasted fox nuts simmered in full-cream milk with saffron and dry fruits. 400 ml tub.",
        price: 249, veg: true, emoji: "🥣", badge: "POPULAR"
      },
      {
        id: "sabudana-vada",
        name: "Sabudana Vada (6 pcs)",
        desc: "Crisp sago and potato vadas with peanuts, served with vrat-wali hari chutney.",
        price: 199, veg: true, emoji: "🧆"
      },
      {
        id: "kuttu-pakode",
        name: "Kuttu Aloo Pakode",
        desc: "Buckwheat-batter potato fritters fried in groundnut oil. 250 g.",
        price: 169, veg: true, emoji: "🥔"
      },
      {
        id: "vrat-namkeen",
        name: "Vrat Aloo Lachha Namkeen",
        desc: "Crunchy potato sticks with peanuts, kishmish and sendha namak.",
        price: 149, veg: true, emoji: "🥜",
        options: [WEIGHT(130, 400)]
      },
      {
        id: "lauki-halwa",
        name: "Lauki ka Halwa",
        desc: "Bottle gourd cooked in milk and ghee, topped with pista. 500 g box.",
        price: 299, veg: true, emoji: "🟢", stock: 5
      }
    ]
  },
  {
    id: "mithai",
    name: "Classic Marwadi Mithai",
    subtitle: "Made fresh every morning in pure desi ghee",
    items: [
      {
        id: "ghewar",
        name: "Malai Ghewar",
        desc: "Jaipur-style honeycomb ghewar soaked in chashni and topped with rabdi, kesar and pista. One 8-inch piece.",
        price: 549, veg: true, emoji: "🌕", badge: "POPULAR", stock: 6,
        options: [
          { name: "Select type", required: true, max: 1, choices: [
            { label: "Malai ghewar", price: 0 },
            { label: "Plain ghewar", price: -150 },
            { label: "Mawa ghewar", price: 80 }
          ] },
          GIFTING
        ]
      },
      {
        id: "mohanthal",
        name: "Mohanthal",
        desc: "Coarse besan roasted in ghee for hours, set with mawa and topped with almond slivers.",
        price: 240, veg: true, emoji: "🟧",
        options: [WEIGHT(220, 680), GIFTING]
      },
      {
        id: "mawa-kachori",
        name: "Mawa Kachori (4 pcs)",
        desc: "Jodhpur's famous flaky kachori stuffed with mawa and dry fruits, dipped in chashni.",
        price: 260, veg: true, emoji: "🥮", badge: "POPULAR"
      },
      {
        id: "balushahi",
        name: "Balushahi",
        desc: "Flaky, layered and glazed. Melts in the mouth.",
        price: 180, veg: true, emoji: "🍩",
        options: [WEIGHT(160, 500)]
      },
      {
        id: "alwar-kalakand",
        name: "Alwar ka Kalakand",
        desc: "Grainy milk cake cooked down from fresh milk, just like in Alwar.",
        price: 260, veg: true, emoji: "🧀",
        options: [WEIGHT(240, 740), GIFTING]
      },
      {
        id: "sohan-halwa",
        name: "Ajmer ka Sohan Halwa",
        desc: "Dense, chewy halwa loaded with ghee, almonds and pistachios.",
        price: 280, veg: true, emoji: "🟤",
        options: [WEIGHT(260, 800), GIFTING]
      }
    ]
  },
  {
    id: "barfi",
    name: "Barfi & Katli",
    items: [
      {
        id: "kaju-katli",
        name: "Kaju Katli",
        desc: "Premium cashew katli with a delicate silver varq.",
        price: 320, veg: true, emoji: "🔷", badge: "POPULAR",
        options: [WEIGHT(300, 940), GIFTING]
      },
      {
        id: "pista-barfi",
        name: "Pista Barfi",
        desc: "Rich pistachio and mawa barfi with a hint of cardamom.",
        price: 380, veg: true, emoji: "🟩",
        options: [WEIGHT(360, 1100), GIFTING]
      },
      {
        id: "besan-chakki",
        name: "Besan Chakki",
        desc: "Traditional Marwadi besan barfi with a melt-in-the-mouth crumb.",
        price: 200, veg: true, emoji: "🟨",
        options: [WEIGHT(180, 560)]
      },
      {
        id: "doodh-barfi",
        name: "Doodh Barfi",
        desc: "Simple, milky and not too sweet.",
        price: 220, veg: true, emoji: "⬜",
        options: [WEIGHT(200, 620)]
      }
    ]
  },
  {
    id: "laddoo",
    name: "Laddoo",
    items: [
      {
        id: "churma-laddoo",
        name: "Churma Laddoo",
        desc: "Coarse wheat churma with jaggery, ghee and khus-khus. The Rajasthani classic.",
        price: 200, veg: true, emoji: "🟠", badge: "POPULAR",
        options: [WEIGHT(180, 560)]
      },
      {
        id: "motichoor-laddoo",
        name: "Desi Ghee Motichoor Laddoo",
        desc: "Tiny boondi pearls in kesar chashni.",
        price: 190, veg: true, emoji: "🟠",
        options: [WEIGHT(170, 540)]
      },
      {
        id: "gond-laddoo",
        name: "Gond ke Laddoo",
        desc: "Edible gum, dry fruits and whole wheat in ghee. A winter favourite.",
        price: 260, veg: true, emoji: "🟤",
        options: [WEIGHT(240, 740)]
      },
      {
        id: "dryfruit-laddoo",
        name: "Sugar-free Dry Fruit Laddoo",
        desc: "Dates, figs, almonds and cashews. No added sugar.",
        price: 340, veg: true, emoji: "🌰", badge: "NEW",
        options: [WEIGHT(320, 980)]
      }
    ]
  },
  {
    id: "combos",
    name: "Combos & Gift Boxes",
    subtitle: "Ready to gift: packed in our festive Marwadi Khana box",
    items: [
      {
        id: "navratri-vrat-combo",
        name: "Navratri Vrat Combo",
        desc: "Singhare ki Barfi 250 g + Rajgira Laddoo 250 g + Vrat Namkeen 250 g + Makhana Kheer 400 ml.",
        price: 749, veg: true, emoji: "🪔", badge: "VRAT FRIENDLY", stock: 9
      },
      {
        id: "kanya-pujan-box",
        name: "Kanya Pujan Prasad Box",
        desc: "Halwa, kala chana and puri prasad for Ashtami and Navami. Choose how many kanyas.",
        price: 899, veg: true, emoji: "🙏", badge: "POPULAR",
        options: [
          { name: "Number of kanyas", required: true, max: 1, choices: [
            { label: "9 kanyas", price: 0 },
            { label: "11 kanyas", price: 200 },
            { label: "21 kanyas", price: 900 }
          ] },
          { name: "Add-ons", required: false, max: 2, choices: [
            { label: "Chunri + bangles set (per kanya)", price: 450 },
            { label: "Return gift pouches", price: 350 }
          ] }
        ]
      },
      {
        id: "marwadi-sampler",
        name: "Marwadi Mithai Sampler (1 kg)",
        desc: "250 g each of Mohanthal, Kaju Katli, Churma Laddoo and Alwar Kalakand.",
        price: 1199, veg: true, emoji: "🎁", badge: "POPULAR",
        options: [GIFTING]
      },
      {
        id: "dussehra-hamper",
        name: "Festive Dry Fruit & Mithai Hamper",
        desc: "Kaju Katli 500 g, Pista Barfi 250 g, roasted almonds 200 g and a brass diya in a gift basket.",
        price: 1999, veg: true, emoji: "🧺", badge: "NEW",
        options: [GIFTING]
      },
      {
        id: "ghewar-combo",
        name: "Ghewar + Rabdi Combo",
        desc: "One Malai Ghewar with a 250 g tub of rabdi on the side.",
        price: 699, veg: true, emoji: "🌕", soldOut: true
      }
    ]
  }
];
