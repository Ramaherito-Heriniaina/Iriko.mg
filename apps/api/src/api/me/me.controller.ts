import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { userService } from '@/api/users/users.service';
import { UpdateUserInput } from '@/api/users/users.types';

export const meController = {

    get: async (req: Request, res: Response) => {
        try {
            const user = await userService.findById(req.user!.id);

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

    update: async (req: Request<{}, {}, UpdateUserInput>, res: Response) => {
        try {
            const updated = await userService.update(req.user!.id, req.body);

            if (!updated) {
                return res.status(StatusCodes.NOT_FOUND).json({
                    success: false,
                    error: 'User not found',
                });
            }

            res.json({
                success: true,
                data: updated,
                message: 'Profile updated successfully',
            });
        } catch {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                error: 'Error updating profile',
            });
        }
    },
};