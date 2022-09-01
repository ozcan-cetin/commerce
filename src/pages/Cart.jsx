import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SingleCart from "../components/SingleCart";
import { ProductContext } from "../context/ProductContext";


const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const{state}=useLocation() //! bu daha mantıklı
  // const [cart, setCart] = useState([])

  // console.log(location);

  // useEffect(() => {
  //  setCart([...cart, [location.state]])
  // }, [])
  const {cart, setCart} = useContext(ProductContext)

  // console.log(cart)
  
  
  // console.log(location.state);
  return (
    <div>
      <div className="about-header py-2">
        <h1 className="about-h1 p-3 container">
          <span onClick={() => navigate("/")}>Home</span>
          <span> / Cart</span>
        </h1>
      </div>
      {/* {cart?.map((cartItem, index)=> <SingleCart cart={cart} setCart={setCart} cartItem={cartItem} key={index}/>)} */}
      <div className="d-flex justify-content-center container">
          <span className="col-2 text-center">Item</span>
          <span className="col-2">Price</span>
          <span className="col-3 ">Quantity</span>
          <span className="col-2">Subtotal</span>
        </div>
        <hr className="container"/>
      {cart?.map((cartItem)=> <SingleCart key={cartItem.id} cartItem={cartItem}/>)}
<div className="cart-bottom-button container d-flex justify-content-between mb-3">
  <button onClick={()=>navigate("/products")}>Continue Shopping</button>
  <button onClick={()=>setCart([])}>Clear Shopping Cart</button>
</div>
    </div>
  );
};

export default Cart;
