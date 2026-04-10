import { Router } from 'express';

import { requireAdmin, requireAuth } from '@/api/auth/auth.middleware';
import { validate } from '@/common/middlewares';

import { productController } from './products.controller';
import { createProductSchema, updateProductSchema } from './products.validation';

const productRouter: Router = Router();

// Public
productRouter.get('/', productController.findAll);
productRouter.get('/:id', productController.findById);

// Admin seulement
productRouter.get('/admin/all', requireAuth, requireAdmin, productController.findAllAdmin);
productRouter.get('/admin/:id', requireAuth, requireAdmin, productController.findByIdAdmin);
productRouter.post('/', requireAuth, requireAdmin, validate(createProductSchema), productController.create);
productRouter.put('/:id', requireAuth, requireAdmin, validate(updateProductSchema), productController.update);
productRouter.delete('/:id', requireAuth, requireAdmin, productController.delete);

export default productRouter;