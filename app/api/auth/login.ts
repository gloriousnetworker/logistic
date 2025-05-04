import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const dbConfig = {
  host: 'localhost',
  user: 'arthurgr_caleb',
  password: 'uPidXWQqbL.}',
  database: 'arthurgr_arthurgreatlogistics',
};

const JWT_SECRET = 'f5aedf40a5a5155da5d20546f0088c034e2b868c7062cc14b2ce1c40d74487936e80f589aa329ca5cc3827b425ef8624d83b8ed510157d1339cc5d7eeb54b949';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const connection = await mysql.createConnection(dbConfig);

    // Find user
    const [users] = await connection.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (!Array.isArray(users)) {
      await connection.end();
      return res.status(500).json({ message: 'Database error' });
    }

    if (users.length === 0) {
      await connection.end();
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = users[0] as any;

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      await connection.end();
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    await connection.end();

    return res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}