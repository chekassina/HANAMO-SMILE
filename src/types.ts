export type PageId = 
  | 'home' 
  | 'about' 
  | 'products' 
  | 'training' 
  | 'delivery' 
  | 'gallery' 
  | 'partners' 
  | 'contact';

export interface Brand {
  name: string;
  highlight?: boolean;
  tagline?: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'bar_soap' | 'detergent' | 'home_care' | 'raw_material';
  description: string;
  features: string[];
  bestFor: string[];
  price?: string;
  bulkPrice?: string;
  image: string;
  isBestSeller?: boolean;
}

export interface TrainingModule {
  title: string;
  duration: string;
  topics: string[];
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  content: string;
  avatar?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: 'product' | 'production' | 'staff' | 'delivery' | 'training';
  src: string;
  caption: string;
}

export interface OrderTracking {
  orderId: string;
  customerName: string;
  productName: string;
  quantity: string;
  status: 'Order Received' | 'Raw Material Sourced' | 'In Manufacturing & Curing' | 'Quality Check Passed' | 'Dispatched & Out for Delivery' | 'Delivered';
  estimatedDelivery: string;
  currentStep: number; // 1 to 6
  lastUpdated: string;
  location: string;
}
