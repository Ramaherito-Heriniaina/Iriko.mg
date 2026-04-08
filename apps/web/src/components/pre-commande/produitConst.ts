export interface Product {
   id: string;
   nameKey: string;     
   categoryKey: string; 
   pricePerKg: number;
   image: string;
   name?: string;    
   category?: string;
}

const RAW_PRODUCTS: Omit<Product, 'id'>[] = [
   // --- GRAINS ---
   { nameKey: 'haricot_vert', pricePerKg: 4000, image: '/images/haricot-vert.jpg', categoryKey: 'grains' },
   { nameKey: 'haricot_rouge', pricePerKg: 4500, image: '/images/haricot-rouge.jpg', categoryKey: 'grains' },
   { nameKey: 'haricot_blanc', pricePerKg: 4200, image: '/images/haricot-blanc.jpg', categoryKey: 'grains' },
   { nameKey: 'kabaro', pricePerKg: 5500, image: '/images/kabaro.jpg', categoryKey: 'grains' },
   { nameKey: 'katsaka', pricePerKg: 2500, image: '/images/katsaka.jpg', categoryKey: 'grains' },
   { nameKey: 'voanjobory', pricePerKg: 6000, image: '/images/voanjobory.jpg', categoryKey: 'grains' },

   // --- BRÈDES ---
   { nameKey: 'anandrano', pricePerKg: 1500, image: '/images/anandrano.jpg', categoryKey: 'bredes' },
   { nameKey: 'anamamy', pricePerKg: 1200, image: '/images/anamamy.jpg', categoryKey: 'bredes' },
   { nameKey: 'anatsonga', pricePerKg: 1300, image: '/images/anatsonga.jpg', categoryKey: 'bredes' },

   // --- LÉGUMES ---
   { nameKey: 'tomate', pricePerKg: 3000, image: '/images/tomate.jpg', categoryKey: 'legumes' },
   { nameKey: 'aubergine', pricePerKg: 2500, image: '/images/aubergine.jpg', categoryKey: 'legumes' },
   { nameKey: 'poivron', pricePerKg: 3500, image: '/images/poivron.jpg', categoryKey: 'legumes' },
   { nameKey: 'concombre', pricePerKg: 2000, image: '/images/concombre.jpg', categoryKey: 'legumes' },

   // --- TUBERCULES ---
   { nameKey: 'carotte', pricePerKg: 3500, image: '/images/carotte.jpg', categoryKey: 'tubercules' },
   { nameKey: 'pdt', pricePerKg: 2800, image: '/images/pdt.jpg', categoryKey: 'tubercules' },
   { nameKey: 'patate_douce', pricePerKg: 3200, image: '/images/patate-douce.jpg', categoryKey: 'tubercules' }
];

export const LEMA_PRODUCTS: Product[] = RAW_PRODUCTS.map((product, index) => ({
    ...product,
    id: (index + 1).toString()
}));