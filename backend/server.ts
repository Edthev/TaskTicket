import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
}))
// app.use(express.json()); 

app.get('/', (_req, res) => {
  res.send({'Test':"init"});
});

app.post('/submit', (req, res) => {
  const data = req.body;
  console.log('Received "/submit":', data);
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});