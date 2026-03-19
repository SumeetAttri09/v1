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
    "XL"
  ],
  "inStock": true,
  "featured": false,
  "badge": "SALE"
},
{
  "id": "1773905554605-degghj6",
  "name": "tshirt",
  "description": "gym tshirt",
  "price": 300,
  "originalPrice": 500,
  "image": "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/e0502cd7-70ec-4c4c-b687-d1d8e6c4c3e9.jpeg",
  "images": [
    "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/e0502cd7-70ec-4c4c-b687-d1d8e6c4c3e9.jpeg"
  ],
  "category": "T-Shirts",
  "sizes": [
    "S",
    "M",
    "L",
    "XL"
  ],
  "inStock": true,
  "featured": false,
  "badge": "SALE"
},
{
  "id": "1773905612020-gy8t7l7",
  "name": "tshirt",
  "description": "gym tshirt",
  "price": 300,
  "originalPrice": 500,
  "image": "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/045503c6-2f6e-421f-862a-9d1bd1679aca.jpeg",
  "images": [
    "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/045503c6-2f6e-421f-862a-9d1bd1679aca.jpeg"
  ],
  "category": "T-Shirts",
  "sizes": [
    "S",
    "M",
    "L",
    "XL"
  ],
  "inStock": true,
  "featured": false,
  "badge": "SALE"
},
{
  "id": "1773905638643-gfn9i52",
  "name": "tshirt",
  "description": "gym tshirt",
  "price": 300,
  "originalPrice": 500,
  "image": "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/d9f42717-c7ba-4ca8-acce-bbc93d007f12.jpeg",
  "images": [
    "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/d9f42717-c7ba-4ca8-acce-bbc93d007f12.jpeg"
  ],
  "category": "T-Shirts",
  "sizes": [
    "S",
    "M",
    "L",
    "XL"
  ],
  "inStock": true,
  "featured": false,
  "badge": "SALE"
},
{
  "id": "1773905704640-qc3xfdr",
  "name": "tshirt",
  "description": "gym tshirt",
  "price": 300,
  "originalPrice": 500,
  "image": "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/398cdb44-0fd0-458a-9bb2-044741ed0b54.jpeg",
  "images": [
    "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/398cdb44-0fd0-458a-9bb2-044741ed0b54.jpeg"
  ],
  "category": "T-Shirts",
  "sizes": [
    "S",
    "M",
    "L",
    "XL"
  ],
  "inStock": true,
  "featured": false,
  "badge": "SALE"
},
{
  "id": "1773905734638-fopct92",
  "name": "tshirt",
  "description": "gym tshirt",
  "price": 300,
  "originalPrice": 500,
  "image": "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/d08858fd-c8a1-4f07-be4c-98e7dac91284.jpeg",
  "images": [
    "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/d08858fd-c8a1-4f07-be4c-98e7dac91284.jpeg"
  ],
  "category": "T-Shirts",
  "sizes": [
    "S",
    "M",
    "L",
    "XL"
  ],
  "inStock": true,
  "featured": false,
  "badge": "SALE"
},
{
  "id": "1773905760205-qgqxgai",
  "name": "tshirt",
  "description": "gym tshirt",
  "price": 300,
  "originalPrice": 500,
  "image": "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/95e57f60-d26d-446c-8b17-a9d2b0f7c23f.jpeg",
  "images": [
    "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/95e57f60-d26d-446c-8b17-a9d2b0f7c23f.jpeg"
  ],
  "category": "T-Shirts",
  "sizes": [
    "S",
    "M",
    "L",
    "XL"
  ],
  "inStock": true,
  "featured": false,
  "badge": "SALE"
}
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
