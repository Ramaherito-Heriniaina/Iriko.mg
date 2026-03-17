import { db } from "@/db";
import { CreateUserInput, NewUser, UserResponse } from "./users.types";
import { users } from "@/db/schema";
import bcrypt from 'bcrypt';

export const userService = {

    findAll: async (): Promise<UserResponse[]> => {

        try {
            const allUsers = await db.query.users.findMany();

            return allUsers.map(user => {
                const { password, ...userWithoutPassword } = user;
                return userWithoutPassword
            })
            
        } catch (error) {
            console.error("Error finding all users",error);
            throw error;
        }
    },

    create: async (userData : CreateUserInput): Promise<UserResponse> => {
        try {

            const hashedPassword = await bcrypt.hash(userData.password, 10);

            const dbData: NewUser = {
                email: userData.email,
                password: hashedPassword,
                name: userData.name,
                phone: userData.phone,
                role: 'CLIENT',
                isActive: true
      };

            const [createdUser] = await db
            .insert(users)
            .values(dbData)
            .returning();

            if(!createdUser) {
                throw new Error("user cannot be created")
            }

            const {password, ...userWithoutPassword} = createdUser;

            return userWithoutPassword;
            
        }  catch (error) {
            console.error("Error creating user",error);
            throw error;
        }
    },
    
}
