import z from "zod";

export const createUserSChema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(8,"Password too short"),
    name: z.string(),
    phone: z.string()
})