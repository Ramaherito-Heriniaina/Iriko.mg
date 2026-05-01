import { z } from 'zod';
import { products, productCategoryEnum, productUnitEnum } from '@/db/schema';
import { createProductSchema, updateProductSchema } from './products.validation';


// Types Drizzle (database)
export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;

// Types Zod (validation)
export type CreateProductInput = z.infer<typeof createProductSchema>;
export type UpdateProductInput = z.infer<typeof updateProductSchema>;

// Types for API response
export type ProductResponse = Product;

// Types for ENUM
export type ProductCategory = typeof productCategoryEnum.enumValues[number];
export type ProductUnit = typeof productUnitEnum.enumValues[number];