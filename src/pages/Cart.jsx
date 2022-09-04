import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SingleCart from "../components/SingleCart";
import { ProductContext } from "../context/ProductContext";


const Cart = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  // const{state}=useLocation() //! bu daha mantıklı

  const {cart, setCart, costing} = useContext(ProductContext)
  const [subTotal,setSubTotal]=useState()

  cart.sort((a,b)=>a.date-b.date)
  // console.log(cart)
  
  //shipping fee

  let shippingFee=5.34

  const calculateTotal = ()=>{
    let sum=0
    cart.map((item)=>sum+=(item.amount)*(item.detail.price))
    setSubTotal(sum)
  }
  useEffect(() => {
    calculateTotal()
  }, [cart])

  return (
    <div>
      <div className="about-header py-2">
        <h1 className="about-h1 p-3 container">
          <span onClick={() => navigate("/")}>Home</span>
          <span> / Cart</span>
        </h1>
      </div>
      <main className="cart-main-part container">
      <div className="cart-upper-part mt-4 border-bottom border-secondary d-none d-md-grid">
        <p className="text-center">Item</p>
        <p className="text-center">Price</p>
        <p className="text-center">Quantity</p>
        <p className="text-center">Subtotal</p>
        <p className="text-center"></p>
      </div>
        {/* <hr className="container"/> */}
      {cart?.map((cartItem, index)=> <SingleCart key={index} cartItem={cartItem}/>)}
      </main>

<div className="cart-bottom-button container d-flex justify-content-between mb-3">
  <button onClick={()=>navigate("/products")}>Continue Shopping</button>
  <button onClick={()=>setCart([])}>Clear Shopping Cart</button>
</div>
<div className="last-part d-flex justify-content-center align-items-end flex-column container">
      <div className="my-3 my-md-4 p-md-2 ">
      <div className="total-order p-3 m-0 px-md-5">
        <div className="fee-div py-3 m-0 ">
          <p className="fw-bold fs-5 m-0"><span>Subtotal:</span><span>${costing(subTotal)}</span></p>
          <p className="fs-5 m-0"><span>Shipping Fee:</span><span>${costing(shippingFee)}</span></p>
        </div>
        <div className="total-fee py-3">
        <p className="fw-bold fs-4 m-0"><span>Order Total:</span><span>${costing(subTotal+shippingFee)}</span></p> </div>
      </div>
      <button className="cart-login-btn btn rounded-3 fw-bold w-100 my-2" onClick={()=>navigate("/login")}>LOGIN</button>
      </div>
        </div>
    </div>
  );
};

export default Cart;
