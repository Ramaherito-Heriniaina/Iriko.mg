import { eq } from "drizzle-orm";

import { db } from "@/db";
import { users } from "@/db/schema";

import { UpdateUserInput, UserResponse } from "./users.types";



export const userService = {

    findAll: async (): Promise<UserResponse[]> => {

        try {
            const allUsers = await db.query.users.findMany();

            return allUsers.map(user => {
                const { password, ...userWithoutPassword } = user;
                return userWithoutPassword
            })

        } catch (error) {
            console.error("Error finding all users", error);
            throw error;
        }
    },

    findById: async (id: string): Promise<UserResponse | null> => {
        try {
            const user = await db.query.users.findFirst({
                where: eq(users.id, id),
            });

            if (!user) return null;
            const { password, ...rest } = user;
            return rest;
        } catch (error) {
            console.error('Error finding user by id', error);
            throw error;
        }
    },

    update: async (id: string, userData: UpdateUserInput): Promise<UserResponse | null> => {
        try {
            const [updatedUser] = await db
                .update(users)
                .set({ ...userData, updatedAt: new Date() })
                .where(eq(users.id, id))
                .returning();

            if (!updatedUser) return null;
            const { password, ...userWithoutPassword } = updatedUser;
            return userWithoutPassword;
        } catch (error) {
            console.error('Error updating user', error);
            throw error;
        }
    },

    delete: async (id: string): Promise<boolean> => {
        try {
            const [deleted] = await db
                .update(users)
                .set({ isActive: false, updatedAt: new Date() })
                .where(eq(users.id, id))
                .returning();
            return !!deleted;
        } catch (error) {
            console.error('Error deleting user', error);
            throw error;
        }
    },

}
