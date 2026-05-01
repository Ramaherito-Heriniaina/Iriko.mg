import { integer, boolean, pgEnum, varchar, pgTable, uuid, text, numeric } from "drizzle-orm/pg-core";
import { timestamps } from "./timestamps";

export const productCategoryEnum = pgEnum("product_category", [
    "anana",
    "legumineuses",
    "tubercules",
    "legumes",
    "cereales",
    "autres",
] as const);

export const productUnitEnum = pgEnum("product_unit", [
    "KG",
    'G',
    'PIECE',
    'BOTTE',
] as const);

export const products = pgTable("products", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar({ length: 255 }).notNull(),
    description: text("description"),
    price: numeric("price", { precision: 10, scale: 2 }).notNull(),
    unit: productUnitEnum("unit").notNull(),
    category: productCategoryEnum("category").notNull(),
    minOrderQuantity: integer("min_order_quantity").notNull().default(1),
    maxOrderQuantity: integer("max_order_quantity").notNull().default(100),
    productionPeriodDays: integer("production_period_days").notNull().default(7),
    imageUrl: text("image_url"),
    isAvailable: boolean("is_available").notNull().default(true),
    ...timestamps
});