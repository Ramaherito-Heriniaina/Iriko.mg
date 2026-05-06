import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CreateCityInput, UpdateCityInput } from './cities.types';
import { cityService } from './cities.service';

export const cityController = {
  findAll: async (_req: Request, res: Response) => {
    try {
      const allCities = await cityService.findAvailable();
      res.json({ success: true, data: allCities, count: allCities.length });
    } catch {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Error fetching cities',
      });
    }
  },

  findById: async (req: Request<{ id: string }>, res: Response) => {
    try {
      const city = await cityService.findById(req.params.id);
      if (!city) {
        return res.status(StatusCodes.NOT_FOUND).json({
          success: false,
          error: 'City not found',
        });
      }
      res.json({ success: true, data: city });
    } catch {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Error fetching city',
      });
    }
  },

  findAllAdmin: async (_req: Request, res: Response) => {
    try {
      const allCities = await cityService.findAll();
      res.json({ success: true, data: allCities, count: allCities.length });
    } catch {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Error fetching cities',
      });
    }
  },

  findByIdAdmin: async (req: Request<{ id: string }>, res: Response) => {
    try {
      const city = await cityService.findByIdAdmin(req.params.id);
      if (!city) {
        return res.status(StatusCodes.NOT_FOUND).json({
          success: false,
          error: 'City not found',
        });
      }
      res.json({ success: true, data: city });
    } catch {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Error fetching city',
      });
    }
  },

  create: async (req: Request<{}, {}, CreateCityInput>, res: Response) => {
    try {
      const city = await cityService.create(req.body);
      res.status(StatusCodes.CREATED).json({
        success: true,
        data: city,
        message: 'City created successfully',
      });
    } catch (error: any) {
      if (error.code === '23505') {
        return res.status(StatusCodes.CONFLICT).json({
          success: false,
          error: 'City name already exists',
        });
      }
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Error creating city',
      });
    }
  },

  update: async (req: Request<{ id: string }, {}, UpdateCityInput>, res: Response) => {
    try {
      const updated = await cityService.update(req.params.id, req.body);
      if (!updated) {
        return res.status(StatusCodes.NOT_FOUND).json({
          success: false,
          error: 'City not found',
        });
      }
      res.json({ success: true, data: updated, message: 'City updated successfully' });
    } catch {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Error updating city',
      });
    }
  },

  delete: async (req: Request<{ id: string }>, res: Response) => {
    try {
      const deleted = await cityService.delete(req.params.id);
      if (!deleted) {
        return res.status(StatusCodes.NOT_FOUND).json({
          success: false,
          error: 'City not found',
        });
      }
      res.json({ success: true, message: 'City deactivated successfully' });
    } catch {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Error deleting city',
      });
    }
  },
};