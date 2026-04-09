import z from "zod";
import { productCategoryEnum, productUnitEnum } from "@/db/schema";

// Schema for product creation
export const createProductSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(255),
    description: z.string().optional(),
    price: z.number().positive("Price must be positive").multipleOf(0.01),
    unit: z.enum(productUnitEnum.enumValues),
    category: z.enum(productCategoryEnum.enumValues),
    minOrderQuantity: z.number().int().positive().default(1),
    maxOrderQuantity: z.number().int().positive().default(100),
    productionPeriodDays: z.number().int().positive().default(7),
    imageUrl: z.string().url("Invalid URL").optional(),
    isAvailable: z.boolean().default(true),
})

// Schema for product update (all fields optional)
export const updateProductSchema = createProductSchema
    .partial()
    .refine((data) => Object.keys(data).length > 0, {
        message: "At least one field must be provided for update",
    });