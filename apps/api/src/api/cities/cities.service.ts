import { and, eq } from 'drizzle-orm';

import { db } from '@/db';
import { cities } from '@/db/schema';

import { CityResponse, CreateCityInput, NewCity, UpdateCityInput } from './cities.types';

export const cityService = {
    findAll: async (): Promise<CityResponse[]> => {
        try {
            return await db.query.cities.findMany();
        } catch (error) {
            console.error('Error finding all cities', error);
            throw error;
        }
    },

    findAvailable: async (): Promise<CityResponse[]> => {
        try {
            return await db.query.cities.findMany({
                where: eq(cities.isAvailable, true),
            });
        } catch (error) {
            console.error('Error finding available cities', error);
            throw error;
        }
    },

    findById: async (id: string): Promise<CityResponse | null> => {
        try {
            const city = await db.query.cities.findFirst({
                where: and(eq(cities.id, id), eq(cities.isAvailable, true)),
            });
            return city ?? null;
        } catch (error) {
            console.error('Error finding city by id', error);
            throw error;
        }
    },

    findByIdAdmin: async (id: string): Promise<CityResponse | null> => {
        try {
            const city = await db.query.cities.findFirst({
                where: eq(cities.id, id),
            });
            return city ?? null;
        } catch (error) {
            console.error('Error finding city by id admin', error);
            throw error;
        }
    },

    create: async (data: CreateCityInput): Promise<CityResponse> => {
        try {
            const newCity: NewCity = {
                name: data.name,
                region: data.region,
                additionalCost: data.additionalCost,
                estimatedDeliveryDays: data.estimatedDeliveryDays,
                isAvailable: data.isAvailable,
            };

            const [created] = await db.insert(cities).values(newCity).returning();
            if (!created) throw new Error('City cannot be created');
            return created;
        } catch (error) {
            console.error('Error creating city', error);
            throw error;
        }
    },

    update: async (id: string, data: UpdateCityInput): Promise<CityResponse | null> => {
        try {
            const [updated] = await db
                .update(cities)
                .set({ ...data, updatedAt: new Date() })
                .where(eq(cities.id, id))
                .returning();
            return updated ?? null;
        } catch (error) {
            console.error('Error updating city', error);
            throw error;
        }
    },

    delete: async (id: string): Promise<boolean> => {
        try {
            const [deleted] = await db
                .update(cities)
                .set({ isAvailable: false, updatedAt: new Date() })
                .where(eq(cities.id, id))
                .returning();
            return !!deleted;
        } catch (error) {
            console.error('Error deleting city', error);
            throw error;
        }
    },
};