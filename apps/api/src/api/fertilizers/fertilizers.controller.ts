import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CreateFertilizerInput, UpdateFertilizerInput } from './fertilizers.types';
import { fertilizerService } from './fertilizers.service';

export const fertilizerController = {
  findAll: async (_req: Request, res: Response) => {
    try {
      const allFertilizers = await fertilizerService.findAvailable();
      res.json({ success: true, data: allFertilizers, count: allFertilizers.length });
    } catch {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Error fetching fertilizers',
      });
    }
  },

  findById: async (req: Request<{ id: string }>, res: Response) => {
    try {
      const fertilizer = await fertilizerService.findById(req.params.id);
      if (!fertilizer) {
        return res.status(StatusCodes.NOT_FOUND).json({
          success: false,
          error: 'Fertilizer not found',
        });
      }
      res.json({ success: true, data: fertilizer });
    } catch {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Error fetching fertilizer',
      });
    }
  },

  findAllAdmin: async (_req: Request, res: Response) => {
    try {
      const allFertilizers = await fertilizerService.findAll();
      res.json({ success: true, data: allFertilizers, count: allFertilizers.length });
    } catch {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Error fetching fertilizers',
      });
    }
  },

  findByIdAdmin: async (req: Request<{ id: string }>, res: Response) => {
    try {
      const fertilizer = await fertilizerService.findByIdAdmin(req.params.id);
      if (!fertilizer) {
        return res.status(StatusCodes.NOT_FOUND).json({
          success: false,
          error: 'Fertilizer not found',
        });
      }
      res.json({ success: true, data: fertilizer });
    } catch {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Error fetching fertilizer',
      });
    }
  },

  create: async (req: Request<{}, {}, CreateFertilizerInput>, res: Response) => {
    try {
      const fertilizer = await fertilizerService.create(req.body);
      res.status(StatusCodes.CREATED).json({
        success: true,
        data: fertilizer,
        message: 'Fertilizer created successfully',
      });
    } catch (error: any) {
      if (error.code === '23505') {
        return res.status(StatusCodes.CONFLICT).json({
          success: false,
          error: 'Fertilizer name already exists',
        });
      }
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Error creating fertilizer',
      });
    }
  },

  update: async (req: Request<{ id: string }, {}, UpdateFertilizerInput>, res: Response) => {
    try {
      const updated = await fertilizerService.update(req.params.id, req.body);
      if (!updated) {
        return res.status(StatusCodes.NOT_FOUND).json({
          success: false,
          error: 'Fertilizer not found',
        });
      }
      res.json({ success: true, data: updated, message: 'Fertilizer updated successfully' });
    } catch {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Error updating fertilizer',
      });
    }
  },

  delete: async (req: Request<{ id: string }>, res: Response) => {
    try {
      const deleted = await fertilizerService.delete(req.params.id);
      if (!deleted) {
        return res.status(StatusCodes.NOT_FOUND).json({
          success: false,
          error: 'Fertilizer not found',
        });
      }
      res.json({ success: true, message: 'Fertilizer deactivated successfully' });
    } catch {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Error deleting fertilizer',
      });
    }
  },

  // Product - Fertilizer relations
  addToProduct: async (req: Request<{ productId: string; fertilizerId: string }>, res: Response) => {
    try {
      await fertilizerService.addToProduct(req.params.productId, req.params.fertilizerId);
      res.status(StatusCodes.CREATED).json({
        success: true,
        message: 'Fertilizer added to product successfully',
      });
    } catch {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Error adding fertilizer to product',
      });
    }
  },

  removeFromProduct: async (req: Request<{ productId: string; fertilizerId: string }>, res: Response) => {
    try {
      const removed = await fertilizerService.removeFromProduct(
        req.params.productId,
        req.params.fertilizerId
      );
      if (!removed) {
        return res.status(StatusCodes.NOT_FOUND).json({
          success: false,
          error: 'Relation not found',
        });
      }
      res.json({ success: true, message: 'Fertilizer removed from product successfully' });
    } catch {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Error removing fertilizer from product',
      });
    }
  },

  findByProduct: async (req: Request<{ productId: string }>, res: Response) => {
    try {
      const productFertilizers = await fertilizerService.findByProduct(req.params.productId);
      res.json({ success: true, data: productFertilizers, count: productFertilizers.length });
    } catch {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Error fetching fertilizers for product',
      });
    }
  },
};