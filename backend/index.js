import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose
 .connect(process.env.MONGODB_URL)
 .then(() =>{
   console.log("database connected")
}).catch((err) => {
  console.log(err)
}); 

const app = express();

app.listen(process.env.PORT, () => {
    console.log("Server started at port 5000");
});