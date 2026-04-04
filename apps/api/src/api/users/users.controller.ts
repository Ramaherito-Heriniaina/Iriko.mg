import { Request, Response } from "express";
import { userService } from "./users.service";
import { NewUser } from "./users.types"

export const userController = {
    register: async (req: Request, res: Response) => {
        try {
            const data: NewUser = req.body;
            console.log("the data in controller :",data);
            const createdUser = await userService.create(data);
            res.status(201).json(createdUser);
        } catch (error) {
            console.log("!!Service Error",error);
            res.status(500).json({ message: "Cannot create user"})
        }
    }
}