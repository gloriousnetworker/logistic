import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

// JWT Secret - Use the one from your wp-config.php
const JWT_SECRET = 'rAnDoM-sTr0nG.aPiKeY_eX9mpl3-gEn3r@tEd';

// Extend NextApiRequest to include user object
export interface AuthenticatedRequest extends NextApiRequest {
  user?: {
    userId: number;
    email: string;
  };
}

type NextApiHandler = (
  req: AuthenticatedRequest,
  res: NextApiResponse
) => Promise<void> | void;

export function withAuth(handler: NextApiHandler): NextApiHandler {
  return async (req: AuthenticatedRequest, res: NextApiResponse) => {
    try {
      // Get token from header
      const authHeader = req.headers.authorization;
      
      // Check if token exists
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
      }

      // Extract token without 'Bearer ' prefix
      const token = authHeader.substring(7);

      try {
        // Verify token
        const decoded = jwt.verify(token, JWT_SECRET) as {
          userId: number;
          email: string;
        };

        // Add user info to request
        req.user = decoded;

        // Call the original handler
        return handler(req, res);
      } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Authentication error' });
    }
  };
}