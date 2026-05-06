import z from 'zod';

import { fertilizers, productFertilizers } from '@/db/schema';

import { createFertilizerSchema, updateFertilizerSchema } from './fertilizers.validation';

// Types for database
export type Fertilizer = typeof fertilizers.$inferSelect;
export type NewFertilizer = typeof fertilizers.$inferInsert;
export type ProductFertilizer = typeof productFertilizers.$inferSelect;
export type NewProductFertilizer = typeof productFertilizers.$inferInsert;

// Types for response
export type FertilizerResponse = Fertilizer;

// Types for input
export type CreateFertilizerInput = z.infer<typeof createFertilizerSchema>;
export type UpdateFertilizerInput = z.infer<typeof updateFertilizerSchema>;