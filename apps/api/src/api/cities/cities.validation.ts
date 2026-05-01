import z from 'zod';

export const createCitySchema = z.object({
    name: z.string().min(1, 'Name is required'),
    region: z.string().min(1, 'Region is required'),
    additionalCost: z.string().regex(/^\d+(\.\d{1,2})?$/, 'Invalid cost format').default('0'),
    estimatedDeliveryDays: z.number().int().positive().default(1),
    isAvailable: z.boolean().default(true),
});

export const updateCitySchema = createCitySchema
    .partial()
    .refine((data) => Object.keys(data).length > 0, {
        message: 'At least one field must be provided for update',
    });