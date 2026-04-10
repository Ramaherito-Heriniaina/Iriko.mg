import z from "zod";
import { users } from "@/db/schema";
import { createUserSchema, updateUserSchema } from "./users.validation";

//Type Zod
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;

//Type for database
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

//Type for the reponse
export type UserResponse = Omit<User,'password'>;