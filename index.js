import express from 'express'
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import user from './routes/customer.js'
import cors from 'cors'
dotenv.config();
const app=express(); 

connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({origin: "http://localhost:8000"}));

app.use('/api',user);  

app.listen(8000,(err)=>{
if(err){
    connsole.log(`Error While Establish the Server`)
}
 
console.log(`Server is Running on port ${8000}`); 
})