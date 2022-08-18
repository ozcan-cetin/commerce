import React, { useState } from 'react'
import { FaPlusCircle, FaMinusCircle, FaTrash } from "react-icons/fa";

const SingleCart = ({cart, setCart, cartItem}) => {
    // console.log(cartItem[0].quantity);
    const [amount, setAmount] = useState(cartItem[0].quantity)
    const{id, name, stock, price, colors, images}=cartItem[0].item
    // console.log(cartItem[0].item);

    const handleClick = (id) => {
        console.log(id);
        const newCart = cart.filter((delItem)=>delItem[0].item.id !== id)
        setCart(newCart)
    }
  return (
    <div>
        <div className="container">
        <div className="d-flex justify-content-center row">
          <span className="col-2 text-center">Item</span>
          <span className="col-2">Price</span>
          <span className="col-3 ">Quantity</span>
          <span className="col-2">Subtotal</span>
        </div>
        <hr />
        <div className="d-flex justify-content-center align-items-center row my-5">
          <div className="d-flex justify-content-start align-items-center col-3 gap-3">
            <div className="cart-img">
            <img src={images[0].url} alt={name} />
          </div>
          <div className="d-flex flex-column">
            <span className='text-capitalize'>{name}</span>
            <span className="d-flex">
              Color:
              {colors.map((item, index) => {
                return (
                  <span
                    style={{ backgroundColor: item }}
                    key={index}
                    className="rounded-2 border-0 mx-1"
                  >
                    <p className="cart-default-color mx-2">x</p>
                  </span>
                );
              })}
            </span>
          </div>
          </div>
          
          <div className="col-2">
            <span>${String(price).slice(0, 3) + "." + String(price).slice(3)}</span>
          </div>
          <div className='details-minusplusDiv d-flex align-items-center col-3 gap-2'>
            <button className='border-0 fs-3' onClick={()=>setAmount(amount === 10 ? amount : amount + 1)}><FaPlusCircle/></button>
            <h3 className='m-0'>{amount}</h3>
            <button className='border-0 fs-3' onClick={()=>setAmount(amount === 1 ? amount : amount - 1)}><FaMinusCircle/></button>
          </div>
          <div className="col-2">
          ${String(Number(amount)*Number(price)).slice(0, 3) + "." + String(Number(amount)*Number(price)).slice(3)}
          </div>
        <button className='border-0 fs-3 bg-transparent text-danger col-1' onClick={()=>handleClick(id)}><FaTrash/></button>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default SingleCart
