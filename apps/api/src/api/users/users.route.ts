import { Router } from "express";
import { userController } from "./users.controller";

const userRouter: Router = Router();

userRouter.post('/', userController.register);

export default userRouter;

