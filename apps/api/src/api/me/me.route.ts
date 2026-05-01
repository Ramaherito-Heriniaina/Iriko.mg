import { Router } from 'express';

import { requireAuth } from '@/api/auth/auth.middleware';
import { validate } from '@/common/middlewares';
import { updateUserSchema } from '@/api/users/users.validation';

import { meController } from './me.controller';

const meRouter: Router = Router();

meRouter.use(requireAuth);

meRouter.get('/', meController.get);
meRouter.put('/', validate(updateUserSchema), meController.update);

export default meRouter;