import z from "zod";
import { productCategoryEnum, productUnitEnum } from "@/db/schema";

// Schema for product creation
export const createProductSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, 'Invalid price format'),
  unit: z.enum(productUnitEnum.enumValues),
  category: z.enum(productCategoryEnum.enumValues),
  minOrderQuantity: z.number().int().positive().default(1),
  maxOrderQuantity: z.number().int().positive().default(100),
  productionPeriodDays: z.number().int().positive().default(7),
  imageUrl: z.string().optional(),
  isAvailable: z.boolean().default(true),
});

// Schema for product update (all fields optional)
export const updateProductSchema = createProductSchema
    .partial()
    .refine((data) => Object.keys(data).length > 0, {
        message: "At least one field must be provided for update",
    });