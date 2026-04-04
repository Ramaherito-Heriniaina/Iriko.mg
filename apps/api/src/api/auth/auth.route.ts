import { Router } from 'express';

import { validate } from '@/common/middlewares';

import { authController } from './auth.controller';
import { requireAuth } from './auth.middleware';
import { loginSchema, registerSchema } from './auth.validation';

const authRouter: Router = Router();

//Public
authRouter.post('/register', validate(registerSchema), authController.register);
authRouter.post('/login', validate(loginSchema), authController.login);
authRouter.post('/logout', requireAuth, authController.logout);

export default authRouter;