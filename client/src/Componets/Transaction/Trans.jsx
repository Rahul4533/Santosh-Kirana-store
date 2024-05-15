import { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";
import { Link } from "react-router-dom";
import './Trans.css';

function Trans() {
  const [user, setUser] = useState([]);
  const getUser = async () => {
    const res = await axios.get("/api/trans");

    if (res.data.success) {
      setUser(res.data.data); 
      message.success(res.data.message);
    }
  };

  const deleteUser=async (index)=>{

     const res= await axios.post('/api/delete',{Id:index});

     if(res.data.success){
        message.success(res.data.message);
     }else{
      message.success(res.data.message);
     }

     window.location.reload();

  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
    <div  className="table-container" >
    <table  >
  <thead>
    <tr>
      <th>Name</th>
      <th>DATE</th>
      <th>TIME</th>
      <th>PRICE</th>
      <th>DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
    {user.map((userData) => (
      <tr key={userData._id}>
        <td>{userData.name}</td>
        <td>{userData.date}</td>
        <td>{userData.time}</td>
        <td>{userData.price}</td>
        <td>{userData.des}</td>
        <td>
        <Link to={{
        pathname: '/update',
        search: `?data=${encodeURIComponent(JSON.stringify(userData))}`
      }}> <button >Edit</button></Link> 
        
          <button onClick={()=>deleteUser(userData._id)}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
</div>
    </>
  );
}

export default Trans;
