import { Router } from "express";
import { userController } from "./users.controller";
import { validate } from "@/common/middlewares";
import { createUserSchema, updateUserSchema } from "./users.validation";

const userRouter: Router = Router();

userRouter.get('/', userController.findAll);
userRouter.get('/:id', userController.findById);
userRouter.post('/', validate(createUserSchema), userController.create);
userRouter.put('/:id', validate(updateUserSchema), userController.update);
userRouter.delete('/:id', userController.delete);

export default userRouter;

