# Marwadi Khana: online ordering site

A mobile-first **pre-order** website for Marwadi Khana (mithai, Navratri specials and combos).
It is home delivery only, across Delhi NCR and Gurgaon.
It uses plain HTML, CSS and JavaScript, with no build step and no server.

## What customers can do

1. **Menu**: browse collapsible categories. The **Menu** button jumps to a category. Customers can search and filter (vrat friendly, popular, under ₹300). Cards can show "ONLY N LEFT!", POPULAR or VRAT FRIENDLY badges.
2. **Item page**: pick a required option (weight, type, number of kanyas) and optional add-ons (gift wrap, card…) with live pricing. After adding, the button changes to **Go to cart**.
3. **Your Order**: change quantities and see the bill (sub total, delivery charges, GST, to pay).
4. **Delivery address**: search a place, move the map pin, or use current location. The map uses OpenStreetMap, so no API key is needed.
   An address outside Delhi NCR / Gurgaon shows a popup: *"Sorry, we are not currently delivering near your location."*
5. **Checkout**: pick a delivery date (from tomorrow, up to 7 days ahead) and time slot. Enter name, email, mobile, house no., landmark and instructions. Choose UPI or cash on delivery.
6. **Order received**: shows the order ID and summary. A **Confirm order on WhatsApp** button sends the full order (items, address, Google Maps link) to your WhatsApp number. A **Pay with UPI** button opens GPay/PhonePe/Paytm with the amount filled in.

## Make it yours

| What | Where |
| --- | --- |
| Shop name, WhatsApp number, UPI ID, phone, where the map starts | `js/config.js` |
| Delivery fee, free-delivery limit, minimum order, GST | `js/config.js` |
| Areas you deliver to (`deliveryAreas`) | `js/config.js` |
| The Navratri banner | `js/config.js` |
| Earliest and latest pre-order day, slot timings | `js/config.js` |
| Categories, items, prices, weights, add-ons, stock, sold out | `js/menu.js` |
| Colours (maroon theme) and fonts | top of `css/style.css` |

### Adding photos
Put photos in an `images/` folder and list them on the item in `js/menu.js`:

```js
images: ["images/ghewar-1.jpg", "images/ghewar-2.jpg"],
```

The first photo shows on the menu card. The item page shows all of them with thumbnails.
Items without photos show their emoji on a coloured tile.

### Getting orders into a Google Sheet (optional)
Set `orderWebhook` in `js/config.js` to the URL of a Google Apps Script web app (or any URL that accepts a POST).
Every order is sent to it as JSON, as well as the WhatsApp confirmation.

## Run it locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Put it online (free)
- **GitHub Pages**: repo **Settings → Pages → Deploy from a branch**, pick the branch and `/ (root)`.
- **Netlify / Vercel**: drag and drop the folder, or connect the repo. There is nothing to build.

## Delivery area
`deliveryAreas` in `js/config.js` lists the places you deliver to:
Delhi, New Delhi, Gurugram/Gurgaon, Noida, Greater Noida, Ghaziabad and Faridabad.
The site checks the state, district and city of the address the customer picks, so a street called "Delhi Road" in another city doesn't count.
To deliver only to Delhi and Gurgaon, remove the Noida, Ghaziabad and Faridabad lines.

## Things to know
- **Payments**: UPI links go straight to your UPI ID, so check the payment against the order ID.
  To take card/UPI payments automatically you would need a gateway such as Razorpay or Cashfree, plus a small server.
- **Order records**: orders reach you through WhatsApp (and the webhook if you set one up).
  The site has no admin panel or database.
- **Address search** uses OpenStreetMap's free Nominatim service. That's fine for a small shop.
  If you get a lot of traffic, switch to a paid geocoding provider.
