export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  sizes: string[];
  inStock: boolean;
  featured?: boolean;
  badge?: string;
}

export const products: Product[] = [
   
  {
  "id": "1773901952392-7rvoxjk",
  "name": "Nauwar",
  "description": "children saree",
  "price": 800,
  "originalPrice": 1500,
  "image": "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/5bd3e225-eaf1-485e-ad32-2910eeb633a3.jpeg",
  "images": [
    "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/5bd3e225-eaf1-485e-ad32-2910eeb633a3.jpeg"
  ],
  "category": "Sarees",
  "sizes": [
    "XS",
    "S",
    "M"
  ],
  "inStock": true,
  "featured": false,
  "badge": "TRENDING"
},
  {
  "id": "1773904641339-wrpz5xb",
  "name": "tshirt",
  "description": "gym tshirt",
  "price": 300,
  "originalPrice": 500,
  "image": "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/27fe83bd-1eb0-4724-b066-9e702f707b38.jpeg",
  "images": [
    "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/27fe83bd-1eb0-4724-b066-9e702f707b38.jpeg"
  ],
  "category": "T-Shirts",
  "sizes": [
    "S",
    "M",
    "L",
    "XL
  ],
  "inStock": true,
  "featured": false,
  "badge": "SALE"
},
];

export const categories = [
  'All',
  'Dresses',
  'Shirts',
  'T-Shirts',
  'Outerwear',
  'Accessories',
  'Bottoms',
];
