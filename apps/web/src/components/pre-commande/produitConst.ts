export interface Product {
   id: string;
   name: string;
   pricePerKg: number;
   image: string;
   category: 'Grains' | 'Brèdes' | 'Légumes' | 'Tubercules';
}

const RAW_PRODUCTS: Omit<Product, 'id'>[] = [
   // --- GRAINS ---
   { name: 'Haricot Vert', pricePerKg: 4000, image: '/images/haricot-vert.jpg', category: 'Grains' },
   { name: 'Haricot Rouge', pricePerKg: 4500, image: '/images/haricot-rouge.jpg', category: 'Grains' },
   { name: 'Haricot Blanc', pricePerKg: 4200, image: '/images/haricot-blanc.jpg', category: 'Grains' },
   { name: 'Kabaro', pricePerKg: 5500, image: '/images/kabaro.jpg', category: 'Grains' },
   { name: 'Katsaka (Maïs)', pricePerKg: 2500, image: '/images/katsaka.jpg', category: 'Grains' },
   { name: 'Voanjobory', pricePerKg: 6000, image: '/images/voanjobory.jpg', category: 'Grains' },

   // --- BRÈDES ---
   { name: 'Anan-drano', pricePerKg: 1500, image: '/images/anandrano.jpg', category: 'Brèdes' },
   { name: 'Anamamy', pricePerKg: 1200, image: '/images/anamamy.jpg', category: 'Brèdes' },
   { name: 'Anatsonga', pricePerKg: 1300, image: '/images/anatsonga.jpg', category: 'Brèdes' },

   // --- LÉGUMES FRUITS ---
   { name: 'Tomate', pricePerKg: 3000, image: '/images/tomate.jpg', category: 'Légumes' },
   { name: 'Aubergine', pricePerKg: 2500, image: '/images/aubergine.jpg', category: 'Légumes' },
   { name: 'Poivron', pricePerKg: 3500, image: '/images/poivron.jpg', category: 'Légumes' },
   { name: 'Concombre', pricePerKg: 2000, image: '/images/concombre.jpg', category: 'Légumes' },

   // --- TUBERCULES ---
   { name: 'Carotte', pricePerKg: 3500, image: '/images/carotte.jpg', category: 'Tubercules' },
   { name: 'Pomme de terre', pricePerKg: 2800, image: '/images/pdt.jpg', category: 'Tubercules' },
   { name: 'Patate douce', pricePerKg: 3200, image: '/images/patate-douce.jpg', category: 'Tubercules' }
];


export const LEMA_PRODUCTS: Product[] = RAW_PRODUCTS.map((product, index) => ({
    ...product,
    id: (index + 1).toString()
}));