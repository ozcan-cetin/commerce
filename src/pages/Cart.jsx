import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [amount, setAmount] = useState(location.state.quantity)
  console.log(location.state);
  return (
    <div>
      <div className="about-header py-2">
        <h1 className="about-h1 p-3 container">
          <span onClick={() => navigate("/")}>Home</span>
          <span> / Cart</span>
        </h1>
      </div>
      <div className="container">
        <div className="d-flex justify-content-around row">
          <span className="col-3">Item</span>
          <span className="col-3">Price</span>
          <span className="col-3">Quantity</span>
          <span className="col-3">Subtotal</span>
        </div>
        <div className="d-flex justify-content-around align-items-center row">
          <div className="d-flex justify-content-around align-items-center col-3">
            <div className="cart-img">
            <img src={location.state.item.images[0].url} alt="" />
          </div>
          <div className="d-flex flex-column">
            <span>{location.state.item.name}</span>
            <span className="d-flex">
              Color:
              {location.state.item.colors.map((item, index) => {
                return (
                  <button
                    style={{ backgroundColor: item }}
                    key={index}
                    className="rounded-2 border-0 mx-1"
                  >
                    <p className="cart-default-color mx-2">x</p>
                  </button>
                );
              })}
            </span>
          </div>
          </div>
          
          <div className="col-3">
            <span>${String(location.state.item.price).slice(0, 3) + "." + String(location.state.item.price).slice(3)}</span>
          </div>
          <div className='details-minusplusDiv d-flex align-items-center col-3'>
            <button className='border-0 fs-3' onClick={()=>setAmount(amount === 10 ? amount : amount + 1)}><FaPlusCircle/></button>
            <h3 className='m-0'>{amount}</h3>
            <button className='border-0 fs-3' onClick={()=>setAmount(amount === 1 ? amount : amount - 1)}><FaMinusCircle/></button>
          </div>
          <div className="col-3">
          ${String(Number(amount)*Number(location.state.item.price)).slice(0, 3) + "." + String(Number(amount)*Number(location.state.item.price)).slice(3)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
