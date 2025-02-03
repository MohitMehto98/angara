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

export const fetchingRecommandationAPIData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        {
          id: "SR0263AQD-001",
          image:
            "https://media.angara.com/ring/sr0263aqd/6mm-aaaa-aquamarine-white-gold-ring.jpg?width=480&quality=85&auto=webp",
          name: "Three Stone Round Aquamarine Ring with Diamond Accents",
          price: 85000,
        },
        {
          id: "SR0155AQD-002",
          image:
            "https://media.angara.com/ring/sr0155aqd/6mm-aaaa-aquamarine-white-gold-ring.jpg?width=480&quality=85&auto=webp",
          name: "Aquamarine Solitaire Ring with Diamond Accents",
          price: 79000,
        },
        {
          id: "SR0155AQD-003",
          image:
            "https://media.angara.com/ring/sr0155aqd/6mm-aaaa-aquamarine-white-gold-ring.jpg?width=480&quality=85&auto=webp",
          name: "Aquamarine and Diamond Twisted Vine Ring",
          price: 92000,
        },
        {
          id: "SR0160AQ-004",
          image:
            "https://media.angara.com/ring/sr0160aq/7mm-a-aquamarine-white-gold-ring.jpg?width=480&quality=85&auto=webp",
          name: "Classic Three Stone Aquamarine and Diamond Ring",
          price: 98000,
        },
        {
          id: "SR0163AQ-005",
          image:
            "https://media.angara.com/ring/sr0163aq/7mm-aaa-aquamarine-white-gold-ring.jpg?width=480&quality=85&auto=webp",
          name: "Three Stone Round Aquamarine Ring with Diamond Accents",
          price: 86000,
        },
        {
          id: "SR0227AQD-006",
          image:
            "https://media.angara.com/ring/sr0227aqd/6mm-aaa-aquamarine-white-gold-ring.jpg?width=480&quality=85&auto=webp",
          name: "Aquamarine Solitaire Ring with Diamond Accents",
          price: 75000,
        },
        {
          id: "SR0263AQD-007",
          image:
            "https://media.angara.com/ring/sr0263aqd/6mm-aaaa-aquamarine-white-gold-ring.jpg?width=480&quality=85&auto=webp",
          name: "Aquamarine and Diamond Twisted Vine Ring",
          price: 87000,
        },
        {
          id: "SR0423AQ-008",
          image:
            "https://media.angara.com/ring/sr0423aq/7mm-aaaa-aquamarine-white-gold-ring.jpg?width=480&quality=85&auto=webp",
          name: "Classic Three Stone Aquamarine and Diamond Ring",
          price: 94000,
        },
        {
          id: "SR0427AQ-009",
          image:
            "https://media.angara.com/ring/sr0427aq/7mm-aaaa-aquamarine-white-gold-ring.jpg?width=480&quality=85&auto=webp",
          name: "Three Stone Round Aquamarine Ring with Diamond Accents",
          price: 99000,
        },
        {
          id: "SR1195AQ-010",
          image:
            "https://media.angara.com/ring/sr1195aq/7mm-aaaa-aquamarine-white-gold-ring.jpg?width=480&quality=85&auto=webp",
          name: "Aquamarine Solitaire Ring with Diamond Accents",
          price: 88000,
        },
        {
          id: "SR1197AQ-011",
          image:
            "https://media.angara.com/ring/sr1197aq/7mm-aaaa-aquamarine-white-gold-ring.jpg?width=480&quality=85&auto=webp",
          name: "Aquamarine and Diamond Twisted Vine Ring",
          price: 91000,
        },
        {
          id: "SR1912AQD-012",
          image:
            "https://media.angara.com/ring/sr1912aqd/7mm-aaaa-aquamarine-white-gold-ring.jpg?width=480&quality=85&auto=webp",
          name: "Classic Three Stone Aquamarine and Diamond Ring",
          price: 97000,
        },
      ];
      resolve(data);
    }, 100);
  });
};
