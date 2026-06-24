/* =========================================================
   RAJTEX — Product Data
   Generated catalog using available product imagery.
   ========================================================= */

// Categories
const RAJTEX_CATEGORIES = [
  { id: 'sarees', name: 'Sarees', name_ms: 'Sarees', name_id: 'Sarees', count: 0 },
  { id: 'songket', name: 'Songket', name_ms: 'Songket', name_id: 'Songket', count: 0 },
  { id: 'samping', name: 'Samping', name_ms: 'Samping', name_id: 'Samping', count: 0 },
  { id: 'abaya', name: 'Abaya', name_ms: 'Abaya', name_id: 'Abaya', count: 0 },
  { id: 'kaftan', name: 'Kaftan', name_ms: 'Kaftan', name_id: 'Kaftan', count: 0 },
  { id: 'suit-dupatta', name: 'Suit Dupatta', name_ms: 'Suit Dupatta', name_id: 'Suit Dupatta', count: 0 },
  { id: 'kidswear', name: 'Boys Wear', name_ms: 'Pakaian Kanak-Kanak', name_id: 'Pakaian Anak-Anak', count: 0 },
  { id: 'menswear', name: 'Mens Shirts', name_ms: 'Baju Lelaki', name_id: 'Baju Pria', count: 0 }
];

// Fabric pool
const FABRICS = ['Pure Silk', 'Cotton Slub', 'Chanderi', 'Crepe', 'Linen Blend', 'Georgette', 'Rayon', 'Banarasi Silk', 'Tussar', 'Kashmiri Wool', 'Cotton Voile', 'Modal'];
const COLORS_INDIAN = ['Maroon', 'Mustard', 'Emerald', 'Ivory', 'Rust', 'Indigo', 'Plum', 'Peach', 'Olive', 'Sand'];
const COLORS_KIDS = ['Navy', 'Surf Blue', 'Brown', 'Pastel', 'Camo', 'Coral', 'Forest', 'Charcoal', 'Cream', 'Saffron'];
const COLLECTION_NAMES = ['Kalaa', 'Kilkaari', 'Kashmiri', 'Vrindavan', 'Khadi Heritage', 'Coastal Calm', 'Festive Glow', 'Monsoon Bloom', 'Mehfil', 'Riwaaj'];
const PREMIUM_SAREES_SUITS_NAMES = [
  'Zarina Maroon Silk Suit Set',
  'Mysore Ivory Chanderi Suit Set',
  'Amara Emerald Banarasi Suit Set',
  'Kalyani Indigo Crepe Suit Set',
  'Noor Peach Georgette Suit Set',
  'Ruhani Plum Tussar Suit Set',
  'Aarohi Olive Modal Suit Set',
  'Sahana Mustard Cotton Suit Set',
  'Meera Rust Linen Suit Set',
  'Anika Sand Rayon Suit Set',
  'Devika Maroon Chanderi Suit Set',
  'Leela Ivory Pure Silk Suit Set',
  'Vanya Emerald Georgette Suit Set',
  'Ishani Indigo Banarasi Suit Set',
  'Miraaya Peach Cotton Slub Suit Set',
  'Tanvi Plum Crepe Suit Set',
  'Aavya Olive Tussar Suit Set',
  'Kiara Mustard Modal Suit Set',
  'Prisha Rust Rayon Suit Set',
  'Samaira Sand Linen Suit Set',
  'Rhea Maroon Georgette Suit Set',
  'Nayra Ivory Banarasi Suit Set',
  'Avani Emerald Cotton Suit Set',
  'Siya Indigo Pure Silk Suit Set',
  'Myra Peach Chanderi Suit Set',
  'Eshana Plum Modal Suit Set',
  'Roshni Olive Crepe Suit Set',
  'Kavya Mustard Tussar Suit Set',
  'Anaya Rust Georgette Suit Set',
  'Pavitra Sand Banarasi Suit Set',
  'Ameera Maroon Cotton Slub Suit Set',
  'Nirali Ivory Rayon Suit Set',
  'Charvi Emerald Pure Silk Suit Set',
  'Ritika Indigo Chanderi Suit Set',
  'Jiya Peach Linen Suit Set',
  'Veda Plum Banarasi Suit Set',
  'Saachi Olive Georgette Suit Set',
  'Ira Mustard Crepe Suit Set',
  'Mahika Rust Modal Suit Set',
  'Tara Sand Tussar Suit Set',
  'Aanya Maroon Rayon Suit Set',
  'Nisha Ivory Cotton Suit Set',
  'Kiran Emerald Linen Suit Set',
  'Saira Indigo Georgette Suit Set',
  'Lavanya Peach Pure Silk Suit Set',
  'Mahi Plum Chanderi Suit Set',
  'Diya Olive Banarasi Suit Set',
  'Reva Mustard Cotton Slub Suit Set',
  'Inaya Rust Crepe Suit Set',
  'Yamini Sand Modal Suit Set',
  'Padmini Maroon Tussar Suit Set',
  'Zoya Ivory Georgette Suit Set',
  'Eka Emerald Rayon Suit Set',
  'Suhani Indigo Linen Suit Set',
  'Aditi Peach Banarasi Suit Set',
  'Raina Plum Pure Silk Suit Set',
  'Mitali Olive Chanderi Suit Set',
  'Kaira Mustard Georgette Suit Set',
  'Saanvi Rust Cotton Suit Set',
  'Nandini Sand Crepe Suit Set',
  'Bhavya Maroon Modal Suit Set',
  'Aisha Ivory Tussar Suit Set',
  'Malika Emerald Banarasi Suit Set',
  'Pihu Indigo Rayon Suit Set',
  'Riya Peach Linen Suit Set',
  'Trisha Plum Georgette Suit Set',
  'Ila Olive Pure Silk Suit Set',
  'Madhuri Mustard Chanderi Suit Set',
  'Seher Rust Banarasi Suit Set',
  'Vaidehi Sand Cotton Slub Suit Set',
  'Anushka Maroon Crepe Suit Set',
  'Ranjini Ivory Modal Suit Set'
];

// Helpers
function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function priceTier(base) {
  return {
    base: base,             // 1-19 pcs
    bulk: Math.round(base * 0.88), // 20-99
    distributor: Math.round(base * 0.78) // 100+
  };
}

// Build catalog
const PRODUCTS = [];

const NEW_STANDALONE_CATALOGS = [
  {
    category: 'sarees',
    name: 'Sarees',
    collection: 'PNM Sarees Selection',
    fabric: 'Sarees',
    pieces: 'Sarees',
    basePrice: 160,
    files: [
    'sareepic0.jpeg',
    'sareepic1.jpeg',
    'sareepic2.jpeg',
    'sareepic3.jpeg',
    'sareepic4.jpeg',
    'sareepic5.jpeg',
    'sareepic6.jpeg',
    'sareepic7.jpeg',
    'sareepic8.jpeg',
    'sareepic9.jpeg',
    'sareepic10.jpeg',
    'sareepic11.jpeg',
    'sareepic12.jpeg',
    'sareepic13.jpeg',
    'sareepic14.jpeg'
    ]
  },
  {
    category: 'songket',
    name: 'Songket',
    collection: 'PNM Songket Selection',
    fabric: 'Songket',
    pieces: 'Songket',
    basePrice: 180,
    files: [
    'songketpic0.jpeg',
    'songketpic1.jpeg',
    'songketpic2.jpeg',
    'songketpic3.jpeg',
    'songketpic4.jpg',
    'songketpic5.jpg',
    'songketpic6.jpg',
    'songketpic7.jpg',
    'songketpic8.jpg',
    'songketpic9.jpg',
    'songketpic10.jpg',
    'songketpic11.jpg',
    'songketpic12.jpg',
    'songketpic13.jpg',
    'songketpic14.jpg',
    'songketpic15.jpg'
    ]
  },
  {
    category: 'samping',
    name: 'Samping',
    collection: 'PNM Samping Selection',
    fabric: 'Samping',
    pieces: 'Samping',
    basePrice: 120,
    files: [
    'sampingpic0.jpeg',
    'sampingpic1.jpeg',
    'sampingpic2.jpeg',
    'sampingpic3.jpeg',
    'sampingpic4.jpeg',
    'sampingpic5.jpeg',
    'sampingpic6.jpg',
    'sampingpic7.jpg',
    'sampingpic8.jpg',
    'sampingpic9.jpg',
    'sampingpic10.jpg',
    'sampingpic11.jpg',
    'sampingpic12.jpg',
    'sampingpic13.jpg',
    'sampingpic14.jpg'
    ]
  },
  {
    category: 'abaya',
    name: 'Abaya',
    collection: 'PNM Abaya Selection',
    fabric: 'Abaya',
    pieces: 'Abaya',
    basePrice: 110,
    files: [
    'abayapic0.jpg',
    'abayapic1.jpg',
    'abayapic2.jpg',
    'abayapic3.jpg',
    'abayapic4.jpg',
    'abayapic5.jpg',
    'abayapic6.jpg',
    'abayapic7.jpg',
    'abayapic8.jpg',
    'abayapic9.jpg',
    'abayapic10.jpg',
    'abayapic11.jpg',
    'abayapic12.jpg',
    'abayapic13.jpg',
    'abayapic14.jpg'
    ]
  },
  {
    category: 'kaftan',
    name: 'Kaftan',
    collection: 'PNM Kaftan Selection',
    fabric: 'Kaftan',
    pieces: 'Kaftan',
    basePrice: 95,
    files: [
    'kaftanpic0.jpeg',
    'kaftanpic1.jpeg',
    'kaftanpic2.jpeg',
    'kaftanpic3.jpeg',
    'kaftanpic4.jpeg',
    'kaftanpic5.jpeg',
    'kaftanpic6.jpeg',
    'kaftanpic7.jpeg',
    'kaftanpic8.jpeg',
    'kaftanpic9.jpeg'
    ]
  },
  {
    category: 'suit-dupatta',
    name: 'Suit Dupatta',
    collection: 'PNM Suit Dupatta Selection',
    fabric: 'Suit Dupatta',
    pieces: 'Suit Dupatta',
    basePrice: 145,
    files: [
    'suitspic0.jpeg',
    'suitspic1.jpeg',
    'suitspic2.jpeg',
    'suitspic3.jpeg',
    'suitspic4.jpeg',
    'suitspic5.jpeg',
    'suitspic6.jpeg',
    'suitspic7.jpeg',
    'suitspic8.jpeg',
    'suitspic9.jpeg',
    'suitspic10.jpeg',
    'suitspic11.jpeg'
    ]
  }
];

NEW_STANDALONE_CATALOGS.forEach(group => {
  group.files.forEach((file, i) => {
    PRODUCTS.push({
      id: `${group.category}-${String(i).padStart(3,'0')}`,
      name: group.name,
      category: group.category,
      collection: group.collection,
      fabric: group.fabric,
      color: 'Assorted',
      image: `assets/images/${file}`,
      price: priceTier(group.basePrice),
      moq: 20,
      stock: randInt(40, 260),
      pieces: group.pieces,
      sizes: ['Standard'],
      isNew: i < 4,
      isTrending: i < 6,
      isBestSeller: i === 0,
      description: `${group.name} selection for wholesale textile and ready-made garment buyers.`,
      quoteCount: randInt(20, 180)
    });
  });
});

const MOVED_MENS_SHIRT_PRODUCTS = [
  { imageNo: 1, name: 'Teal Regent Crepe Mens Shirt', collection: 'PNM Mens Shirt Selection', fabric: 'Crepe', color: 'Teal', basePrice: 125, stock: 180 },
  { imageNo: 14, name: 'Taupe Heritage Linen Mens Shirt', collection: 'PNM Mens Shirt Selection', fabric: 'Linen Blend', color: 'Taupe', basePrice: 135, stock: 165 },
  { imageNo: 15, name: 'Onyx Cotton Slub Executive Shirt', collection: 'PNM Mens Shirt Selection', fabric: 'Cotton Slub', color: 'Black', basePrice: 120, stock: 190 },
  { imageNo: 16, name: 'Mustard Crepe Mandarin Mens Shirt', collection: 'PNM Mens Shirt Selection', fabric: 'Crepe', color: 'Mustard', basePrice: 125, stock: 155 },
  { imageNo: 17, name: 'Royal Navy Georgette Mens Shirt', collection: 'PNM Mens Shirt Selection', fabric: 'Georgette', color: 'Navy', basePrice: 130, stock: 175 },
  { imageNo: 18, name: 'Rose Banarasi Casual Overshirt', collection: 'PNM Mens Shirt Selection', fabric: 'Banarasi Silk', color: 'Rose', basePrice: 145, stock: 140 },
  { imageNo: 19, name: 'Aubergine Rayon Classic Mens Shirt', collection: 'PNM Mens Shirt Selection', fabric: 'Rayon', color: 'Aubergine', basePrice: 115, stock: 170 },
  { imageNo: 20, name: 'Charcoal Rayon Resort Overshirt', collection: 'PNM Mens Shirt Selection', fabric: 'Rayon', color: 'Charcoal', basePrice: 118, stock: 160 },
  { imageNo: 21, name: 'Mauve Crepe Resort Mens Shirt', collection: 'PNM Mens Shirt Selection', fabric: 'Crepe', color: 'Mauve', basePrice: 122, stock: 150 },
  { imageNo: 22, name: 'Turquoise Modal Resort Mens Shirt', collection: 'PNM Mens Shirt Selection', fabric: 'Modal', color: 'Turquoise', basePrice: 128, stock: 168 },
  { imageNo: 23, name: 'Cobalt Pure Silk Resort Shirt', collection: 'PNM Mens Shirt Selection', fabric: 'Pure Silk', color: 'Cobalt', basePrice: 155, stock: 135 },
  { imageNo: 24, name: 'Olive Chanderi Casual Overshirt', collection: 'PNM Mens Shirt Selection', fabric: 'Chanderi', color: 'Olive', basePrice: 138, stock: 145 }
];

const MOVED_KIDSWEAR_PRODUCTS = [
  { imageNo: 25, name: 'Sandstone Junior Cotton Slub Shirt', collection: 'Junior Heritage', fabric: 'Cotton Slub', color: 'Sandstone', basePrice: 88, stock: 120 }
];
MOVED_KIDSWEAR_PRODUCTS.forEach((item, i) => {
  PRODUCTS.push({
    id: `kid-moved-${String(i + 1).padStart(3,'0')}`,
    name: item.name,
    category: 'kidswear',
    collection: item.collection,
    fabric: item.fabric,
    color: item.color,
    image: `assets/images/person_image_${item.imageNo}.jpeg`,
    price: priceTier(item.basePrice),
    moq: 20,
    stock: item.stock,
    pieces: '1 Shirt',
    sizes: ['2-3y', '4-5y', '6-7y', '8-9y', '10-12y'],
    isNew: true,
    isTrending: i === 0,
    isBestSeller: false,
    description: `${item.name} in ${item.fabric.toLowerCase()}, moved into Boys Wear for wholesale kidswear buyers.`,
    quoteCount: 135
  });
});
// Boys / Kidswear shirts — shirt_1 through shirt_120
for (let n = 1; n <= 120; n++) {
  const fabric = rand(['Cotton', 'Corduroy', 'Linen Cotton', 'Chambray', 'Cotton Twill']);
  const color = rand(COLORS_KIDS);
  const basePrice = randInt(28, 95);
  PRODUCTS.push({
    id: `kid-${String(n).padStart(3,'0')}`,
    name: `${color} ${fabric.split(' ')[0]} Boys Shirt`,
    category: 'kidswear',
    collection: 'Junior Heritage',
    fabric: fabric,
    color: color,
    image: `assets/images/shirt_${n}.jpeg`,
    price: priceTier(basePrice),
    moq: 20,
    stock: randInt(80, 800),
    pieces: '1 Shirt',
    sizes: ['2-3y', '4-5y', '6-7y', '8-9y', '10-12y'],
    isNew: n <= 10,
    isTrending: n % 13 === 0,
    isBestSeller: n % 9 === 0,
    description: `Soft ${fabric.toLowerCase()} button-down shirt in ${color.toLowerCase()}. Sized for ages 2-12, breathable for tropical wear.`,
    quoteCount: randInt(5, 200)
  });
}

MOVED_MENS_SHIRT_PRODUCTS.forEach((item, i) => {
  PRODUCTS.push({
    id: `mns-moved-${String(i + 1).padStart(3,'0')}`,
    name: item.name,
    category: 'menswear',
    collection: item.collection,
    fabric: item.fabric,
    color: item.color,
    image: `assets/images/person_image_${item.imageNo}.jpeg`,
    price: priceTier(item.basePrice),
    moq: 20,
    stock: item.stock,
    pieces: '1 Shirt',
    sizes: ['M', 'L', 'XL', 'XXL', '3XL'],
    isNew: true,
    isTrending: i < 4,
    isBestSeller: i === 0,
    description: `${item.name} in ${item.fabric.toLowerCase()}, moved into Mens Shirts for wholesale ready-made shirt buyers.`,
    quoteCount: 160 - (i * 4)
  });
});
// Mens shirts — shirt_121 through shirt_200
for (let n = 121; n <= 200; n++) {
  const fabric = rand(['Cotton', 'Linen', 'Cotton Stretch', 'Premium Cotton', 'Modal Cotton']);
  const color = rand(['Teal', 'Navy', 'White', 'Sand', 'Olive', 'Burgundy', 'Sky Blue', 'Charcoal']);
  const basePrice = randInt(48, 165);
  PRODUCTS.push({
    id: `mns-${String(n).padStart(3,'0')}`,
    name: `${color} ${fabric.split(' ')[0]} Mens Shirt`,
    category: 'menswear',
    collection: 'Riwaaj Mens',
    fabric: fabric,
    color: color,
    image: `assets/images/shirt_${n}.jpeg`,
    price: priceTier(basePrice),
    moq: 20,
    stock: randInt(50, 600),
    pieces: '1 Shirt',
    sizes: ['M', 'L', 'XL', 'XXL', '3XL'],
    isNew: n >= 195,
    isTrending: n % 14 === 0,
    isBestSeller: n % 10 === 0,
    description: `Crisp ${fabric.toLowerCase()} mens shirt in ${color.toLowerCase()}. Tailored regular fit, machine wash, sized M to 3XL.`,
    quoteCount: randInt(10, 220)
  });
}

// Update category counts
RAJTEX_CATEGORIES.forEach(cat => {
  cat.count = PRODUCTS.filter(p => p.category === cat.id).length;
});

// Reseller testimonials
const RESELLER_TESTIMONIALS = [
  { name: 'Nurul A.', role: 'Shopee Top Seller', city: 'Kuala Lumpur, MY', text: 'I started flipping their kaftans last Raya — pulled in RM 3,200 profit in 6 weeks on 1 order. Restock cycle is fast.', rating: 5, avatar: 'N' },
  { name: 'Putri H.', role: 'Live Commerce Reseller', city: 'Jakarta, ID', text: 'Mereka yang serius soal volume. Saya order 80 pcs, dapat margin yang sangat sehat. Pengiriman ke Jakarta 9 hari.', rating: 5, avatar: 'P' },
  { name: 'Vivian L.', role: 'Boutique Owner', city: 'Penang, MY', text: 'The Indian saree sets sell themselves to my Malay-Indian customers. WhatsApp ordering is the only thing I want from a wholesaler.', rating: 5, avatar: 'V' },
  { name: 'Anh T.', role: 'Online Reseller', city: 'Ho Chi Minh, VN', text: 'Kids shirts are a winner. Quality matches what I see in malls but at half the price. Already on my third reorder.', rating: 5, avatar: 'A' },
  { name: 'Siti R.', role: 'Lazada Seller', city: 'Johor Bahru, MY', text: 'Catalog terupdate setiap minggu. Senang nak pilih, senang nak quote via WhatsApp. Pasukan jualan responsif.', rating: 5, avatar: 'S' }
];

// Showroom / contact info
const SHOWROOMS = [
  { city: 'Kuala Lumpur', address: 'Campbell Complex, Lot 101 & 106 First Floor, Jalan Dang Wangi, 50100 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia', phone: '+91 95102 55501', wa: '919510255501', hours: 'Mon–Sat 10am – 7pm', flag: '🇲🇾' },
  { city: 'Subang Jaya', address: 'E-2-8, Block E, Sri Tanjung, Jalan USJ 16/7, USJ 16, 47620 Subang Jaya, Selangor', phone: '+91 95102 55501', wa: '919510255501', hours: 'By appointment', flag: '🇲🇾' },
  { city: 'Surat (HQ)', address: '4th Floor, Millennium Tower, Ring Road, Surat, Gujarat 395002', phone: '+91 98250 12345', wa: '919825012345', hours: 'Mon–Sat 11am – 8pm IST', flag: '🇮🇳' },
  { city: 'Jakarta (Liaison)', address: 'Tanah Abang Block A, Lt. 3 Los DD-32, Jakarta Pusat', phone: '+62 821 1234 5678', wa: '6282112345678', hours: 'By appointment', flag: '🇮🇩' }
];
