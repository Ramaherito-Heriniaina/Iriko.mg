import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { authService } from './auth.service';
import { LoginInput, RegisterInput } from './auth.types';

export const authController = {

    register: async (req: Request<{}, {}, RegisterInput>, res: Response) => {
        try {

            const result = await authService.register(req.body);
            res.status(StatusCodes.CREATED).json({
                success: true,
                data: result,
                message: 'Account created successfully',
            });

        } catch (error: any) {

            if (error.code === '23505') {
                return res.status(StatusCodes.CONFLICT).json({
                    success: false,
                    error: 'Email already exists',
                });
            }
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                error: 'Error creating account',
            });

        }
    },

    login: async (req: Request<{}, {}, LoginInput>, res: Response) => {
        try {
            const result = await authService.login(req.body);
            res.json({
                success: true,
                data: result,
                message: 'Login successful',
            });
        } catch (error: any) {
            if (error.code === 'INVALID_CREDENTIALS') {
                return res.status(StatusCodes.UNAUTHORIZED).json({
                    success: false,
                    error: 'Invalid credentials',
                });
            }
            if (error.code === 'ACCOUNT_DISABLED') {
                return res.status(StatusCodes.FORBIDDEN).json({
                    success: false,
                    error: 'Account is disabled',
                });
            }
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                error: 'Error logging in',
            });
        }
    },

    me: async (req: Request, res: Response) => {
        try {
            const user = await authService.me(req.user!.id);
            if (!user) {
                return res.status(StatusCodes.NOT_FOUND).json({
                    success: false,
                    error: 'User not found',
                });
            }
            res.json({ success: true, data: user });
        } catch {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                error: 'Error fetching profile',
            });
        }
    },

    logout: (_req: Request, res: Response) => {

        res.json({
            success: true,
            message: 'Logged out successfully',
        });

    },
};