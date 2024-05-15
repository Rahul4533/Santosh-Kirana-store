import express from 'express'
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import user from './routes/customer.js'
import cors from 'cors'
const path=require('path');
dotenv.config();
const app=express(); 

connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({origin: "http://localhost:8000"}));

app.use('/api',user);  


app.use(express.static(path.join(__dirname, 'dist')));

// Handle all other routes by serving the 'index.html' file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(8000,(err)=>{
if(err){
    connsole.log(`Error While Establish the Server`)
}
 
console.log(`Server is Running on port ${8000}`); 
})