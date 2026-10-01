// ---------------------------------------------------------------------------
// Store configuration — edit these values to make the site your own.
// ---------------------------------------------------------------------------
window.STORE = {
  name: "Marwadi Khana",
  tagline: "Asli Marwadi mithai, ghee mein bani · pre-orders only",
  city: "Delhi NCR",
  currency: "₹",

  // Orders are sent to this WhatsApp number (country code + number, digits only).
  whatsappNumber: "919999999999",
  phone: "+91 99999 99999",
  email: "orders@marwadikhana.com",

  // UPI ID shown at checkout for "Pay by UPI". Leave "" to hide UPI payment.
  upiId: "marwadikhana@upi",

  // Charges
  minOrder: 299,            // minimum item total for delivery
  deliveryFee: 80,          // flat delivery fee
  freeDeliveryAbove: 1499,  // item total at which delivery is free (0 = never)
  taxRate: 0.05,            // 5% GST on items

  // Promo banner at the top of the menu. Set to null to hide.
  banner: {
    title: "Navratri pre-orders are open 🪔",
    text: "Vrat-friendly mithai and namkeen made without grains, onion or garlic. Order now and pick your delivery date.",
    cta: "See Navratri menu",
    category: "navratri"
  },

  // Pre-order delivery slots
  preorderMinDays: 1,       // earliest delivery day: 1 = tomorrow, 2 = day after…
  preorderMaxDays: 7,       // how many days ahead customers can choose
  orderCutoffHour: 18,      // orders placed at/after 6 PM skip one more day
                            // (after 6 PM today → earliest is the day after tomorrow)
  openHour: 10,             // first slot starts at 10:00
  closeHour: 21,            // last slot ends at 21:00
  slotHours: 1.5,           // slot length (e.g. 9:00 – 10:30 AM)

  // Where we deliver. An address is accepted when its state / district / city
  // matches one of these names (as written on OpenStreetMap). Anything else
  // shows the "Sorry, we are not currently delivering near your location" popup.
  deliveryAreas: [
    "Delhi", "New Delhi",
    "Gurugram", "Gurgaon",
    "Noida", "Greater Noida", "Gautam Buddha Nagar",
    "Ghaziabad",
    "Faridabad"
  ],
  // Rough Delhi NCR box, only used if the address lookup service is down.
  serviceBox: { north: 28.95, south: 28.25, west: 76.80, east: 77.65 },

  // Map starts here (your kitchen).
  shop: {
    lat: 28.6139,
    lng: 77.2090
  },

  // Optional: URL that receives every order as JSON (POST), e.g. a Google
  // Apps Script web app that appends rows to a Google Sheet. Leave "" to skip.
  orderWebhook: ""
};
