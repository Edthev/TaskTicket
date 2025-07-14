import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
require('dotenv').config({ path: '../.env' });
const { MongoClient, ServerApiVersion } = require('mongodb');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
const URI = process.env.MANGO_DB
const DB = process.env.DB_NAME

if(!PORT || !URI || !DB){
  //TODO handle error on frontend
  console.error("Error with ENV")
}

// handle Errors
const handleErrors=async(err:string,errObj:object)=>{
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const db = await client.db(DB) 
    const collections = await db.listCollections().toArray();

    /*TODO
    take length of collections array
    any field that starts with "_" is considered a hidden element
    arrays are used like notions multi-select
    dont handle objects (for now)
    */
    if(!collections.length){
      //TODO handle error on frontend
      console.log("Error with DB")
    }else{ 
      // Display collection names
      console.log("Collections in the database:");
      for (const col of collections) {
        const doc = await db.collection(col.name).findOne({});
        if (doc) {
          const fields = Object.keys(doc);
          // remove fields that start with _
          // remove fields that have a type of obj
          console.log(`Fields in collection '${col.name}'`);
          for (const [key, value] of Object.entries(doc)) {
            if(key[0]=="_"){
            }else{
              console.log(`- ${key}: ${typeof value}`);
            }
          }

        } else {
          console.log(`Collection '${col.name}' is empty.`);
        }
      };

      // const collection = await client.db(DB).collection("users").find({}).toArray();
    }
  }catch(e){
    //TODO handle error on frontend
    console.error("Error:",e)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run()

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
  } catch (err) {
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

