import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
// app.use(cors())
app.use(express.json()); 

// show backend is working from terminal
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// show backend is working from frontend
app.get('/', (_req, res) => {
  res.send({'Server':"Working"});
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

