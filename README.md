# Marwadi Khana: online ordering site

A mobile-first ordering website for Marwadi Khana (mithai, Navratri specials and combos).
It uses plain HTML, CSS and JavaScript, with no build step and no server.

## What customers can do

1. **Menu**: browse collapsible categories. The **Menu** button jumps to a category. Customers can search and filter (vrat friendly, popular, under ₹300). Cards can show "ONLY N LEFT!", POPULAR or VRAT FRIENDLY badges.
2. **Item page**: pick a required option (weight, type, number of kanyas) and optional add-ons (gift wrap, card…) with live pricing. After adding, the button changes to **Go to cart**.
3. **Your Order**: change quantities, switch between Delivery and Pickup, apply a coupon, and see the bill (sub total, delivery charges, GST, to pay).
4. **Delivery address**: search a place or move the map pin, or use current location. The map uses OpenStreetMap, so no API key is needed. Addresses outside your delivery radius are blocked.
5. **Checkout**: pick a delivery or pickup slot and enter name, email, mobile, house no., landmark and instructions. Choose UPI or cash.
6. **Order received**: shows the order ID and summary. A **Confirm order on WhatsApp** button sends the full order (items, address, Google Maps link) to your WhatsApp number. A **Pay with UPI** button opens GPay/PhonePe/Paytm with the amount filled in.

## Make it yours

| What | Where |
| --- | --- |
| Shop name, WhatsApp number, UPI ID, phone, address, location on the map | `js/config.js` |
| Delivery fee, free-delivery limit, minimum order, GST, delivery radius | `js/config.js` |
| Coupons and the Navratri banner | `js/config.js` |
| Delivery slot timings and how many days ahead people can order | `js/config.js` |
| Categories, items, prices, weights, add-ons, stock, sold out | `js/menu.js` |
| Colours and fonts | top of `css/style.css` |

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

## Things to know
- **Payments**: UPI links go straight to your UPI ID, so check the payment against the order ID.
  To take card/UPI payments automatically you would need a gateway such as Razorpay or Cashfree, plus a small server.
- **Order records**: orders reach you through WhatsApp (and the webhook if you set one up).
  The site has no admin panel or database.
- **Address search** uses OpenStreetMap's free Nominatim service. That's fine for a small shop.
  If you get a lot of traffic, switch to a paid geocoding provider.
