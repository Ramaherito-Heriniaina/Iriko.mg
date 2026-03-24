import bcrypt from 'bcrypt';
import { eq, or } from 'drizzle-orm';


import { db } from '@/db';
import { users } from '@/db/schema';
import { NewUser, UserResponse } from '../users/users.types';
import { RegisterInput, LoginInput, TokenPayload, AuthResponse } from './auth.types';
import { generateToken } from './auth.utils';

export const authService = {
    register: async (data: RegisterInput): Promise<AuthResponse> => {
        try {
            const existing = await db.query.users.findFirst({
                where: eq(users.email, data.email),
            });

            if (existing) throw { code: '23505' };

            const hashedPassword = await bcrypt.hash(data.password, 10);

            const newUser: NewUser = {
                email: data.email,
                password: hashedPassword,
                name: data.name,
                phone: data.phone,
                role: 'CLIENT',
                isActive: true,
            };

            const [created] = await db
                .insert(users)
                .values(newUser)
                .returning();

            if (!created) throw new Error('User cannot be created');

            const payload: TokenPayload = {
                id: created.id,
                email: created.email,
                role: created.role,
            };

            const { password, ...userWithoutPassword } = created;

            return {
                user: userWithoutPassword,
                token: generateToken(payload),
            };
        } catch (error) {
            console.error('Error registering user', error);
            throw error;
        }
    },


    login: async (data: LoginInput): Promise<AuthResponse> => {
        try {
            const user = await db.query.users.findFirst({
                where: or(
                    'email' in data ? eq(users.email, data.email) : undefined,
                    'name' in data ? eq(users.name, data.name) : undefined,
                    'phone' in data ? eq(users.phone, data.phone) : undefined
                ),
            });

            if (!user) throw { code: 'INVALID_CREDENTIALS' };
            if (!user.isActive) throw { code: 'ACCOUNT_DISABLED' };

            const isValid = await bcrypt.compare(data.password, user.password);
            if (!isValid) throw { code: 'INVALID_CREDENTIALS' };

            await db
                .update(users)
                .set({ lastLogin: new Date() })
                .where(eq(users.id, user.id));

            const payload: TokenPayload = {
                id: user.id,
                email: user.email,
                role: user.role,
            };

            const { password, ...userWithoutPassword } = user;

            return {
                user: userWithoutPassword,
                token: generateToken(payload),
            };
        } catch (error) {
            console.error('Error logging in', error);
            throw error;
        }
    },

    me: async (id: string): Promise<UserResponse | null> => {
        try {
            const user = await db.query.users.findFirst({
                where: eq(users.id, id),
            });

            if (!user || !user.isActive) return null;

            const { password, ...userWithoutPassword } = user;
            return userWithoutPassword;
        } catch (error) {
            console.error('Error fetching me', error);
            throw error;
        }
    },

}