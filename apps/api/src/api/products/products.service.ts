import { eq, and} from 'drizzle-orm';

import { db } from '@/db';
import { products } from '@/db/schema';

import { CreateProductInput, NewProduct, ProductResponse, UpdateProductInput } from './products.types';

export const productService = {

  findAll: async (): Promise<ProductResponse[]> => {

    try {

      return await db.query.products.findMany();

    } catch (error) {

      console.error('Error finding all products', error);
      throw error;

    }
  },

  findById: async (id: string): Promise<ProductResponse | null> => {
    
    try {
    
      const product = await db.query.products.findFirst({
        where: and(eq(products.id, id), eq(products.isAvailable, true)),
    
      });
    
      return product ?? null;
    
    } catch (error) {
    
      console.error('Error finding product by id', error);
      throw error;
    
    }
  },

  findByIdAdmin: async (id: string): Promise<ProductResponse | null> => {
    
    try {
    
      const product = await db.query.products.findFirst({
        where: eq(products.id, id),
      });
    
      return product ?? null;
    
    } catch (error) {
    
      console.error('Error finding product by id admin', error);
      throw error;
    
    }
  },


  findAvailable: async (): Promise<ProductResponse[]> => {

    try {

      return await db.query.products.findMany({
        where: eq(products.isAvailable, true),
      });

    } catch (error) {

      console.error('Error finding available products', error);
      throw error;

    }
  },

  create: async (data: CreateProductInput): Promise<ProductResponse> => {
    try {

      const newProduct: NewProduct = {
        name: data.name,
        description: data.description,
        price: data.price,
        unit: data.unit,
        category: data.category,
        minOrderQuantity: data.minOrderQuantity,
        maxOrderQuantity: data.maxOrderQuantity,
        productionPeriodDays: data.productionPeriodDays,
        imageUrl: data.imageUrl,
        isAvailable: data.isAvailable,
      };

      const [created] = await db.insert(products).values(newProduct).returning();

      if (!created) throw new Error('Product cannot be created');

      return created;

    } catch (error) {

      console.error('Error creating product', error);
      throw error;

    }
  },

  update: async (id: string, data: UpdateProductInput): Promise<ProductResponse | null> => {

    try {

      const [updated] = await db
        .update(products)
        .set({ ...data, updatedAt: new Date() })
        .where(eq(products.id, id))
        .returning();

      return updated ?? null;

    } catch (error) {

      console.error('Error updating product', error);
      throw error;
    }
  },

  delete: async (id: string): Promise<boolean> => {

    try {

      const [deleted] = await db
        .update(products)
        .set({ isAvailable: false, updatedAt: new Date() })
        .where(eq(products.id, id))
        .returning();

      return !!deleted;

    } catch (error) {

      console.error('Error deleting product', error);
      throw error;

    }
  },
};