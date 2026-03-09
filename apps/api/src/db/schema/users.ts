import {uuid, varchar, boolean, timestamp, pgEnum, pgTable} from "drizzle-orm/pg-core";
import { timestamps } from "./timestamps";

export const userRoleEnum = pgEnum('user_role', ['CLIENT','ADMIN']);

export const users = pgTable('users',{
    id : uuid().primaryKey().defaultRandom(),
    email : varchar({length: 255}).notNull().unique(),
    password : varchar({ length : 255}),
    name : varchar({length : 255}),
    phone : varchar({length : 20}),
    role :  userRoleEnum().notNull().default('CLIENT'),
    isActive : boolean(),
    lastLogin : timestamp().defaultNow(),
    ...timestamps
});