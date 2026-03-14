import { users } from "@/db/schema";

export type NewUser = typeof users.$inferInsert;
