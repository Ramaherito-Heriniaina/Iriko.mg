export const ORDER_OPTIONS = {
  engrais: [
    { name: 'Compost', price: 500 },
    { name: 'Engrais organique (Porcins)', price: 1200 },
    { name: 'Soupe poulet', price: 1500 }
  ],
  lieux: [
    { name: 'Ankazobe', price: 4000 },
    { name: 'Fihaonana', price: 4500 },
    { name: 'Lazaina', price: 5000 }
  ],
  minQty: 5
};

export type LieuName = 'Ankazobe' | 'Fihaonana' | 'Lazaina';