import { Router } from 'express';

import { requireAdmin, requireAuth } from '@/api/auth/auth.middleware';
import { validate } from '@/common/middlewares';

import { cityController } from './cities.controller';
import { createCitySchema, updateCitySchema } from './cities.validation';

const cityRouter: Router = Router();

// Admin only - static routes first
cityRouter.get('/admin/all', requireAuth, requireAdmin, cityController.findAllAdmin);
cityRouter.get('/admin/:id', requireAuth, requireAdmin, cityController.findByIdAdmin);

// Authenticated
cityRouter.get('/', requireAuth, cityController.findAll);
cityRouter.get('/:id', requireAuth, cityController.findById);

// Admin only - write operations
cityRouter.post('/', requireAuth, requireAdmin, validate(createCitySchema), cityController.create);
cityRouter.put('/:id', requireAuth, requireAdmin, validate(updateCitySchema), cityController.update);
cityRouter.delete('/:id', requireAuth, requireAdmin, cityController.delete);

export default cityRouter;