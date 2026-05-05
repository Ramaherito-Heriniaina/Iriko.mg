import { and, eq } from 'drizzle-orm';

import { db } from '@/db';
import { fertilizers, productFertilizers } from '@/db/schema';

import {
  CreateFertilizerInput,
  FertilizerResponse,
  NewFertilizer,
  NewProductFertilizer,
  UpdateFertilizerInput,
} from './fertilizers.types';

export const fertilizerService = {
  findAll: async (): Promise<FertilizerResponse[]> => {
    try {
      return await db.query.fertilizers.findMany();
    } catch (error) {
      console.error('Error finding all fertilizers', error);
      throw error;
    }
  },

  findAvailable: async (): Promise<FertilizerResponse[]> => {
    try {
      return await db.query.fertilizers.findMany({
        where: eq(fertilizers.isAvailable, true),
      });
    } catch (error) {
      console.error('Error finding available fertilizers', error);
      throw error;
    }
  },

  findById: async (id: string): Promise<FertilizerResponse | null> => {
    try {
      const fertilizer = await db.query.fertilizers.findFirst({
        where: and(eq(fertilizers.id, id), eq(fertilizers.isAvailable, true)),
      });
      return fertilizer ?? null;
    } catch (error) {
      console.error('Error finding fertilizer by id', error);
      throw error;
    }
  },

  findByIdAdmin: async (id: string): Promise<FertilizerResponse | null> => {
    try {
      const fertilizer = await db.query.fertilizers.findFirst({
        where: eq(fertilizers.id, id),
      });
      return fertilizer ?? null;
    } catch (error) {
      console.error('Error finding fertilizer by id admin', error);
      throw error;
    }
  },

  create: async (data: CreateFertilizerInput): Promise<FertilizerResponse> => {
    try {
      const existing = await db.query.fertilizers.findFirst({
        where: eq(fertilizers.name, data.name),
      });

      if (existing) throw { code: '23505' };

      const newFertilizer: NewFertilizer = {
        name: data.name,
        description: data.description,
        isRecommended: data.isRecommended,
        isAvailable: data.isAvailable,
      };

      const [created] = await db.insert(fertilizers).values(newFertilizer).returning();
      if (!created) throw new Error('Fertilizer cannot be created');
      return created;
    } catch (error) {
      console.error('Error creating fertilizer', error);
      throw error;
    }
  },

  update: async (id: string, data: UpdateFertilizerInput): Promise<FertilizerResponse | null> => {
    try {
      const [updated] = await db
        .update(fertilizers)
        .set({ ...data, updatedAt: new Date() })
        .where(eq(fertilizers.id, id))
        .returning();
      return updated ?? null;
    } catch (error) {
      console.error('Error updating fertilizer', error);
      throw error;
    }
  },

  delete: async (id: string): Promise<boolean> => {
    try {
      const [deleted] = await db
        .update(fertilizers)
        .set({ isAvailable: false, updatedAt: new Date() })
        .where(eq(fertilizers.id, id))
        .returning();
      return !!deleted;
    } catch (error) {
      console.error('Error deleting fertilizer', error);
      throw error;
    }
  },

  // Product - Fertilizer relations
  addToProduct: async (productId: string, fertilizerId: string): Promise<void> => {
    try {
      const newRelation: NewProductFertilizer = { productId, fertilizerId };
      await db.insert(productFertilizers).values(newRelation);
    } catch (error) {
      console.error('Error adding fertilizer to product', error);
      throw error;
    }
  },

  removeFromProduct: async (productId: string, fertilizerId: string): Promise<boolean> => {
    try {
      const [deleted] = await db
        .delete(productFertilizers)
        .where(
          and(
            eq(productFertilizers.productId, productId),
            eq(productFertilizers.fertilizerId, fertilizerId)
          )
        )
        .returning();
      return !!deleted;
    } catch (error) {
      console.error('Error removing fertilizer from product', error);
      throw error;
    }
  },

  findByProduct: async (productId: string): Promise<FertilizerResponse[]> => {
    try {
      const relations = await db.query.productFertilizers.findMany({
        where: eq(productFertilizers.productId, productId),
        with: { fertilizer: true },
      });
      return relations.map((r) => r.fertilizer);
    } catch (error) {
      console.error('Error finding fertilizers by product', error);
      throw error;
    }
  },
};