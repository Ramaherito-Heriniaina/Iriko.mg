import { User, UserResponse } from "../users/users.types";
import z from "zod";
import { registerSchema, loginSchema } from "./auth.validation";

export type TokenPayload = Pick<User, 'id' | 'email' | 'role' >
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type AuthResponse = {
    user: UserResponse;
    token: string;
}