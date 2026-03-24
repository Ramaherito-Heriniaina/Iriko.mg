import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { TokenPayload } from './auth.types';
import { extractToken, verifyToken } from './auth.utils';

declare global {
    namespace Express {
        interface Request {
            user?: TokenPayload;
        }
    }
}

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    const token = extractToken(req.headers.authorization);

    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            error: 'Authentication required',
        });
    }

    try {
        req.user = verifyToken(token);
        next();
    } catch {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            error: 'Invalid or expired token',
        });
    }
};

export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            error: 'Authentication required',
        });
    }

    if (req.user.role !== 'ADMIN') {
        return res.status(StatusCodes.FORBIDDEN).json({
            success: false,
            error: 'Admin access required',
        });
    }

    next();
};