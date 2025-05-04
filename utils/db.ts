import mysql from 'mysql2/promise';

// Database connection configuration
export const dbConfig = {
  host: 'localhost',
  user: 'arthurgr_caleb',
  password: 'uPidXWQqbL.}',
  database: 'arthurgr_wp_arthurgreat',
};

// Create a connection pool for better performance
export const pool = mysql.createPool({
  ...dbConfig,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Helper function to get a connection from the pool
export const getConnection = async () => {
  return await pool.getConnection();
};

// Helper function to execute a query
export const executeQuery = async (query: string, params: any[] = []) => {
  try {
    const [rows] = await pool.execute(query, params);
    return rows;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
};