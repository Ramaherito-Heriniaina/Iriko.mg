import { Router } from 'express';

import { requireAdmin, requireAuth } from '@/api/auth/auth.middleware';
import { validate } from '@/common/middlewares';

import { fertilizerController } from './fertilizers.controller';
import { createFertilizerSchema, updateFertilizerSchema } from './fertilizers.validation';

const fertilizerRouter: Router = Router();

// Admin only - static routes first
fertilizerRouter.get('/admin/all', requireAuth, requireAdmin, fertilizerController.findAllAdmin);
fertilizerRouter.get('/admin/:id', requireAuth, requireAdmin, fertilizerController.findByIdAdmin);

// Authenticated
fertilizerRouter.get('/', requireAuth, fertilizerController.findAll);
fertilizerRouter.get('/:id', requireAuth, fertilizerController.findById);

// Admin only - write operations
fertilizerRouter.post('/', requireAuth, requireAdmin, validate(createFertilizerSchema), fertilizerController.create);
fertilizerRouter.put('/:id', requireAuth, requireAdmin, validate(updateFertilizerSchema), fertilizerController.update);
fertilizerRouter.delete('/:id', requireAuth, requireAdmin, fertilizerController.delete);

// Product - Fertilizer relations (Admin only)
fertilizerRouter.get('/product/:productId', requireAuth, fertilizerController.findByProduct);
fertilizerRouter.post('/product/:productId/:fertilizerId', requireAuth, requireAdmin, fertilizerController.addToProduct);
fertilizerRouter.delete('/product/:productId/:fertilizerId', requireAuth, requireAdmin, fertilizerController.removeFromProduct);

export default fertilizerRouter;