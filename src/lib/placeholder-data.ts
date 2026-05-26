// Placeholder data — shaped to mirror Shopify Storefront API responses
// so it can be swapped for real data later without changing components.

export type Money = { amount: number; currencyCode: "AED" };

export type Product = {
  id: string;
  handle: string;
  title: string;
  brand: string;
  description: string;
  image: string;
  price: Money;
  compareAtPrice?: Money;
  rating: number;
  reviewCount: number;
  badges?: Array<"bestseller" | "new" | "sale" | "premium" | "dermatologist">;
  concerns: string[];
  collections: string[];
};

export type Collection = {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: string;
  productCount: number;
};

export type Brand = {
  id: string;
  handle: string;
  name: string;
  tagline: string;
  logo?: string;
};

const img = (seed: string, w = 600, h = 600) =>
  `https://images.unsplash.com/photo-${seed}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const BRANDS: Brand[] = [
  { id: "b1", handle: "la-roche-posay", name: "La Roche-Posay", tagline: "Dermatologist recommended" },
  { id: "b2", handle: "cerave", name: "CeraVe", tagline: "Developed with dermatologists" },
  { id: "b3", handle: "bioderma", name: "Bioderma", tagline: "Pioneer in dermatology" },
  { id: "b4", handle: "cetaphil", name: "Cetaphil", tagline: "Gentle skincare since 1947" },
  { id: "b5", handle: "avene", name: "Avène", tagline: "Thermal spring water" },
  { id: "b6", handle: "eucerin", name: "Eucerin", tagline: "Medical skin science" },
  { id: "b7", handle: "the-ordinary", name: "The Ordinary", tagline: "Clinical formulations" },
  { id: "b8", handle: "anua", name: "Anua", tagline: "Korean clean beauty" },
  { id: "b9", handle: "skin1004", name: "SKIN1004", tagline: "Madagascar centella" },
  { id: "b10", handle: "medicube", name: "Medicube", tagline: "K-derma innovation" },
];

export const COLLECTIONS: Collection[] = [
  { id: "c1", handle: "acne-breakouts", title: "Acne & Breakouts", description: "Targeted formulas for blemish-prone skin.", image: img("1556228720-195a672e8a03"), productCount: 48 },
  { id: "c2", handle: "pigmentation-dark-spots", title: "Pigmentation & Dark Spots", description: "Brightening serums and treatments.", image: img("1571781926291-c477ebfd024b"), productCount: 36 },
  { id: "c3", handle: "dry-dehydrated-skin", title: "Dry & Dehydrated Skin", description: "Deep hydration and barrier repair.", image: img("1570194065650-d99fb4bedf0a"), productCount: 52 },
  { id: "c4", handle: "anti-aging-wrinkles", title: "Anti-Aging & Wrinkles", description: "Retinol, peptides, and firming care.", image: img("1522337360788-8b13dee7a37e"), productCount: 41 },
  { id: "c5", handle: "sensitive-skin-redness", title: "Sensitive Skin & Redness", description: "Soothing formulas for reactive skin.", image: img("1556228453-efd6c1ff04f6"), productCount: 29 },
  { id: "c6", handle: "sun-protection-spf", title: "Sun Protection SPF", description: "Daily UV defense from trusted brands.", image: img("1556228578-8c89e6adf883"), productCount: 33 },
  { id: "c7", handle: "hair-scalp-care", title: "Hair & Scalp Care", description: "Clinical haircare and scalp treatments.", image: img("1522338242992-e1a54906a8da"), productCount: 22 },
  { id: "c8", handle: "cleansers", title: "Cleansers", description: "Gentle, effective daily cleansers.", image: img("1556228841-a3c527ebefe5"), productCount: 64 },
  { id: "c9", handle: "serums", title: "Serums", description: "Concentrated actives for every concern.", image: img("1620916566398-39f1143ab7be"), productCount: 78 },
  { id: "c10", handle: "moisturizers", title: "Moisturizers", description: "Hydrators for every skin type.", image: img("1570194065593-d9bbf6f0bd6f"), productCount: 56 },
  { id: "c11", handle: "sunscreens", title: "Sunscreens", description: "Lightweight, high-protection SPF.", image: img("1556228724-4d2f7c3b9b32"), productCount: 30 },
  { id: "c12", handle: "korean-beauty", title: "Korean Beauty", description: "Innovative K-beauty essentials.", image: img("1571875257727-256c39da42af"), productCount: 45 },
  { id: "c13", handle: "baby-care", title: "Baby Care", description: "Pediatrician-tested gentle care.", image: img("1555252333-9f8e92e65df9"), productCount: 18 },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1", handle: "lrp-effaclar-duo", title: "Effaclar Duo+ Anti-Blemish Cream", brand: "La Roche-Posay",
    description: "Targets blemishes, marks and clogged pores. Dermatologist-tested for sensitive acne-prone skin.",
    image: img("1556228720-195a672e8a03"), price: { amount: 119, currencyCode: "AED" },
    compareAtPrice: { amount: 149, currencyCode: "AED" },
    rating: 4.7, reviewCount: 1248, badges: ["bestseller", "dermatologist"],
    concerns: ["Acne", "Blemishes"], collections: ["acne-breakouts", "moisturizers"],
  },
  {
    id: "p2", handle: "cerave-foaming-cleanser", title: "Foaming Facial Cleanser", brand: "CeraVe",
    description: "With ceramides and niacinamide for normal to oily skin.",
    image: img("1556228841-a3c527ebefe5"), price: { amount: 79, currencyCode: "AED" },
    rating: 4.8, reviewCount: 3120, badges: ["bestseller"],
    concerns: ["Oily Skin"], collections: ["cleansers"],
  },
  {
    id: "p3", handle: "bioderma-sensibio-h2o", title: "Sensibio H2O Micellar Water", brand: "Bioderma",
    description: "Iconic micellar water for sensitive skin. Removes makeup gently.",
    image: img("1620916566398-39f1143ab7be"), price: { amount: 99, currencyCode: "AED" },
    rating: 4.9, reviewCount: 5421, badges: ["bestseller"],
    concerns: ["Sensitive"], collections: ["cleansers", "sensitive-skin-redness"],
  },
  {
    id: "p4", handle: "the-ordinary-niacinamide", title: "Niacinamide 10% + Zinc 1%", brand: "The Ordinary",
    description: "High-strength vitamin and mineral blemish formula.",
    image: img("1620916297397-a4a5402a3c6c"), price: { amount: 39, currencyCode: "AED" },
    rating: 4.6, reviewCount: 8912, badges: ["bestseller", "new"],
    concerns: ["Acne", "Pores"], collections: ["serums", "acne-breakouts"],
  },
  {
    id: "p5", handle: "avene-thermal-spring-water", title: "Thermal Spring Water Spray", brand: "Avène",
    description: "Soothing mist for sensitive and irritated skin.",
    image: img("1556228453-efd6c1ff04f6"), price: { amount: 65, currencyCode: "AED" },
    rating: 4.8, reviewCount: 2104, badges: ["dermatologist"],
    concerns: ["Sensitive", "Redness"], collections: ["sensitive-skin-redness"],
  },
  {
    id: "p6", handle: "eucerin-hyaluron-serum", title: "Hyaluron-Filler Concentrate", brand: "Eucerin",
    description: "Anti-age serum with high and low molecular hyaluronic acid.",
    image: img("1570194065650-d99fb4bedf0a"), price: { amount: 215, currencyCode: "AED" },
    compareAtPrice: { amount: 259, currencyCode: "AED" },
    rating: 4.7, reviewCount: 982, badges: ["premium", "sale"],
    concerns: ["Aging", "Hydration"], collections: ["serums", "anti-aging-wrinkles"],
  },
  {
    id: "p7", handle: "lrp-anthelios-uvmune-400", title: "Anthelios UVMune 400 SPF50+", brand: "La Roche-Posay",
    description: "Invisible fluid sunscreen with very high broad-spectrum UV protection.",
    image: img("1556228578-8c89e6adf883"), price: { amount: 159, currencyCode: "AED" },
    rating: 4.9, reviewCount: 2871, badges: ["bestseller", "dermatologist", "premium"],
    concerns: ["Sun Protection"], collections: ["sunscreens", "sun-protection-spf"],
  },
  {
    id: "p8", handle: "anua-heartleaf-toner", title: "Heartleaf 77% Soothing Toner", brand: "Anua",
    description: "Korean cult-favorite toner for calming and balancing skin.",
    image: img("1571875257727-256c39da42af"), price: { amount: 89, currencyCode: "AED" },
    rating: 4.8, reviewCount: 4210, badges: ["new", "bestseller"],
    concerns: ["Sensitive", "Hydration"], collections: ["korean-beauty", "serums"],
  },
  {
    id: "p9", handle: "skin1004-centella-ampoule", title: "Madagascar Centella Ampoule", brand: "SKIN1004",
    description: "100% Centella Asiatica extract ampoule for soothing.",
    image: img("1571781926291-c477ebfd024b"), price: { amount: 115, currencyCode: "AED" },
    rating: 4.7, reviewCount: 1820, concerns: ["Sensitive", "Redness"],
    collections: ["korean-beauty", "serums", "sensitive-skin-redness"],
  },
  {
    id: "p10", handle: "medicube-zero-pore-pad", title: "Zero Pore Pad 2.0", brand: "Medicube",
    description: "Daily exfoliating toner pads for clearer-looking pores.",
    image: img("1522337360788-8b13dee7a37e"), price: { amount: 135, currencyCode: "AED" },
    compareAtPrice: { amount: 165, currencyCode: "AED" },
    rating: 4.6, reviewCount: 1432, badges: ["sale"],
    concerns: ["Pores", "Acne"], collections: ["korean-beauty", "acne-breakouts"],
  },
  {
    id: "p11", handle: "cetaphil-gentle-cleanser", title: "Gentle Skin Cleanser", brand: "Cetaphil",
    description: "Soap-free formula for all skin types, including sensitive.",
    image: img("1556228724-4d2f7c3b9b32"), price: { amount: 69, currencyCode: "AED" },
    rating: 4.8, reviewCount: 6190, badges: ["bestseller"],
    concerns: ["Sensitive"], collections: ["cleansers", "baby-care"],
  },
  {
    id: "p12", handle: "lrp-toleriane-moisturizer", title: "Toleriane Sensitive Moisturizer", brand: "La Roche-Posay",
    description: "Prebiotic-enriched daily moisturizer for sensitive skin.",
    image: img("1570194065593-d9bbf6f0bd6f"), price: { amount: 129, currencyCode: "AED" },
    rating: 4.7, reviewCount: 1503, badges: ["dermatologist"],
    concerns: ["Sensitive", "Hydration"], collections: ["moisturizers", "sensitive-skin-redness"],
  },
];

export const SKIN_CONCERNS = [
  { handle: "acne", title: "Acne", icon: "✦" },
  { handle: "pigmentation", title: "Pigmentation", icon: "◐" },
  { handle: "anti-aging", title: "Anti-Aging", icon: "◇" },
  { handle: "hydration", title: "Hydration", icon: "❋" },
  { handle: "sensitive", title: "Sensitive", icon: "❀" },
  { handle: "sun-protection", title: "Sun Protection", icon: "☀" },
];

export const getProductByHandle = (h: string) => PRODUCTS.find((p) => p.handle === h);
export const getCollectionByHandle = (h: string) => COLLECTIONS.find((c) => c.handle === h);
export const getProductsByCollection = (h: string) => PRODUCTS.filter((p) => p.collections.includes(h));
