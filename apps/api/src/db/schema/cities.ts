import { boolean, integer, numeric, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

import { timestamps } from './timestamps';

export const cities = pgTable('cities', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar({ length: 255 }).notNull().unique(),
    region: varchar({ length: 255 }).notNull(),
    additionalCost: numeric('additional_cost', { precision: 10, scale: 2 }).notNull().default('0'),
    estimatedDeliveryDays: integer('estimated_delivery_days').notNull().default(1),
    isAvailable: boolean('is_available').notNull().default(true),
    ...timestamps,
});