import { db } from "@/db";
import { NewUser } from "./users.types";
import { users } from "@/db/schema";

export const userService = {

    create: async (user : NewUser) => {
        try {
            const [createdUser] = await db
            .insert(users)
            .values(user)
            .returning();
            console.log("creatd user in userService",createdUser);
            
        }  catch (error) {
            console.error("cannot create user",error);
        throw error;
        }
    },
    
}
