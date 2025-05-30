import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db } from './db';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(cors())
app.use(express.json()); 

// show backend is working from terminal
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// show backend is working from frontend
app.get('/', async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const [rows] = await db.query('SELECT NOW() AS currentTime');
    const currentTime = Array.isArray(rows) && rows.length > 0 ? (rows as any)[0].currentTime : null;
    res.json({ DB_Time: currentTime });
  } catch (err) {
    console.error('❌ Query error:', err);
    res.status(500).json({ Server: 'DB error' });
  }
});


// handle posts to backend
app.post('/submit', (req, res) => {
  const data = req.body;
  console.log('Received "/submit":', data);
  // handle empty data
  if(data){
    console.log("status:201")
      res.status(201).json({
          message: 'Success',
          received: data
        });
    }else{
        console.log("Status:400")
        res.status(400).json({
            message: "Empty",
            received: data
        })
    }
});

