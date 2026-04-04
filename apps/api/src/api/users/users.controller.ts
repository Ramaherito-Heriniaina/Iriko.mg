import { Request, Response } from "express";
import { userService } from "./users.service";
import { UpdateUserInput} from "./users.types"
import { StatusCodes } from "http-status-codes";

export const userController = {

    findAll: async (_req: Request, res: Response) => {
        try {
            const users = await userService.findAll();

            res.json({
                success: true,
                data: users,
                count: users.length
            });

        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                error: "Error fetching users"
            })
        }
    },

    findById: async (req: Request<{ id: string }>, res: Response) => {
        try {
            const user = await userService.findById(req.params.id);

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
                error: 'Error fetching user',
            });
        }
    },

    update: async (req: Request<{ id: string }, {}, UpdateUserInput>, res: Response) => {
        try {
            const updated = await userService.update(req.params.id, req.body);

            if (!updated) {
                return res.status(StatusCodes.NOT_FOUND).json({
                    success: false,
                    error: 'User not found',
                });
            }
            res.json({ success: true, data: updated, message: 'User updated successfully' });
        } catch {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                error: 'Error updating user',
            });
        }
    },

    delete: async (req: Request<{ id: string }>, res: Response) => {
        try {
            const deleted = await userService.delete(req.params.id);
            if (!deleted) {
                return res.status(StatusCodes.NOT_FOUND).json({
                    success: false,
                    error: 'User not found',
                });
            }
            res.json({ success: true, message: 'User deactivated successfully' });
        } catch {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                error: 'Error deleting user',
            });
        }
    },


}