import { Router } from "express";
import { userController } from "./users.controller";

const userRouter: Router = Router();

userRouter.get('/', userController.findAll);
userRouter.post('/', userController.create);

export default userRouter;

