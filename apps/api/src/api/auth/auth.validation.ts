import { z }  from "zod";


export const registerSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password too short'),
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(1, 'Phone is required'),
});


export const loginSchema = z.union([
  z.object({ email: z.string().email(), password: z.string().min(1) }),
  z.object({ phone: z.string().min(1), password: z.string().min(1) }),
]);

