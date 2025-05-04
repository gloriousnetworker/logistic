import { NextApiResponse } from 'next';
import { withAuth, AuthenticatedRequest } from '../../../middleware/auth';
import mysql from 'mysql2/promise';

// Database connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'arthurgr_caleb',
  password: 'uPidXWQqbL.}',
  database: 'arthurgr_wp_arthurgreat',
};

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get user ID from authenticated request
    const userId = req.user?.userId;

    // Create database connection
    const connection = await mysql.createConnection(dbConfig);

    // Fetch user profile
    const [users] = await connection.execute(
      'SELECT id, full_name, email, created_at FROM users WHERE id = ?',
      [userId]
    );

    // Close connection
    await connection.end();

    // TypeScript cast for proper array handling
    const userArray = users as any[];

    if (userArray.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = userArray[0];

    return res.status(200).json({
      success: true,
      user: {
        id: user.id,
        fullName: user.full_name,
        email: user.email,
        createdAt: user.created_at
      }
    });
  } catch (error) {
    console.error('Profile fetch error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
}

// Wrap the handler with authentication middleware
export default withAuth(handler);