import express from 'express';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (_req, res) => {
  res.send({'Test':"init"});
});

app.listen(PORT, () => {
    console.log(process.env.PORT)
  console.log(`Server is running on http://localhost:${PORT}`);
});