/* =========================================================
   RAJTEX — Product Data
   Generated catalog using available product imagery.
   ========================================================= */

// Categories
const RAJTEX_CATEGORIES = [
  { id: 'songket', name: 'Songket/Samping', name_ms: 'Songket/Samping', name_id: 'Songket/Samping', count: 0 },
  { id: 'sarees', name: 'Sarees & Suits', name_ms: 'Sari & Sut', name_id: 'Sari & Setelan', count: 0 },
  { id: 'kaftans', name: 'Kaftans & Baju Kurung', name_ms: 'Kaftan & Baju Kurung', name_id: 'Kaftan & Baju Kurung', count: 0 },
  { id: 'kidswear', name: 'Boys & Kidswear', name_ms: 'Pakaian Kanak-Kanak', name_id: 'Pakaian Anak-Anak', count: 0 },
  { id: 'menswear', name: 'Mens Shirts', name_ms: 'Baju Lelaki', name_id: 'Baju Pria', count: 0 }
];

// Fabric pool
const FABRICS = ['Pure Silk', 'Cotton Slub', 'Chanderi', 'Crepe', 'Linen Blend', 'Georgette', 'Rayon', 'Banarasi Silk', 'Tussar', 'Kashmiri Wool', 'Cotton Voile', 'Modal'];
const COLORS_INDIAN = ['Maroon', 'Mustard', 'Emerald', 'Ivory', 'Rust', 'Indigo', 'Plum', 'Peach', 'Olive', 'Sand'];
const COLORS_KIDS = ['Navy', 'Surf Blue', 'Brown', 'Pastel', 'Camo', 'Coral', 'Forest', 'Charcoal', 'Cream', 'Saffron'];
const COLLECTION_NAMES = ['Kalaa', 'Kilkaari', 'Kashmiri', 'Vrindavan', 'Khadi Heritage', 'Coastal Calm', 'Festive Glow', 'Monsoon Bloom', 'Mehfil', 'Riwaaj'];

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

const FEATURED_SONGKET_SAMPING = [
  { name: 'Royal Sapphire Checkered Songket', type: 'Songket', sku: 'PNM-SNG-1001' },
  { name: 'Indigo Blossom Heritage Songket', type: 'Songket', sku: 'PNM-SNG-1002' },
  { name: 'Mulberry Rose Classic Songket', type: 'Songket', sku: 'PNM-SNG-1003' },
  { name: 'Emerald Jade Checkered Songket', type: 'Songket', sku: 'PNM-SNG-1004' },
  { name: 'Maroon Blossom Samping', type: 'Samping', sku: 'PNM-SMP-1001' },
  { name: 'Azure Garden Samping', type: 'Samping', sku: 'PNM-SMP-1002' },
  { name: 'Imperial Blue Heritage Samping', type: 'Samping', sku: 'PNM-SMP-1003' },
  { name: 'Pink Gold Royale Samping', type: 'Samping', sku: 'PNM-SMP-1004' },
  { name: 'Graphite Gold Blossom Samping', type: 'Samping', sku: 'PNM-SMP-1005' },
  { name: 'Ivory Orchid Samping', type: 'Samping', sku: 'PNM-SMP-1006' }
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

FEATURED_SONGKET_SAMPING.forEach((item, i) => {
  PRODUCTS.push({
    id: `sgk-new-${String(i + 1).padStart(3,'0')}`,
    sku: item.sku,
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
const personImageNumbers = [1, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97];
personImageNumbers.forEach((n, i) => {
  const collection = rand(COLLECTION_NAMES);
  const fabric = rand(FABRICS);
  const color = rand(COLORS_INDIAN);
  const basePrice = randInt(85, 320);
  PRODUCTS.push({
    id: `sar-${String(n).padStart(3,'0')}`,
    sku: `RJ-${collection.substring(0,3).toUpperCase()}-${randInt(1000, 9999)}`,
    name: `${collection} ${color} ${fabric.split(' ')[0]} Saree Set`,
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
    sku: `PNM-KAF-${String(1015 + i).padStart(4,'0')}`,
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
    sku: `RJ-KAF-${randInt(1000, 9999)}`,
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

// Boys / Kidswear shirts — shirt_1 through shirt_120
for (let n = 1; n <= 120; n++) {
  const fabric = rand(['Cotton', 'Corduroy', 'Linen Cotton', 'Chambray', 'Cotton Twill']);
  const color = rand(COLORS_KIDS);
  const basePrice = randInt(28, 95);
  PRODUCTS.push({
    id: `kid-${String(n).padStart(3,'0')}`,
    sku: `RJ-KID-${randInt(1000, 9999)}`,
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

// Mens shirts — shirt_121 through shirt_200
for (let n = 121; n <= 200; n++) {
  const fabric = rand(['Cotton', 'Linen', 'Cotton Stretch', 'Premium Cotton', 'Modal Cotton']);
  const color = rand(['Teal', 'Navy', 'White', 'Sand', 'Olive', 'Burgundy', 'Sky Blue', 'Charcoal']);
  const basePrice = randInt(48, 165);
  PRODUCTS.push({
    id: `mns-${String(n).padStart(3,'0')}`,
    sku: `RJ-MNS-${randInt(1000, 9999)}`,
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
