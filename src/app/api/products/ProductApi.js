export const fetchingAPIData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        {
          id: "SR0160AQ",
          title: "Classic Aquamarine and Diamond Three Stone Engagement Ring",
          base_price: 237589,
          exclusive_offer: "Get 20% off on making charges",
          reviews: 7,
          images: [
            "https://media.angara.com/ring/sr0160aq/7mm-aaaa-aquamarine-white-gold-ring.jpg?width=960&quality=85&auto=webp",
            "https://media.angara.com/ring/sr0160aq/7mm-aaaa-aquamarine-white-gold-ring_200.jpg?width=960&quality=85&auto=webp",
            "https://media.angara.com/ring/sr0160aq/sr0160aq_sr0160aq_240.jpg?width=960&quality=85&auto=webp",
            "https://media.angara.com/ring/sr0160aq/sr0160aq_sr0160aq_250.jpg?width=960&quality=85&auto=webp",
            "https://media.angara.com/ring/sr0160aq/6mm-aaaa-aquamarine-white-gold-ring_300.jpg?width=960&quality=85&auto=webp",
            "https://media.angara.com/ring/sr0160aq/6mm-aaaa-aquamarine-white-gold-ring_400.jpg?width=960&quality=85&auto=webp",
            "https://media.angara.com/ring/sr0160aq/6mm-aaaa-aquamarine-white-gold-ring_500.jpg?width=960&quality=85&auto=webp",

            // "https://via.placeholder.com/500x500?text=Main+Image",
            // "https://via.placeholder.com/100x100?text=Thumbnail1",
            // "https://via.placeholder.com/100x100?text=Thumbnail2",
            // "https://via.placeholder.com/100x100?text=Thumbnail3",
          ],
          variations: {
            gemstone: ["Aquamarine", "Diamond", "Sapphire"],
            quality: ["Good", "Better", "Best", "Heirloom"],
            metal: ["White Gold", "Yellow Gold", "Rose Gold"],
            carat_weight: [1.5, 1.8, 2.0],
            ring_size: [6, 7, 8, 9, 10],
          },
          price_breakdown: {
            metal: { rate: 4567, weight: 3.87, value: 18528 },
            stones: [
              { type: "Aquamarine", carat: 1.12, value: 62748 },
              { type: "Diamond", carat: 0.46, value: 143175 },
            ],
            making_charges: 6218,
            subtotal: 230669,
            gst: 6920,
            grand_total: 237589,
          },
        },
        {
          id: "SR0160AW",
          title: "Classic Aquamarine and Diamond Three Stone Engagement Ring",
          base_price: 237589,
          exclusive_offer: "Get 20% off on making charges",
          reviews: 7,
          images: [
            "https://media.angara.com/ring/sr0160aq/7mm-aaaa-aquamarine-white-gold-ring.jpg?width=960&quality=85&auto=webp",
            "https://media.angara.com/ring/sr0160aq/7mm-aaaa-aquamarine-white-gold-ring_200.jpg?width=960&quality=85&auto=webp",
            "https://media.angara.com/ring/sr0160aq/sr0160aq_sr0160aq_240.jpg?width=960&quality=85&auto=webp",
            "https://media.angara.com/ring/sr0160aq/sr0160aq_sr0160aq_250.jpg?width=960&quality=85&auto=webp",
            "https://media.angara.com/ring/sr0160aq/6mm-aaaa-aquamarine-white-gold-ring_300.jpg?width=960&quality=85&auto=webp",
            "https://media.angara.com/ring/sr0160aq/6mm-aaaa-aquamarine-white-gold-ring_400.jpg?width=960&quality=85&auto=webp",
            "https://media.angara.com/ring/sr0160aq/6mm-aaaa-aquamarine-white-gold-ring_500.jpg?width=960&quality=85&auto=webp",

            // "https://via.placeholder.com/500x500?text=Main+Image",
            // "https://via.placeholder.com/100x100?text=Thumbnail1",
            // "https://via.placeholder.com/100x100?text=Thumbnail2",
            // "https://via.placeholder.com/100x100?text=Thumbnail3",
          ],
          variations: {
            gemstone: ["Aquamarine", "Diamond", "Sapphire"],
            quality: ["Good", "Better", "Best", "Heirloom"],
            metal: ["White Gold", "Yellow Gold", "Rose Gold"],
            carat_weight: [1.5, 1.8, 2.0],
            ring_size: [6, 7, 8, 9, 10],
          },
          price_breakdown: {
            metal: { rate: 4567, weight: 3.87, value: 18528 },
            stones: [
              { type: "Aquamarine", carat: 1.12, value: 62748 },
              { type: "Diamond", carat: 0.46, value: 143175 },
            ],
            making_charges: 6218,
            subtotal: 230669,
            gst: 6920,
            grand_total: 237589,
          },
        },
      ];
      resolve(data);
    }, 1000);
  });
};
