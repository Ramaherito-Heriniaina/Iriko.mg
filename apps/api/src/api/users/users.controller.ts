import { Request, Response } from "express";
import { userService } from "./users.service";
import { CreateUserInput, NewUser } from "./users.types"
import { StatusCodes } from "http-status-codes";

export const userController = {

    findAll: async (req: Request,res: Response) => {
        try {
            const users = await userService.findAll();

            res.json({
                success: true,
                data: users,
                count: users.length
            });

        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                succes: false,
                error: "Error fetching users"
            })
        }
    },

    create: async (req: Request<{}, {}, CreateUserInput>, res: Response) => {
        
        try {

            const userData: CreateUserInput = req.body;
        
            const newCreatedUser = await userService.create(userData);
            
            res.status(StatusCodes.CREATED).json({
                success: true,
                data: newCreatedUser,
                message: "User created successfully"
            });
        } catch (error: any) {
            
            if (error.code === '23505') {
                return res.status(StatusCodes.CONFLICT).json({
                success: false,
                error: "Email already exists"
            })};

            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: "Error creating user"
            });

        }
    },
}