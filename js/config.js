// ---------------------------------------------------------------------------
// Store configuration — edit these values to make the site your own.
// ---------------------------------------------------------------------------
window.STORE = {
  name: "Marwadi Khana",
  tagline: "Asli Marwadi mithai, ghee mein bani",
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

  // Coupons: code -> { type: "percent" | "flat", value, min, label }
  coupons: {
    NAVRATRI10: { type: "percent", value: 10, min: 999, label: "10% off on orders above ₹999" },
    MITHAS100:  { type: "flat", value: 100, min: 1499, label: "₹100 off on orders above ₹1499" }
  },

  // Promo banner at the top of the menu. Set to null to hide.
  banner: {
    title: "Navratri Specials are here 🪔",
    text: "Vrat-friendly mithai and namkeen made without grains, onion or garlic. Use code NAVRATRI10 for 10% off above ₹999.",
    cta: "See Navratri menu",
    category: "navratri"
  },

  // Delivery slots
  openHour: 9,              // first slot starts at 9:00
  closeHour: 21,            // last slot ends at 21:00
  slotHours: 1.5,           // slot length (e.g. 09:30 – 11:00)
  prepMinutes: 120,         // earliest slot must start this long from now
  preorderDays: 4,          // days ahead customers can schedule

  // Your kitchen / shop. Used for pickup details, the map's starting point
  // and the delivery radius check.
  shop: {
    lat: 28.6139,
    lng: 77.2090,
    address: "Shop no. 1, Your Market, New Delhi 110001"
  },
  deliveryRadiusKm: 25,     // set 0 to deliver anywhere

  // Optional: URL that receives every order as JSON (POST), e.g. a Google
  // Apps Script web app that appends rows to a Google Sheet. Leave "" to skip.
  orderWebhook: ""
};
