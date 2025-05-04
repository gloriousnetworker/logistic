// lib/db.ts
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'arthurgr_caleb',
  password: process.env.DB_PASSWORD || 'uPidXWQqbL.}',
  database: process.env.DB_NAME || 'arthurgr_wp_arthurgreat',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

export async function query(sql: string, params: any[] = []) {
  let connection;
  try {
    connection = await pool.getConnection();
    const [results] = await connection.execute(sql, params);
    return results;
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  } finally {
    if (connection) connection.release();
  }
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  created_at: Date;
}