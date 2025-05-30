import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import { RowDataPacket } from 'mysql2';

dotenv.config();

const { DB_USERNAME, DB_PASSWORD, DB_URL } = process.env;
const DB_PORT = Number(process.env.DB_PORT) || 3306;

// Create a connection pool with mysql2
export const db = mysql.createPool({
  host: DB_URL,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: 'task-ticket-public',
  port: DB_PORT,
  ssl: { rejectUnauthorized: false },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test the connection
(async () => {
    try {
      // Use a generic to type rows as an array of RowDataPacket with currentTime
      const [rows] = await db.query<RowDataPacket[]>('SELECT NOW() AS currentTime');
      console.log('✅ Connected to MySQL RDS, current time is', rows[0].currentTime);
    } catch (err) {
      console.error('❌ Error connecting to MySQL:', err);
      console.log('❌', DB_USERNAME, DB_PASSWORD, DB_URL, DB_PORT);
    }
  })();
