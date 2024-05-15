import { useState } from "react";
import './home.css' 
import axios from 'axios';
import {message} from "antd"
const Home = () => {
    const  now= new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
    const day = String(now.getDate()).padStart(2, '0'); 
    const hours = String(now.getHours()).padStart(2, '0'); // Add leading zero if needed
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Add leading zero if needed
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Add leading zero if needed
   const [name,setName]=useState('');
   const [date,setDate]=useState(`${year}-${month}-${day}`);
   const[time,setTime]=useState(`${hours}:${minutes}:${seconds}`);
   const [price,setPrice]=useState('');
   const [des,setDes]=useState('');
    let data={name,date,time,price,des};
   
   
    
   const handleButton= async()=>{
     
    try {
          console.log(data) 
         const res= await axios.post('/api/register',{data});
         
         if(res.data.success){ 
            message.success(res.data.message);
         }
        
    } catch (error) {
        console.log(error)
        
    }
    

    setName('')
    setDate('')
    setTime('')
    setPrice('')
    setDes(''); 

   } 

  return <>
  <div className="container">
    <h2 className="title">Khata Book</h2>
    <div className="input-group">
        <label >Customer Name:</label>
        <input type="text" id="customer-name" name="name" placeholder="Enter customer name" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div className="input-group">
        <label >Date:</label>
        <input type="date" id="date" defaultValue={`${year}-${month}-${day}`} onChange={(e) => setDate(e.target.value)} />
    </div>
    <div className="input-group">
        <label >Time:</label>
        <input type="time" id="time" defaultValue={`${hours}:${minutes}:${seconds}`} onChange={(e) => setTime(e.target.value)} />
    </div>
    <div className="input-group">
        <label >Price:</label>
        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
    </div>
    <div className="input-group">
        <label >Description:</label>
        <input type="text" id="description" value={des} onChange={(e) => setDes(e.target.value)} />
    </div>
    <button className="btn" onClick={handleButton}>Save</button>
</div>
  </>;
};

export default Home;

