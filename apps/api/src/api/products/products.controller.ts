import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CreateProductInput, UpdateProductInput } from './products.types';
import { productService } from './products.service';

export const productController = {
    findAll: async (_req: Request, res: Response) => {
        try {
            const allProducts = await productService.findAvailable();
            res.json({ success: true, data: allProducts, count: allProducts.length });
        } catch {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                error: 'Error fetching products',
            });
        }
    },

    findById: async (req: Request<{ id: string }>, res: Response) => {
        try {
            const product = await productService.findById(req.params.id);
            if (!product) {
                return res.status(StatusCodes.NOT_FOUND).json({
                    success: false,
                    error: 'Product not found',
                });
            }
            res.json({ success: true, data: product });
        } catch {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                error: 'Error fetching product',
            });
        }
    },

    findByIdAdmin: async (req: Request<{ id: string }>, res: Response) => {
        try {
            const product = await productService.findByIdAdmin(req.params.id);
            if (!product) {
                return res.status(StatusCodes.NOT_FOUND).json({
                    success: false,
                    error: 'Product not found',
                });
            }
            res.json({ success: true, data: product });
        } catch {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                error: 'Error fetching product',
            });
        }
    },

    findAllAdmin: async (_req: Request, res: Response) => {
        try {
            const allProducts = await productService.findAll();
            res.json({ success: true, data: allProducts, count: allProducts.length });
        } catch {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                error: 'Error fetching products',
            });
        }
    },

    create: async (req: Request<{}, {}, CreateProductInput>, res: Response) => {
        try {
            const product = await productService.create(req.body);
            res.status(StatusCodes.CREATED).json({
                success: true,
                data: product,
                message: 'Product created successfully',
            });
        } catch {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                error: 'Error creating product',
            });
        }
    },

    update: async (req: Request<{ id: string }, {}, UpdateProductInput>, res: Response) => {
        try {
            const updated = await productService.update(req.params.id, req.body);
            if (!updated) {
                return res.status(StatusCodes.NOT_FOUND).json({
                    success: false,
                    error: 'Product not found',
                });
            }
            res.json({ success: true, data: updated, message: 'Product updated successfully' });
        } catch {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                error: 'Error updating product',
            });
        }
    },

    delete: async (req: Request<{ id: string }>, res: Response) => {
        try {
            const deleted = await productService.delete(req.params.id);
            if (!deleted) {
                return res.status(StatusCodes.NOT_FOUND).json({
                    success: false,
                    error: 'Product not found',
                });
            }
            res.json({ success: true, message: 'Product deactivated successfully' });
        } catch {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                error: 'Error deleting product',
            });
        }
    },
};