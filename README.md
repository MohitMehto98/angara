# Frontend Developer Assignment: Jewelry Product Detail Page

## Objective
Evaluate the candidate's expertise in **React.js/Next.js**, ability to integrate APIs, implement SEO best practices, and create high-performance web pages optimized for Lighthouse scores.

---

## Assignment Overview

**Title:** Build a Jewelry Product Detail Page with Variations  
**Estimated Duration:** 6–8 hours  

### Deliverables
1. **Functional Product Detail Page.**  
2. **Codebase with instructions** (`README.md`).  
3. **Deployed live demo** (optional).  
4. **Summary document** explaining variations and SEO optimizations.

---

## Task: Create a Jewelry Product Detail Page

### Page Requirements

#### **1. Layout**
1. **Product Image Section**  
   - Main image display with a carousel of thumbnails.  [done]
   - Dynamically update the main image based on thumbnail or variation selection.  [done]
   - Include a **zoom-in** functionality for the main image.  

2. **Product Info Section**  
   - Display:  
     - Product title.  [done]
     - Price (dynamic based on user selections).  
     - Exclusive offers.  [done]
     - Customer reviews.  [done]
   - Allow customization of:  
     - Gemstone type (e.g., Aquamarine, Sapphire, Diamond).  [done]
     - Gemstone quality (e.g., Good, Better, Best, Heirloom).  [done]
     - Metal type (e.g., White Gold, Yellow Gold, Rose Gold).  [done]
     - Carat weight.  [done]
     - Ring size (with a **"Size Guide"** link).  [done]
   - Update product details dynamically (e.g., price, description, images) based on user selections.[done]

3. **Price Breakdown Section**  
   - Show a table with:  
     - Components (e.g., metal, gemstones, making charges).  [done]
     - Weight, Rate, and Value.  [done]
   - Dynamically calculate and display the **Grand Total** as variations change.[done]

4. **Related Products Section**  
   - Display a carousel of similar products (e.g., **"You May Also Like"**).  [done]
   - Include thumbnail, name, and price range for each product.[done]

---

### Functionality

1. **Dynamic Variation Handling**
   - Fetch product data from a **mock API**.  [done]
   - Update product details dynamically based on selected attributes.  [done]
   - Disable unavailable options (e.g., out-of-stock sizes).  []
   - Display clear error messages for invalid actions.[]

2. **Add to Bag Button**
   - Reflect the selected variation in the button. [done] 
   - Disable the button if the selection is invalid.[]

---

### SEO Optimization

1. **Meta Tags**
   - Add meta tags for `title`, `description`, and `keywords`.

2. **Structured Data** (JSON-LD)
   - Use the `@type: "Product"` schema with attributes such as:  
     - Name  
     - Description  
     - SKU  
     - Image URLs  
     - Price  
     - Availability  
     - Brand  

3. **Lighthouse SEO Score**
   - Ensure a **100/100 Lighthouse SEO score** by:  
     - Adding `alt` attributes to all images.  [done]
     - Lazy-loading images for optimal performance.[done]

---


Evaluation Criteria
Functionality:
Correctly implements dynamic updates for variations.
Accurate price calculations for selected variations.
Functional and responsive design for desktop and mobile.
Code Quality:
Modular and reusable components.
Proper state management (e.g., React useState, useReducer, or Context API).
SEO Optimization:
Proper meta tags, structured data, and accessibility.
Lighthouse SEO score of 100.
Documentation:
Clear setup and execution steps in README.md.
Explanation of how SEO and performance goals were achieved.

Bonus Features (Optional)
Add an image zoom-in feature on hover.
Include a feature to toggle currency (e.g., INR/USD).
Implement pagination or filtering in the "You May Also Like" section.


### Dummy Data

Use the following JSON as a mock API response:

```json
{
  "id": "SR0160AQ",
  "title": "Classic Aquamarine and Diamond Three Stone Engagement Ring",
  "base_price": 237589,
  "exclusive_offer": "Get 20% off on making charges",
  "reviews": 7,
  "images": [
    "https://via.placeholder.com/500x500?text=Main+Image",
    "https://via.placeholder.com/100x100?text=Thumbnail1",
    "https://via.placeholder.com/100x100?text=Thumbnail2",
    "https://via.placeholder.com/100x100?text=Thumbnail3"
  ],
  "variations": {
    "gemstone": ["Aquamarine", "Diamond", "Sapphire"],
    "quality": ["Good", "Better", "Best", "Heirloom"],
    "metal": ["White Gold", "Yellow Gold", "Rose Gold"],
    "carat_weight": [1.5, 1.8, 2.0],
    "ring_size": [6, 7, 8, 9, 10]
  },
  "price_breakdown": {
    "metal": { "rate": 4567, "weight": 3.87, "value": 18528 },
    "stones": [
      { "type": "Aquamarine", "carat": 1.12, "value": 62748 },
      { "type": "Diamond", "carat": 0.46, "value": 143175 }
    ],
    "making_charges": 6218,
    "subtotal": 230669,
    "gst": 6920,
    "grand_total": 237589
  }
}
