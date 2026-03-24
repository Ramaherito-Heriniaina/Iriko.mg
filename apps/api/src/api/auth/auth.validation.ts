import { z }  from "zod";


export const registerSchema = z.object({
  email: z
    .string()
    .email("Invalid email format")
    .min(5, "Email too short")
    .max(255, "Email too long"),
  
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password too long")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[0-9]/, "Must contain at least one number"),
  
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name too long")
    .optional(),
  
  phone: z
    .string()
    .regex(/^[0-9+\-\s]{10,20}$/, "Invalid phone number format")
    .optional()
});


export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email format"),
  
  password: z
    .string()
    .min(1, "Password is required")
});

