import z from 'zod';

import { cities } from '@/db/schema';

import { createCitySchema, updateCitySchema } from './cities.validation';

// Types for database
export type City = typeof cities.$inferSelect;
export type NewCity = typeof cities.$inferInsert;

// Types for response
export type CityResponse = City;

// Types for input
export type CreateCityInput = z.infer<typeof createCitySchema>;
export type UpdateCityInput = z.infer<typeof updateCitySchema>;