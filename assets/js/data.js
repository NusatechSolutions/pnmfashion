/* =========================================================
   RAJTEX — Product Data
   Generated catalog using available product imagery.
   ========================================================= */

// Categories
const RAJTEX_CATEGORIES = [
  { id: 'songket', name: 'Songket/Samping', name_ms: 'Songket/Samping', name_id: 'Songket/Samping', count: 0 },
  { id: 'sarees', name: 'Sarees & Suits', name_ms: 'Sari & Sut', name_id: 'Sari & Setelan', count: 0 },
  { id: 'kaftans', name: 'Kaftans/Abaya', name_ms: 'Kaftan/Abaya', name_id: 'Kaftan/Abaya', count: 0 },
  { id: 'kidswear', name: 'Boys & Kidswear', name_ms: 'Pakaian Kanak-Kanak', name_id: 'Pakaian Anak-Anak', count: 0 },
  { id: 'menswear', name: 'Mens Shirts', name_ms: 'Baju Lelaki', name_id: 'Baju Pria', count: 0 }
];

// Fabric pool
const FABRICS = ['Pure Silk', 'Cotton Slub', 'Chanderi', 'Crepe', 'Linen Blend', 'Georgette', 'Rayon', 'Banarasi Silk', 'Tussar', 'Kashmiri Wool', 'Cotton Voile', 'Modal'];
const COLORS_INDIAN = ['Maroon', 'Mustard', 'Emerald', 'Ivory', 'Rust', 'Indigo', 'Plum', 'Peach', 'Olive', 'Sand'];
const COLORS_KIDS = ['Navy', 'Surf Blue', 'Brown', 'Pastel', 'Camo', 'Coral', 'Forest', 'Charcoal', 'Cream', 'Saffron'];
const COLLECTION_NAMES = ['Kalaa', 'Kilkaari', 'Kashmiri', 'Vrindavan', 'Khadi Heritage', 'Coastal Calm', 'Festive Glow', 'Monsoon Bloom', 'Mehfil', 'Riwaaj'];
const PREMIUM_SAREES_SUITS_NAMES = [
  'Zarina Maroon Silk Saree Suit Set',
  'Mysore Ivory Chanderi Saree Suit Set',
  'Amara Emerald Banarasi Saree Suit Set',
  'Kalyani Indigo Crepe Saree Suit Set',
  'Noor Peach Georgette Saree Suit Set',
  'Ruhani Plum Tussar Saree Suit Set',
  'Aarohi Olive Modal Saree Suit Set',
  'Sahana Mustard Cotton Saree Suit Set',
  'Meera Rust Linen Saree Suit Set',
  'Anika Sand Rayon Saree Suit Set',
  'Devika Maroon Chanderi Saree Suit Set',
  'Leela Ivory Pure Silk Saree Suit Set',
  'Vanya Emerald Georgette Saree Suit Set',
  'Ishani Indigo Banarasi Saree Suit Set',
  'Miraaya Peach Cotton Slub Saree Suit Set',
  'Tanvi Plum Crepe Saree Suit Set',
  'Aavya Olive Tussar Saree Suit Set',
  'Kiara Mustard Modal Saree Suit Set',
  'Prisha Rust Rayon Saree Suit Set',
  'Samaira Sand Linen Saree Suit Set',
  'Rhea Maroon Georgette Saree Suit Set',
  'Nayra Ivory Banarasi Saree Suit Set',
  'Avani Emerald Cotton Saree Suit Set',
  'Siya Indigo Pure Silk Saree Suit Set',
  'Myra Peach Chanderi Saree Suit Set',
  'Eshana Plum Modal Saree Suit Set',
  'Roshni Olive Crepe Saree Suit Set',
  'Kavya Mustard Tussar Saree Suit Set',
  'Anaya Rust Georgette Saree Suit Set',
  'Pavitra Sand Banarasi Saree Suit Set',
  'Ameera Maroon Cotton Slub Saree Suit Set',
  'Nirali Ivory Rayon Saree Suit Set',
  'Charvi Emerald Pure Silk Saree Suit Set',
  'Ritika Indigo Chanderi Saree Suit Set',
  'Jiya Peach Linen Saree Suit Set',
  'Veda Plum Banarasi Saree Suit Set',
  'Saachi Olive Georgette Saree Suit Set',
  'Ira Mustard Crepe Saree Suit Set',
  'Mahika Rust Modal Saree Suit Set',
  'Tara Sand Tussar Saree Suit Set',
  'Aanya Maroon Rayon Saree Suit Set',
  'Nisha Ivory Cotton Saree Suit Set',
  'Kiran Emerald Linen Saree Suit Set',
  'Saira Indigo Georgette Saree Suit Set',
  'Lavanya Peach Pure Silk Saree Suit Set',
  'Mahi Plum Chanderi Saree Suit Set',
  'Diya Olive Banarasi Saree Suit Set',
  'Reva Mustard Cotton Slub Saree Suit Set',
  'Inaya Rust Crepe Saree Suit Set',
  'Yamini Sand Modal Saree Suit Set',
  'Padmini Maroon Tussar Saree Suit Set',
  'Zoya Ivory Georgette Saree Suit Set',
  'Eka Emerald Rayon Saree Suit Set',
  'Suhani Indigo Linen Saree Suit Set',
  'Aditi Peach Banarasi Saree Suit Set',
  'Raina Plum Pure Silk Saree Suit Set',
  'Mitali Olive Chanderi Saree Suit Set',
  'Kaira Mustard Georgette Saree Suit Set',
  'Saanvi Rust Cotton Saree Suit Set',
  'Nandini Sand Crepe Saree Suit Set',
  'Bhavya Maroon Modal Saree Suit Set',
  'Aisha Ivory Tussar Saree Suit Set',
  'Malika Emerald Banarasi Saree Suit Set',
  'Pihu Indigo Rayon Saree Suit Set',
  'Riya Peach Linen Saree Suit Set',
  'Trisha Plum Georgette Saree Suit Set',
  'Ila Olive Pure Silk Saree Suit Set',
  'Madhuri Mustard Chanderi Saree Suit Set',
  'Seher Rust Banarasi Saree Suit Set',
  'Vaidehi Sand Cotton Slub Saree Suit Set',
  'Anushka Maroon Crepe Saree Suit Set',
  'Ranjini Ivory Modal Saree Suit Set'
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

const NEW_SONGKET_SAMPING = [
  { name: 'Royal Sapphire Bunga Tabur Raya Samping', file: 'IMG-20260613-WA0002.jpg', type: 'Songket' },
  { name: 'Imperial Ivory Gold Cempaka DiRaja Festive Samping', file: 'IMG-20260613-WA0004.jpg', type: 'Samping' },
  { name: 'Heritage Mulberry Kembang Setaman Nikah Tenun Samping', file: 'IMG-20260613-WA0005.jpg', type: 'Samping' },
  { name: 'Regal Ruby Royal Check Selangor Songket Samping', file: 'IMG-20260613-WA0006.jpg', type: 'Songket' },
  { name: 'Majestic Onyx Awan Larat Majlis Samping', file: 'IMG-20260613-WA0007.jpg', type: 'Samping' },
  { name: 'Sultan Rose Gold Songket Stripe Perlis Festive Samping', file: 'IMG-20260613-WA0008.jpg', type: 'Samping' },
  { name: 'Puteri Maroon Diamond Weave Adat Tenun Samping', file: 'IMG-20260613-WA0009.jpg', type: 'Songket' },
  { name: 'Istana Jade Bintang Raya Ceremonial Songket Samping', file: 'IMG-20260613-WA0012.jpg', type: 'Samping' },
  { name: 'Nusantara Pewter Melati DiRaja Samping', file: 'IMG-20260613-WA0013.jpg', type: 'Samping' },
  { name: 'Seri Champagne Floral Lattice Nikah Festive Samping', file: 'IMG-20260613-WA0016.jpg', type: 'Songket' },
  { name: 'Indera Silver Tampuk Manggis Selangor Tenun Samping', file: 'IMG-20260613-WA0017.jpg', type: 'Samping' },
  { name: 'Classic Emerald Keris Majlis Songket Samping', file: 'IMG-20260613-WA0020.jpg', type: 'Samping' },
  { name: 'Royal Midnight Pandan Lattice Perlis Samping', file: 'IMG-20260613-WA0033.jpg', type: 'Songket' },
  { name: 'Imperial Amber Pucuk Rebung Adat Festive Samping', file: 'IMG-20260613-WA0034.jpg', type: 'Samping' },
  { name: 'Heritage Teal Tanjak Raya Tenun Samping', file: 'IMG-20260613-WA0036.jpg', type: 'Samping' },
  { name: 'Regal Aubergine Seri Wau DiRaja Songket Samping', file: 'IMG-20260613-WA0037.jpg', type: 'Songket' },
  { name: 'Majestic Sapphire Bunga Tabur Nikah Samping', file: 'IMG-20260613-WA0046.jpg', type: 'Samping' },
  { name: 'Sultan Ivory Gold Cempaka Selangor Festive Samping', file: 'IMG-20260613-WA0070.jpg', type: 'Samping' },
  { name: 'Puteri Mulberry Kembang Setaman Majlis Tenun Samping', file: 'IMG-20260613-WA0072.jpg', type: 'Songket' },
  { name: 'Istana Ruby Royal Check Perlis Songket Samping', file: 'IMG-20260613-WA0074.jpg', type: 'Samping' },
  { name: 'Nusantara Onyx Awan Larat Adat Samping', file: 'IMG-20260613-WA0075.jpg', type: 'Samping' },
  { name: 'Seri Rose Gold Songket Stripe Raya Festive Samping', file: 'IMG-20260613-WA0076.jpg', type: 'Songket' },
  { name: 'Indera Maroon Diamond Weave DiRaja Tenun Samping', file: 'IMG-20260613-WA0079.jpg', type: 'Samping' },
  { name: 'Classic Jade Bintang Raya Nikah Songket Samping', file: 'IMG-20260613-WA0080.jpg', type: 'Samping' },
  { name: 'Royal Pewter Melati Selangor Samping', file: 'IMG-20260613-WA0081.jpg', type: 'Songket' },
  { name: 'Imperial Champagne Floral Lattice Majlis Festive Samping', file: 'IMG-20260613-WA0089.jpg', type: 'Samping' },
  { name: 'Heritage Silver Tampuk Manggis Perlis Tenun Samping', file: 'IMG-20260613-WA0090.jpg', type: 'Samping' },
  { name: 'Regal Emerald Keris Adat Songket Samping', file: 'IMG-20260613-WA0091.jpg', type: 'Songket' },
  { name: 'Majestic Midnight Pandan Lattice Raya Samping', file: 'IMG-20260613-WA0092.jpg', type: 'Samping' },
  { name: 'Sultan Amber Pucuk Rebung DiRaja Festive Samping', file: 'IMG-20260613-WA0093.jpg', type: 'Samping' },
  { name: 'Puteri Teal Tanjak Nikah Tenun Samping', file: 'IMG-20260613-WA0094.jpg', type: 'Songket' },
  { name: 'Istana Aubergine Seri Wau Selangor Songket Samping', file: 'IMG-20260613-WA0095.jpg', type: 'Samping' },
  { name: 'Nusantara Sapphire Bunga Tabur Majlis Samping', file: 'IMG-20260613-WA0096.jpg', type: 'Samping' },
  { name: 'Seri Ivory Gold Cempaka Perlis Festive Samping', file: 'IMG-20260613-WA0097.jpg', type: 'Songket' },
  { name: 'Indera Mulberry Kembang Setaman Adat Tenun Samping', file: 'IMG-20260613-WA0098.jpg', type: 'Samping' },
  { name: 'Classic Ruby Royal Check Raya Songket Samping', file: 'IMG-20260613-WA0099.jpg', type: 'Samping' },
  { name: 'Royal Onyx Awan Larat DiRaja Samping', file: 'IMG-20260613-WA0100.jpg', type: 'Songket' },
  { name: 'Imperial Rose Gold Songket Stripe Nikah Festive Samping', file: 'IMG-20260613-WA0101.jpg', type: 'Samping' },
  { name: 'Heritage Maroon Diamond Weave Selangor Tenun Samping', file: 'IMG-20260613-WA0102.jpg', type: 'Samping' },
  { name: 'Regal Jade Bintang Raya Majlis Songket Samping', file: 'IMG-20260613-WA0103.jpg', type: 'Songket' },
  { name: 'Majestic Pewter Melati Perlis Samping', file: 'IMG-20260613-WA0105.jpg', type: 'Samping' },
  { name: 'Sultan Champagne Floral Lattice Adat Festive Samping', file: 'IMG-20260613-WA0106.jpg', type: 'Samping' },
  { name: 'Puteri Silver Tampuk Manggis Raya Tenun Samping', file: 'IMG-20260613-WA0107.jpg', type: 'Songket' },
  { name: 'Istana Emerald Keris DiRaja Songket Samping', file: 'IMG-20260613-WA0108.jpg', type: 'Samping' },
  { name: 'Nusantara Midnight Pandan Lattice Nikah Samping', file: 'IMG-20260613-WA0109.jpg', type: 'Samping' },
  { name: 'Seri Amber Pucuk Rebung Selangor Festive Samping', file: 'IMG-20260613-WA0110.jpg', type: 'Songket' },
  { name: 'Indera Teal Tanjak Majlis Tenun Samping', file: 'IMG-20260613-WA0111.jpg', type: 'Samping' },
  { name: 'Classic Aubergine Seri Wau Perlis Songket Samping', file: 'IMG-20260613-WA0112.jpg', type: 'Samping' },
  { name: 'Royal Sapphire Bunga Tabur Adat Samping', file: 'IMG-20260613-WA0113.jpg', type: 'Songket' },
  { name: 'Imperial Ivory Gold Cempaka Raya Festive Samping', file: 'IMG-20260613-WA0114.jpg', type: 'Samping' },
  { name: 'Heritage Mulberry Kembang Setaman DiRaja Tenun Samping', file: 'IMG-20260613-WA0115.jpg', type: 'Samping' },
  { name: 'Regal Ruby Royal Check Nikah Songket Samping', file: 'IMG-20260613-WA0116.jpg', type: 'Songket' },
  { name: 'Majestic Onyx Awan Larat Selangor Samping', file: 'IMG-20260613-WA0117.jpg', type: 'Samping' },
  { name: 'Sultan Rose Gold Songket Stripe Majlis Festive Samping', file: 'IMG-20260613-WA0118.jpg', type: 'Samping' },
  { name: 'Puteri Maroon Diamond Weave Perlis Tenun Samping', file: 'IMG-20260613-WA0119.jpg', type: 'Songket' },
  { name: 'Istana Jade Bintang Raya Adat Songket Samping', file: 'IMG-20260613-WA0120.jpg', type: 'Samping' },
  { name: 'Nusantara Pewter Melati Raya Samping', file: 'IMG-20260613-WA0121.jpg', type: 'Samping' },
  { name: 'Seri Champagne Floral Lattice DiRaja Festive Samping', file: 'IMG-20260613-WA0122.jpg', type: 'Songket' },
  { name: 'Indera Silver Tampuk Manggis Nikah Tenun Samping', file: 'IMG-20260613-WA0123.jpg', type: 'Samping' },
  { name: 'Classic Emerald Keris Selangor Songket Samping', file: 'IMG-20260613-WA0125.jpg', type: 'Samping' },
  { name: 'Royal Midnight Pandan Lattice Majlis Samping', file: 'IMG-20260613-WA0126.jpg', type: 'Songket' },
  { name: 'Imperial Amber Pucuk Rebung Perlis Festive Samping', file: 'IMG-20260613-WA0127.jpg', type: 'Samping' },
  { name: 'Heritage Teal Tanjak Adat Tenun Samping', file: 'IMG-20260613-WA0128.jpg', type: 'Samping' },
  { name: 'Regal Aubergine Seri Wau Raya Songket Samping', file: 'IMG-20260613-WA0131.jpg', type: 'Songket' },
  { name: 'Majestic Sapphire Bunga Tabur DiRaja Samping', file: 'IMG-20260613-WA0133.jpg', type: 'Samping' },
  { name: 'Sultan Ivory Gold Cempaka Nikah Festive Samping', file: 'IMG-20260613-WA0134.jpg', type: 'Samping' },
  { name: 'Puteri Mulberry Kembang Setaman Selangor Tenun Samping', file: 'IMG-20260613-WA0135.jpg', type: 'Songket' },
  { name: 'Istana Ruby Royal Check Majlis Songket Samping', file: 'IMG-20260613-WA0136.jpg', type: 'Samping' },
  { name: 'Nusantara Onyx Awan Larat Perlis Samping', file: 'IMG-20260613-WA0137.jpg', type: 'Samping' },
  { name: 'Seri Rose Gold Songket Stripe Adat Festive Samping', file: 'IMG-20260613-WA0138.jpg', type: 'Songket' },
  { name: 'Indera Maroon Diamond Weave Raya Tenun Samping', file: 'IMG-20260613-WA0139.jpg', type: 'Samping' },
  { name: 'Classic Jade Bintang Raya DiRaja Songket Samping', file: 'IMG-20260613-WA0140.jpg', type: 'Samping' },
  { name: 'Royal Pewter Melati Nikah Samping', file: 'IMG-20260613-WA0141.jpg', type: 'Songket' },
  { name: 'Imperial Champagne Floral Lattice Selangor Festive Samping', file: 'IMG-20260613-WA0142.jpg', type: 'Samping' },
  { name: 'Heritage Silver Tampuk Manggis Majlis Tenun Samping', file: 'IMG-20260613-WA0143.jpg', type: 'Samping' },
  { name: 'Regal Emerald Keris Perlis Songket Samping', file: 'IMG-20260613-WA0145.jpg', type: 'Songket' },
  { name: 'Majestic Midnight Pandan Lattice Adat Samping', file: 'IMG-20260613-WA0146.jpg', type: 'Samping' },
  { name: 'Sultan Amber Pucuk Rebung Raya Festive Samping', file: 'IMG-20260613-WA0147.jpg', type: 'Samping' },
  { name: 'Puteri Teal Tanjak DiRaja Tenun Samping', file: 'IMG-20260613-WA0148.jpg', type: 'Songket' },
  { name: 'Istana Aubergine Seri Wau Nikah Songket Samping', file: 'IMG-20260613-WA0149.jpg', type: 'Samping' },
  { name: 'Nusantara Sapphire Bunga Tabur Selangor Samping', file: 'IMG-20260613-WA0150.jpg', type: 'Samping' },
  { name: 'Seri Ivory Gold Cempaka Majlis Festive Samping', file: 'IMG-20260613-WA0152.jpg', type: 'Songket' },
  { name: 'Indera Mulberry Kembang Setaman Perlis Tenun Samping', file: 'IMG-20260613-WA0153.jpg', type: 'Samping' },
  { name: 'Classic Ruby Royal Check Adat Songket Samping', file: 'IMG-20260614-WA0027.jpg', type: 'Samping' },
  { name: 'Royal Onyx Awan Larat Raya Samping', file: 'IMG-20260614-WA0028.jpg', type: 'Songket' },
  { name: 'Imperial Rose Gold Songket Stripe DiRaja Festive Samping', file: 'IMG-20260614-WA0030.jpg', type: 'Samping' },
  { name: 'Heritage Maroon Diamond Weave Nikah Tenun Samping', file: 'IMG-20260614-WA0031.jpg', type: 'Samping' },
  { name: 'Regal Jade Bintang Raya Selangor Songket Samping', file: 'IMG-20260614-WA0033.jpg', type: 'Songket' },
  { name: 'Majestic Pewter Melati Majlis Samping', file: 'IMG-20260614-WA0034.jpg', type: 'Samping' },
  { name: 'Sultan Champagne Floral Lattice Perlis Festive Samping', file: 'IMG-20260614-WA0035.jpg', type: 'Samping' },
  { name: 'Puteri Silver Tampuk Manggis Adat Tenun Samping', file: 'IMG-20260614-WA0036.jpg', type: 'Songket' },
  { name: 'Istana Emerald Keris Raya Songket Samping', file: 'IMG-20260614-WA0037.jpg', type: 'Samping' }
];

const ABAYA_KAFTAN_PRODUCTS = [
  {
    id: 'aby-001',
    name: 'Heritage Petal Palette Abaya Set',
    category: 'kaftans',
    collection: 'PNM Kaftan/Abaya Selection',
    fabric: 'Embroidered Abaya Set',
    color: 'Assorted Pastel',
    image: 'assets/images/Heritage Petal Palette Abaya Set.jpg',
    price: priceTier(110),
    moq: 20,
    stock: 180,
    pieces: '1 Piece Abaya / Kaftan Cut',
    sizes: ['Free Size', 'L', 'XL'],
    isNew: true,
    isTrending: true,
    isBestSeller: true,
    description: 'Heritage Petal Palette Abaya Set for wholesale modestwear, kaftan and abaya retailers.',
    quoteCount: 180
  },
  {
    id: 'aby-002',
    name: 'Sagewood Vine Embroidered Abaya',
    category: 'kaftans',
    collection: 'PNM Kaftan/Abaya Selection',
    fabric: 'Embroidered Rayon',
    color: 'Sagewood',
    image: 'assets/images/Sagewood Vine Embroidered Abaya.jpg',
    price: priceTier(110),
    moq: 20,
    stock: 150,
    pieces: '1 Piece Abaya / Kaftan Cut',
    sizes: ['Free Size', 'L', 'XL'],
    isNew: true,
    isTrending: true,
    isBestSeller: false,
    description: 'Sagewood Vine Embroidered Abaya for wholesale modestwear, kaftan and abaya retailers.',
    quoteCount: 175
  },
  {
    id: 'aby-003',
    name: 'Noir Rose Vine Embroidered Abaya',
    category: 'kaftans',
    collection: 'PNM Kaftan/Abaya Selection',
    fabric: 'Embroidered Rayon',
    color: 'Noir Rose',
    image: 'assets/images/Noir Rose Vine Embroidered Abaya.jpg',
    price: priceTier(110),
    moq: 20,
    stock: 160,
    pieces: '1 Piece Abaya / Kaftan Cut',
    sizes: ['Free Size', 'L', 'XL'],
    isNew: true,
    isTrending: true,
    isBestSeller: false,
    description: 'Noir Rose Vine Embroidered Abaya for wholesale modestwear, kaftan and abaya retailers.',
    quoteCount: 170
  },
  {
    id: 'aby-004',
    name: 'Aubergine Mint Jacquard Abaya',
    category: 'kaftans',
    collection: 'PNM Kaftan/Abaya Selection',
    fabric: 'Jacquard Rayon',
    color: 'Aubergine Mint',
    image: 'assets/images/Aubergine Mint Jacquard Abaya.jpg',
    price: priceTier(110),
    moq: 20,
    stock: 145,
    pieces: '1 Piece Abaya / Kaftan Cut',
    sizes: ['Free Size', 'L', 'XL'],
    isNew: true,
    isTrending: true,
    isBestSeller: false,
    description: 'Aubergine Mint Jacquard Abaya for wholesale modestwear, kaftan and abaya retailers.',
    quoteCount: 165
  },
  {
    id: 'aby-005',
    name: 'Midnight Vine Embroidered Abaya',
    category: 'kaftans',
    collection: 'PNM Kaftan/Abaya Selection',
    fabric: 'Embroidered Rayon',
    color: 'Midnight Black',
    image: 'assets/images/Midnight Vine Embroidered Abaya.jpg',
    price: priceTier(110),
    moq: 20,
    stock: 120,
    pieces: '1 Piece Abaya / Kaftan Cut',
    sizes: ['Free Size', 'L', 'XL'],
    isNew: true,
    isTrending: false,
    isBestSeller: false,
    description: 'Midnight Vine Embroidered Abaya for wholesale modestwear, kaftan and abaya retailers.',
    quoteCount: 160
  },
  {
    id: 'aby-006',
    name: 'Royal Sandstone Textured Abaya',
    category: 'kaftans',
    collection: 'PNM Kaftan/Abaya Selection',
    fabric: 'Textured Rayon',
    color: 'Royal Sandstone',
    image: 'assets/images/Royal Sandstone Textured Abaya.jpg',
    price: priceTier(110),
    moq: 20,
    stock: 135,
    pieces: '1 Piece Abaya / Kaftan Cut',
    sizes: ['Free Size', 'L', 'XL'],
    isNew: true,
    isTrending: false,
    isBestSeller: false,
    description: 'Royal Sandstone Textured Abaya for wholesale modestwear, kaftan and abaya retailers.',
    quoteCount: 155
  },
  {
    id: 'aby-007',
    name: 'Burgundy Teal Pearl Abaya',
    category: 'kaftans',
    collection: 'PNM Kaftan/Abaya Selection',
    fabric: 'Pearl Detail Rayon',
    color: 'Burgundy Teal',
    image: 'assets/images/Burgundy Teal Pearl Abaya.jpg',
    price: priceTier(110),
    moq: 20,
    stock: 140,
    pieces: '1 Piece Abaya / Kaftan Cut',
    sizes: ['Free Size', 'L', 'XL'],
    isNew: false,
    isTrending: false,
    isBestSeller: false,
    description: 'Burgundy Teal Pearl Abaya for wholesale modestwear, kaftan and abaya retailers.',
    quoteCount: 150
  },
  {
    id: 'aby-008',
    name: 'Sapphire Mist Threadwork Abaya',
    category: 'kaftans',
    collection: 'PNM Kaftan/Abaya Selection',
    fabric: 'Threadwork Rayon',
    color: 'Sapphire Mist',
    image: 'assets/images/Sapphire Mist Threadwork Abaya.jpg',
    price: priceTier(110),
    moq: 20,
    stock: 155,
    pieces: '1 Piece Abaya / Kaftan Cut',
    sizes: ['Free Size', 'L', 'XL'],
    isNew: false,
    isTrending: false,
    isBestSeller: false,
    description: 'Sapphire Mist Threadwork Abaya for wholesale modestwear, kaftan and abaya retailers.',
    quoteCount: 145
  },
  {
    id: 'aby-009',
    name: 'Lilac Taupe Chainstitch Abaya',
    category: 'kaftans',
    collection: 'PNM Kaftan/Abaya Selection',
    fabric: 'Chainstitch Rayon',
    color: 'Lilac Taupe',
    image: 'assets/images/Lilac Taupe Chainstitch Abaya.jpg',
    price: priceTier(110),
    moq: 20,
    stock: 130,
    pieces: '1 Piece Abaya / Kaftan Cut',
    sizes: ['Free Size', 'L', 'XL'],
    isNew: false,
    isTrending: false,
    isBestSeller: false,
    description: 'Lilac Taupe Chainstitch Abaya for wholesale modestwear, kaftan and abaya retailers.',
    quoteCount: 140
  },
  {
    id: 'aby-010',
    name: 'Plum Charcoal Panel Abaya',
    category: 'kaftans',
    collection: 'PNM Kaftan/Abaya Selection',
    fabric: 'Panelled Rayon',
    color: 'Plum Charcoal',
    image: 'assets/images/Plum Charcoal Panel Abaya.jpg',
    price: priceTier(110),
    moq: 20,
    stock: 125,
    pieces: '1 Piece Abaya / Kaftan Cut',
    sizes: ['Free Size', 'L', 'XL'],
    isNew: false,
    isTrending: false,
    isBestSeller: false,
    description: 'Plum Charcoal Panel Abaya for wholesale modestwear, kaftan and abaya retailers.',
    quoteCount: 135
  },
  {
    id: 'aby-011',
    name: 'Rosewood Navy Chainstitch Abaya',
    category: 'kaftans',
    collection: 'PNM Kaftan/Abaya Selection',
    fabric: 'Chainstitch Rayon',
    color: 'Rosewood Navy',
    image: 'assets/images/Rosewood Navy Chainstitch Abaya.jpg',
    price: priceTier(110),
    moq: 20,
    stock: 132,
    pieces: '1 Piece Abaya / Kaftan Cut',
    sizes: ['Free Size', 'L', 'XL'],
    isNew: false,
    isTrending: false,
    isBestSeller: false,
    description: 'Rosewood Navy Chainstitch Abaya for wholesale modestwear, kaftan and abaya retailers.',
    quoteCount: 130
  },
  {
    id: 'aby-012',
    name: 'Silver Pearl Draped Abaya',
    category: 'kaftans',
    collection: 'PNM Kaftan/Abaya Selection',
    fabric: 'Draped Embroidery',
    color: 'Silver Pearl',
    image: 'assets/images/Silver Pearl Draped Abaya.jpg',
    price: priceTier(110),
    moq: 20,
    stock: 95,
    pieces: '1 Piece Abaya / Kaftan Cut',
    sizes: ['Free Size', 'L', 'XL'],
    isNew: false,
    isTrending: false,
    isBestSeller: false,
    description: 'Silver Pearl Draped Abaya for wholesale modestwear, kaftan and abaya retailers.',
    quoteCount: 125
  },
  {
    id: 'aby-013',
    name: 'Noir Bloom Open Abaya',
    category: 'kaftans',
    collection: 'PNM Kaftan/Abaya Selection',
    fabric: 'Open Abaya Embroidery',
    color: 'Black Gold',
    image: 'assets/images/Noir Bloom Open Abaya.jpg',
    price: priceTier(110),
    moq: 20,
    stock: 105,
    pieces: '1 Piece Abaya / Kaftan Cut',
    sizes: ['Free Size', 'L', 'XL'],
    isNew: false,
    isTrending: false,
    isBestSeller: false,
    description: 'Noir Bloom Open Abaya for wholesale modestwear, kaftan and abaya retailers.',
    quoteCount: 120
  },
  {
    id: 'aby-014',
    name: 'Moonstone Grey Kimono Abaya',
    category: 'kaftans',
    collection: 'PNM Kaftan/Abaya Selection',
    fabric: 'Kimono Drape',
    color: 'Moonstone Grey',
    image: 'assets/images/Moonstone Grey Kimono Abaya.jpg',
    price: priceTier(110),
    moq: 20,
    stock: 90,
    pieces: '1 Piece Abaya / Kaftan Cut',
    sizes: ['Free Size', 'L', 'XL'],
    isNew: false,
    isTrending: false,
    isBestSeller: false,
    description: 'Moonstone Grey Kimono Abaya for wholesale modestwear, kaftan and abaya retailers.',
    quoteCount: 115
  },
  {
    id: 'aby-015',
    name: 'Turquoise Mosaic Drape Abaya',
    category: 'kaftans',
    collection: 'PNM Kaftan/Abaya Selection',
    fabric: 'Mosaic Drape',
    color: 'Turquoise',
    image: 'assets/images/Turquoise Mosaic Drape Abaya.jpg',
    price: priceTier(110),
    moq: 20,
    stock: 98,
    pieces: '1 Piece Abaya / Kaftan Cut',
    sizes: ['Free Size', 'L', 'XL'],
    isNew: false,
    isTrending: false,
    isBestSeller: false,
    description: 'Turquoise Mosaic Drape Abaya for wholesale modestwear, kaftan and abaya retailers.',
    quoteCount: 110
  }
];

ABAYA_KAFTAN_PRODUCTS.forEach(item => PRODUCTS.push(item));

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
const FEATURED_SONGKET_SAMPING = [
  { name: 'Royal Sapphire Checkered Songket', type: 'Songket' },
  { name: 'Indigo Blossom Heritage Songket', type: 'Songket' },
  { name: 'Mulberry Rose Classic Songket', type: 'Songket' },
  { name: 'Emerald Jade Checkered Songket', type: 'Songket' },
  { name: 'Maroon Blossom Samping', type: 'Samping' },
  { name: 'Azure Garden Samping', type: 'Samping' },
  { name: 'Imperial Blue Heritage Samping', type: 'Samping' },
  { name: 'Pink Gold Royale Samping', type: 'Samping' },
  { name: 'Graphite Gold Blossom Samping', type: 'Samping' },
  { name: 'Ivory Orchid Samping', type: 'Samping' }
];

const FEATURED_KAFTANS = [
  'Abstract Floral Slate Grey Kaftan',
  'Baroque Scroll Ivory Kaftan',
  'Botanical Bloom Plum Kaftan',
  'Garden Blossom Ivory Kaftan',
  'Midnight Floral Border Kaftan',
  'Midnight Floral Cascade Kaftan',
  'Paisley Heritage Black Kaftan',
  'Pastel Botanical Sketch Kaftan',
  'Turquoise Leaf Wave Kaftan',
  'Vintage Rose Sky Blue Kaftan'
];

NEW_SONGKET_SAMPING.forEach((item, i) => {
  PRODUCTS.push({
    id: `sgk-upload-${String(i + 1).padStart(3,'0')}`,
    name: item.name,
    category: 'songket',
    collection: 'PNM Songket/Samping Premium Uploads',
    fabric: item.type,
    color: 'Assorted',
    image: `assets/images/${item.file}`,
    price: priceTier(item.type === 'Songket' ? 180 : 120),
    moq: 20,
    stock: randInt(40, 260),
    pieces: item.type,
    sizes: ['Standard'],
    isNew: true,
    isTrending: i < 12,
    isBestSeller: i === 0,
    description: `${item.name} for wholesale traditional textile, samping, and festivewear retailers.`,
    quoteCount: randInt(20, 180)
  });
});

FEATURED_SONGKET_SAMPING.forEach((item, i) => {
  PRODUCTS.push({
    id: `sgk-new-${String(i + 1).padStart(3,'0')}`,
    name: item.name,
    category: 'songket',
    collection: 'PNM Songket/Samping Selection',
    fabric: item.type,
    color: 'Assorted',
    image: `assets/images/${item.name}.jpeg`,
    price: priceTier(item.type === 'Songket' ? 180 : 120),
    moq: 20,
    stock: randInt(40, 260),
    pieces: item.type,
    sizes: ['Standard'],
    isNew: true,
    isTrending: i < 4,
    isBestSeller: i === 0,
    description: `${item.name} for wholesale traditional textile and festivewear retailers.`,
    quoteCount: randInt(20, 160)
  });
});

// Sarees & suits — use person_image_*.jpeg (the salwar/saree shots)
const personImageNumbers = [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97];
personImageNumbers.forEach((n, i) => {
  const collection = rand(COLLECTION_NAMES);
  const fabric = rand(FABRICS);
  const color = rand(COLORS_INDIAN);
  const basePrice = randInt(85, 320);
  PRODUCTS.push({
    id: `sar-${String(n).padStart(3,'0')}`,
    name: PREMIUM_SAREES_SUITS_NAMES[i] || `${collection} ${color} ${fabric.split(' ')[0]} Saree Suit Set`,
    category: 'sarees',
    collection: collection,
    fabric: fabric,
    color: color,
    image: `assets/images/person_image_${n}.jpeg`,
    price: priceTier(basePrice),
    moq: 20,
    stock: randInt(40, 600),
    pieces: 'Kurta + Pant + Dupatta',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: i < 8,
    isTrending: i % 7 === 0,
    isBestSeller: i % 11 === 0,
    description: `Hand-finished ${fabric.toLowerCase()} ${color.toLowerCase()} saree set from the ${collection} collection. Soft fall, intricate motif work, and rich resham detailing along the border.`,
    quoteCount: randInt(8, 240) // for "trending" analytics
  });
});

// Kaftans / Baju Kurung — use phone_image_*.jpeg
FEATURED_KAFTANS.forEach((name, i) => {
  PRODUCTS.push({
    id: `kaf-new-${String(i + 1).padStart(3,'0')}`,
    name: name,
    category: 'kaftans',
    collection: 'PNM Kaftan Selection',
    fabric: 'Rayon Print',
    color: 'Assorted',
    image: `assets/images/${name}.jpeg`,
    price: priceTier(95),
    moq: 20,
    stock: randInt(60, 400),
    pieces: '1 Piece Kaftan / Baju Kurung Cut',
    sizes: ['Free Size', 'L', 'XL'],
    isNew: true,
    isTrending: i < 4,
    isBestSeller: i === 0,
    description: `${name} with assorted printed motifs for wholesale kaftan and baju kurung retailers.`,
    quoteCount: randInt(20, 180)
  });
});

for (let n = 1; n <= 11; n++) {
  const fabric = rand(['Rayon Print', 'Cotton Voile', 'Modal Stretch', 'Crepe Silk']);
  const color = rand(['Fuchsia', 'Lilac', 'Sand', 'Emerald', 'Coral']);
  const basePrice = randInt(45, 140);
  PRODUCTS.push({
    id: `kaf-${String(n).padStart(3,'0')}`,
    name: `Block-Print ${color} ${fabric.split(' ')[0]} Kaftan`,
    category: 'kaftans',
    collection: 'Mehfil',
    fabric: fabric,
    color: color,
    image: `assets/images/phone_image_${n}.jpeg`,
    price: priceTier(basePrice),
    moq: 20,
    stock: randInt(60, 400),
    pieces: '1 Piece Kaftan / Baju Kurung Cut',
    sizes: ['Free Size', 'L', 'XL'],
    isNew: n <= 4,
    isTrending: n === 2,
    isBestSeller: n === 5,
    description: `Lightweight ${fabric.toLowerCase()} kaftan tailored for tropical comfort. Made for Malaysian and Indonesian retailers — block-printed motifs in ${color.toLowerCase()}.`,
    quoteCount: randInt(20, 180)
  });
}

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
  { city: 'Kuala Lumpur', address: 'Campbell Complex, Lot 101 & 106 First Floor, Jalan Dang Wangi, 50100 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia', phone: '+60 12-224 5717', wa: '60122245717', hours: 'Mon–Sat 10am – 7pm', flag: '🇲🇾' },
  { city: 'Surat (HQ)', address: '4th Floor, Millennium Tower, Ring Road, Surat, Gujarat 395002', phone: '+91 98250 12345', wa: '919825012345', hours: 'Mon–Sat 11am – 8pm IST', flag: '🇮🇳' },
  { city: 'Jakarta (Liaison)', address: 'Tanah Abang Block A, Lt. 3 Los DD-32, Jakarta Pusat', phone: '+62 821 1234 5678', wa: '6282112345678', hours: 'By appointment', flag: '🇮🇩' }
];
