import { timestamp } from "drizzle-orm/pg-core"

export const timestamps = {
    updatedAt : timestamp().notNull().defaultNow(),
    createdAt : timestamp().notNull().defaultNow(),
}