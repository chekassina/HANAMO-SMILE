import { Brand, Product, TrainingModule, Testimonial, FAQItem, GalleryItem, OrderTracking } from '../types';

export const COMPANY_INFO = {
  name: 'Hanamo Smile Enterprise Ltd.',
  shortName: 'Hanamo Smile',
  slogan: 'We Are Here For You To Smile',
  foundedYear: 2014,
  ceo: 'Mr. Moshe Haruna',
  ceoTitle: 'CEO, Founder & Business Coach',
  location: 'Mutundwe after Kampala University, Kampala Uganda',
  detailedAddress: 'Mutundwe Kisigula Along Bunamwaya Road, Near Kisigula Mosque, Kampala, Uganda',
  phones: ['+256 782 106 877', '+256 708 834 406'],
  email: 'hsmileuganda18@gmail.com',
  hours: 'Monday – Saturday: 8:00 AM – 6:00 PM',
  whatsappUrl: 'https://wa.me/256782106877?text=Hello%20Hanamo%20Smile%20Enterprise,%20I%20would%20like%20to%20inquire%20about%20your%20soaps%20and%20training.',
};

export const BRANDS: Brand[] = [
  { name: 'HANA STAR', highlight: true, tagline: 'Our Flagship Premium Brand' },
  { name: 'TESOAP', tagline: 'Heavy Duty Laundry Soap' },
  { name: 'FAMILY STAR', tagline: 'Gentle Household Care' },
  { name: 'WHITE MALIZA', highlight: true, tagline: 'Deep Stain Extinguisher' },
  { name: 'WHITE CLEAN', tagline: 'Pure Crystal Washing' },
  { name: 'ABBA STAR', tagline: 'Commercial Grade Bar Soap' },
  { name: 'JAXTA SOAP', tagline: 'Fast Lather Formula' },
  { name: 'SALAM STAR', tagline: 'Fresh Floral Fragrance' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'hana-star-bar',
    name: 'Hana Star Bar Soap (Flagship)',
    brand: 'Hana Star',
    category: 'bar_soap',
    description: 'Our premier multipurpose bar soap engineered with long-lasting fragrance, rich lather, and powerful stain removal while remaining completely gentle on hands.',
    features: ['Strong grease & stain removal', 'Long-lasting floral fragrance', 'Enriched glycerine formula gentle on skin', 'Slow-dissolving high density bar'],
    bestFor: ['Home daily laundry', 'Commercial laundry businesses', 'Kitchen utensils & hard surfaces'],
    price: 'UGX 3,500 / Bar',
    bulkPrice: 'UGX 65,000 / Box of 20 Bars',
    image: '/images/las4.jpeg',
    isBestSeller: true,
  },
  {
    id: 'white-maliza-bar',
    name: 'White Maliza Bar Soap',
    brand: 'White Maliza',
    category: 'bar_soap',
    description: 'Specialized stain extractor bar soap formulated specifically for white school uniforms, medical scrubs, and stubborn oil marks.',
    features: ['Optical brighteners for crisp whites', 'Deep enzymatic stain lifting action', 'No harsh bleach residues', 'Fresh citrus scent'],
    bestFor: ['White linens & uniforms', 'Heavy duty collar & cuff scrubbing', 'Hotels & hospitals'],
    price: 'UGX 3,800 / Bar',
    bulkPrice: 'UGX 70,000 / Box of 20 Bars',
    image: '/images/las12.jpeg',
    isBestSeller: true,
  },
  {
    id: 'family-star-soap',
    name: 'Family Star Multipurpose Bar',
    brand: 'Family Star',
    category: 'bar_soap',
    description: 'Economical family-sized bar soap designed for daily general cleaning, bathing, and washing dishes with soothing herbal extracts.',
    features: ['Large economical cut', 'Skin-friendly pH balance', 'Quick lathering in hard water', 'Zero animal fat fillers'],
    bestFor: ['Large households', 'Everyday bathing & handwashing', 'Rural & urban water compatibility'],
    price: 'UGX 3,200 / Bar',
    bulkPrice: 'UGX 60,000 / Box of 20 Bars',
    image: '/images/las12.jpeg',
  },
  {
    id: 'tesoap-laundry',
    name: 'Tesoap Commercial Bar',
    brand: 'Tesoap',
    category: 'bar_soap',
    description: 'High-durability laundry soap built for commercial laundromats and institutions requiring maximum wash cycles per bar.',
    features: ['Extra firm triple-milled hardness', 'High active detergent matter', 'Anti-soggy water resistant structure', 'Neutral clean scent'],
    bestFor: ['Boarding schools', 'Commercial laundry contractors', 'Car wash mitt cleaning'],
    price: 'UGX 3,400 / Bar',
    bulkPrice: 'UGX 64,000 / Box of 20 Bars',
    image: '/images/las4.jpeg',
  },
  {
    id: 'abba-star-soap',
    name: 'ABBA Star Gold Bar',
    brand: 'ABBA Star',
    category: 'bar_soap',
    description: 'Premium golden bar soap infused with natural palm oils providing superior lather and fabric conditioning properties.',
    features: ['Rich golden lather', 'Conditioning natural oils', 'Color-protecting cleansing', 'Classic lavender fragrance'],
    bestFor: ['Delicate garments', 'Silk & cotton fabrics', 'Luxury home care'],
    price: 'UGX 3,600 / Bar',
    bulkPrice: 'UGX 68,000 / Box of 20 Bars',
    image: '/images/las15.jpeg',
  },
  {
    id: 'hana-star-liquid-det',
    name: 'Hana Star Liquid Detergent (5L)',
    brand: 'Hana Star',
    category: 'detergent',
    description: 'Concentrated liquid laundry detergent engineered for washing machines and hand washing with instant water dispersion.',
    features: ['Ultra concentrated 3X formula', 'Zero powder residue on dark clothes', 'Color guard polymer technology', 'Long lasting ocean freshness'],
    bestFor: ['Washing machines (Top & Front load)', 'Delicate dark clothes', 'Modern apartments'],
    price: 'UGX 28,000 / 5 Jerrycan',
    bulkPrice: 'UGX 250,000 / Carton of 10 Jerrycans',
    image: '/images/las6.jpeg',
    isBestSeller: true,
  },
  {
    id: 'white-clean-powder',
    name: 'White Clean Active Powder (10kg)',
    brand: 'White Clean',
    category: 'detergent',
    description: 'Active oxygen detergent powder with blue speckles for high-volume institutional washing and stain soaking.',
    features: ['Active oxygen stain lifters', 'Biodegradable surfactants', 'Softens hard Kampala tap water', 'Economic 10kg bucket'],
    bestFor: ['Restaurants & catering', 'Hospital laundry', 'Bulk domestic soaking'],
    price: 'UGX 55,000 / 10kg Bucket',
    bulkPrice: 'UGX 500,000 / 10 Buckets',
    image: '/images/las7.jpeg',
  },
  {
    id: 'jaxta-multipurpose-cleaner',
    name: 'Jaxta Surface & Tile Disinfectant',
    brand: 'Jaxta Soap',
    category: 'home_care',
    description: 'Hospital-grade pine disinfectant and surface cleaner for sparkling floors, bathrooms, and kitchen countertops.',
    features: ['Kills 99.9% of germs and bacteria', 'Natural pine oil deodorizer', 'Leaves streak-free shine', 'Safe on ceramic, terrazzo & wood'],
    bestFor: ['Offices & clinics', 'Home bathrooms & kitchens', 'Mosques & churches'],
    price: 'UGX 18,000 / 5L',
    bulkPrice: 'UGX 160,000 / 10 Jerrycans',
    image: '/images/las8.jpeg',
  },
  {
    id: 'soap-making-raw-kit',
    name: 'Certified Soap Maker Starter Material Kit',
    brand: 'Hanamo Sourcing',
    category: 'raw_material',
    description: 'Curated raw material package sourced directly by Hanamo Smile for our training graduates and startup manufacturers. Includes caustic soda, palm kernel oil, fragrance, silicate, and colorants.',
    features: ['Pre-measured certified ingredients', 'Yields exactly 100 premium bar soaps', 'Includes step-by-step mixing manual', 'Quality checked by Moshe Haruna'],
    bestFor: ['Training graduates launching brands', 'Home cottage industries', 'Vocational school demonstration'],
    price: 'UGX 185,000 / Complete Batch Kit',
    bulkPrice: 'UGX 1,750,000 / 10 Kits',
    image: '/images/las9.jpeg',
  }
];

export const TRAINING_MODULES: TrainingModule[] = [
  {
    title: 'Module 1: Chemical Sourcing & Formulation',
    duration: 'Week 1 (Practical Lab)',
    topics: ['Understanding Caustic Soda, Silicates, & Palm Kernel Oils', 'Calculating exact saponification values & water ratios', 'Quality testing raw materials to avoid fake market chemicals', 'Safety protocols in soap manufacturing'],
    iconName: 'Beaker',
  },
  {
    title: 'Module 2: Bar & Bathing Soap Production',
    duration: 'Week 2 (Hands-on Factory Floor)',
    topics: ['Cold process vs semi-boiled bar soap manufacturing', 'Infusing long-lasting fragrances and vibrant colorants', 'Pouring, curing time management, and cutting precision', 'Troubleshooting soft, cracking, or white-spotted bars'],
    iconName: 'Factory',
  },
  {
    title: 'Module 3: Liquid Detergents & Home Care',
    duration: 'Week 3 (Multipurpose Formulations)',
    topics: ['Formulating high-foam dishwashing liquids and laundry gels', 'Manufacturing pine disinfectants and glass cleaners', 'pH balancing for hand safety and shelf-life preservation', 'Eco-friendly biodegradable packaging options'],
    iconName: 'Sparkles',
  },
  {
    title: 'Module 4: Branding, Packaging & UNBS Compliance',
    duration: 'Week 4 (Business & Design)',
    topics: ['Creating standout brand names (Like Hana Star & White Maliza)', 'Sourcing cost-effective custom printed wrappers and boxes', 'Navigating Uganda National Bureau of Standards (UNBS) certification', 'Barcode registration and commercial labeling laws'],
    iconName: 'Tag',
  },
  {
    title: 'Module 5: Marketing Strategy & Scaling',
    duration: 'Week 5 (Coaching by Moshe Haruna)',
    topics: ['Pricing models for wholesale distributors vs retail supermarkets', 'Building a loyal sales agent network across Kampala & upcountry', 'Digital marketing & WhatsApp catalog lead conversion', 'Securing micro-finance and managing factory cash flow'],
    iconName: 'TrendingUp',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Where is Hanamo Smile Enterprise factory located?',
    answer: 'We are situated in Mutundwe Kisigula along Bunamwaya Road, just after Kampala University and near the Kisigula Mosque in Kampala, Uganda.',
    category: 'General',
  },
  {
    question: 'Can Hanamo Smile manufacture custom soap brands for my business?',
    answer: 'Yes! We specialize in contract manufacturing and private labeling. We have helped create over 10 successful brands on the Ugandan market including Tesoap, Family Star, and White Maliza. We handle formulation, packaging sourcing, and production.',
    category: 'Manufacturing',
  },
  {
    question: 'Do I need a background in chemistry to join the Soap Making Training?',
    answer: 'Not at all. Our Business Coach Mr. Moshe Haruna designed the curriculum specifically for beginners, students, entrepreneurs, and retirees. We teach step-by-step practical methods in plain English and Luganda.',
    category: 'Training',
  },
  {
    question: 'How does bulk delivery work around Kampala?',
    answer: 'We dispatch bulk orders (from 5 boxes/cartons upwards) directly from our Mutundwe factory. Delivery within Kampala business centers is fast (same-day or next-day). We also deliver to transport terminals for upcountry clients.',
    category: 'Delivery',
  },
  {
    question: 'How can I verify the quality of raw materials before buying?',
    answer: 'One of our core consultancy services is Right Material Sourcing. We connect our trainees and partners directly to verified, unadulterated chemical importers in Kampala so your soap never fails during curing.',
    category: 'Sourcing',
  },
  {
    question: 'What certificate do I receive after training?',
    answer: 'You receive an official Certificate of Competence in Industrial Soap Manufacturing issued by Hanamo Smile Enterprise Ltd., backed by lifetime mentorship from our team.',
    category: 'Training',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Nalubega',
    role: 'Founder & Managing Director',
    company: 'CleanStar Laundry Services',
    location: 'Ntinda, Kampala',
    content: 'Switching to Hana Star and White Maliza bar soaps reduced our laundry chemical costs by 25% while giving our clients whiter school uniforms. Mr. Moshe Haruna also gave us incredible advice on packaging.',
  },
  {
    id: 't2',
    name: 'David Otim',
    role: 'Training Graduate & Brand Owner',
    company: 'Teso Sparkle Soap',
    location: 'Soroti City',
    content: 'I traveled from Soroti to Mutundwe for the 5-week practical training in 2023. Today, my brand employs 6 young people in Eastern Uganda. The lifetime support from Hanamo Smile is 100% real.',
  },
  {
    id: 't3',
    name: 'Hajji Abubakar K.',
    role: 'Wholesale Distributor',
    company: 'Kisekka Market Traders',
    location: 'Downtown Kampala',
    content: 'Boxes of Hana Star and ABBA Star fly off my shelves every single week. Customers love the firm texture that does not melt quickly in water. Reliable delivery directly from Mutundwe factory!',
  },
];

export const SAMPLE_LIVE_ORDERS: OrderTracking[] = [
  {
    orderId: 'HS-8842',
    customerName: 'Kampala Supermarket Union',
    productName: 'Hana Star Flagship Bar Soaps (50 Cartons)',
    quantity: '1,000 Bars',
    status: 'Dispatched & Out for Delivery',
    estimatedDelivery: 'Today, 3:30 PM',
    currentStep: 5,
    lastUpdated: '10 mins ago',
    location: 'En route via Nalukolongo - Kibuye Road',
  },
  {
    orderId: 'HS-8845',
    customerName: 'Grace K. (Private Label)',
    productName: 'White Maliza Custom Branded Batch',
    quantity: '400 Bars',
    status: 'In Manufacturing & Curing',
    estimatedDelivery: 'Tomorrow morning',
    currentStep: 3,
    lastUpdated: '1 hour ago',
    location: 'Mutundwe Curing Bay 2',
  },
  {
    orderId: 'HS-8850',
    customerName: 'St. Marys Boarding School',
    productName: 'Tesoap Commercial Bar Soap',
    quantity: '2,500 Bars',
    status: 'Quality Check Passed',
    estimatedDelivery: 'Thursday, 10:00 AM',
    currentStep: 4,
    lastUpdated: '25 mins ago',
    location: 'Mutundwe Quality Lab',
  },
];

// Gallery items using las1.jpeg to las24.jpeg (cycling through available images)
export const GALLERY_ITEMS: GalleryItem[] = Array.from({ length: 24 }, (_, index) => {
  const num = index + 1;
  const categories: GalleryItem['category'][] = ['product', 'production', 'staff', 'delivery', 'training'];
  const cat = categories[index % categories.length];

  const titles = [
    `Hana Star Bar Production Line #${num}`,
    `Mosque Road Mutundwe Factory View #${num}`,
    `Master Soap Cutter Inspection #${num}`,
    `Bulk Carton Packaging & Branding #${num}`,
    `Trainees Mixing Saponification Batch #${num}`,
    `White Maliza Deep Stain Formula #${num}`,
    `Delivery Truck Loading for Downtown #${num}`,
    `Moshe Haruna Coaching Session #${num}`,
  ];

  return {
    id: num,
    title: titles[index % titles.length],
    category: cat,
    src: `/images/las${num}.jpeg`,
    caption: `Hanamo Smile Enterprise operational highlight in Kampala. Quality bar soap manufacturing & mentorship since 2014.`,
  };
});