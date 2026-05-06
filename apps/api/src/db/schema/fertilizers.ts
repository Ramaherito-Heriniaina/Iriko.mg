import { boolean, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { products } from './products';
import { timestamps } from './timestamps';

export const fertilizers = pgTable('fertilizers', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull().unique(),
  description: text('description'),
  isRecommended: boolean('is_recommended').notNull().default(false),
  isAvailable: boolean('is_available').notNull().default(true),
  ...timestamps,
});

export const productFertilizers = pgTable('product_fertilizers', {
  id: uuid('id').primaryKey().defaultRandom(),
  productId: uuid('product_id')
    .notNull()
    .references(() => products.id, { onDelete: 'cascade' }),
  fertilizerId: uuid('fertilizer_id')
    .notNull()
    .references(() => fertilizers.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// Relations
export const fertilizersRelations = relations(fertilizers, ({ many }) => ({
  productFertilizers: many(productFertilizers),
}));

export const productFertilizersRelations = relations(productFertilizers, ({ one }) => ({
  fertilizer: one(fertilizers, {
    fields: [productFertilizers.fertilizerId],
    references: [fertilizers.id],
  }),
  product: one(products, {
    fields: [productFertilizers.productId],
    references: [products.id],
  }),
}));