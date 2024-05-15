import { useState } from "react";
import "./update.css";
import axios from "axios";
import { message } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const user = JSON.parse(searchParams.get("data"));
  const [name, setName] = useState(user.name);
  const [date, setDate] = useState(user.date);
  const [time, setTime] = useState(user.time);
  const [price, setPrice] = useState(user.price);
  const [des, setDes] = useState(user.des);
  let data = { name, date, time, price, des };
  const navigate = useNavigate();

  const handleButton = async () => {
    try {
      const res = await axios.post("/api/update", { data, id: user._id });

      if (res.data.success) {
        message.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }

    navigate("/trans");
  };

  return (
    <>
      <div className="container">
        <h2 className="title">Khata Book</h2>
        <div className="input-group">
          <label>Customer Name:</label>
          <input
            type="text"
            id="customer-name"
            name="name"
            placeholder="Enter customer name"
            defaultValue={user.name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Date:</label>

          <input
            type="date"
            id="date"
            defaultValue={user.date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Time:</label>
          <input
            type="time"
            id="time"
            defaultValue={user.time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Price:</label>
          <input
            type="number"
            id="price"
            defaultValue={user.price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Description:</label>
          <input
            type="text"
            id="description"
            defaultValue={user.des}
            onChange={(e) => setDes(e.target.value)}
          />
        </div>
        
        <button className="btn" onClick={handleButton}>
          Update
        </button>
      </div>
    </>
  );
};

export default Update;
