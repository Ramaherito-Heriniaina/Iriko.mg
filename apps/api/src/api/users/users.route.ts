import { Router } from "express";
import { userController } from "./users.controller";
import { validate } from "@/common/middlewares";
import { createUserSchema, updateUserSchema } from "./users.validation";
import { requireAdmin, requireAuth } from "../auth/auth.middleware";

const userRouter: Router = Router();

userRouter.use(requireAuth, requireAdmin);

userRouter.get('/', userController.findAll);
userRouter.get('/:id', userController.findById);
userRouter.put('/:id', validate(updateUserSchema), userController.update);
userRouter.delete('/:id', userController.delete);

export default userRouter;

