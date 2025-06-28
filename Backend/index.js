import express from "express"
import bookRout from './routs/book.rout.js'
import userRout from './routs/user.rout.js'
import dotenv from "dotenv";
import connectDB from './DB/connectDB.js'
import cors from 'cors'

const app=express();

const port=process.env.PORT || 8000

app.use(express.json());
dotenv.config();
app.use(cors());

connectDB()

app.listen(port,()=>{
    console.log(`server running on port: ${port}`);
    
})


//define rout 

app.use("/book",bookRout)
app.use("/user",userRout)
