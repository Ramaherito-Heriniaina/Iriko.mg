import { Router } from 'express';

import { validate } from '@/common/middlewares';

import { authController } from './auth.controller';
import { requireAuth } from './auth.middleware';
import { loginSchema, registerSchema } from './auth.validation';

const authRouter: Router = Router();

authRouter.post('/register', validate(registerSchema), authController.register);
authRouter.post('/login', validate(loginSchema), authController.login);
authRouter.post('/logout', requireAuth, authController.logout);
authRouter.get('/me', requireAuth, authController.me);

export default authRouter;