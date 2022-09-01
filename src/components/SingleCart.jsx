import React, { useContext, useEffect, useState } from 'react'
import { FaPlusCircle, FaMinusCircle, FaTrash } from "react-icons/fa";
import { ProductContext } from '../context/ProductContext';

const SingleCart = ({cartItem}) => {
const {id, amount, detail} = cartItem
console.log(cartItem);
console.log(detail.images[0])
const [quantity, setQuantity] = useState(amount)
const {cart, setCart} = useContext(ProductContext)



    // console.log(cartItem[0].quantity);
    // const [amount, setAmount] = useState(cartItem[0].quantity)
    // const{id, name, stock, price, colors, images}=cartItem[0].item
    // console.log(cartItem[0].item);

    // const handleClick = (id) => {
    //     console.log(id);
    //     const newCart = cart.filter((delItem)=>delItem[0].item.id !== id)
    //     setCart(newCart)
    // }
    // useEffect(() => {
    //  changeQuantity()
    // }, [])
    const handleClick = (id) => {
        // console.log(id);
        const newCart = cart.filter((item)=>item.id !== id)
        setCart(newCart)    
      }
    const changeQuantity = (id) =>{
      setQuantity(amount === 10 ? amount : amount + 1)
      let newCart = cart.filter((item)=>item.id===id)
      newCart[0].amount=quantity
      // newCart = [...newCart, {"amount":quantity}]
      // const newCart = {...cartItem, amount:quantity}
      setCart([...cart, newCart])
      // console.log(newCart);
      // console.log(cartItem);
      // console.log(quantity)
    }

    // const liste =[{id:1, a:5, b:6},{id:2, c:8}]
    // console.log(liste);
    // const newlist = liste.filter((item)=>item.id===2)
    // newlist[0].c=10
    // console.log(newlist[0].c)
    // console.log(liste);
  return (
    <div>
        <div className="container">
        {/* <div className="d-flex justify-content-center row">
          <span className="col-2 text-center">Item</span>
          <span className="col-2">Price</span>
          <span className="col-3 ">Quantity</span>
          <span className="col-2">Subtotal</span>
        </div>
        <hr /> */}
        <div className="d-flex justify-content-center align-items-center row my-5">
          <div className="d-flex justify-content-start align-items-center col-3 gap-3">
            <div className="cart-img">
            <img src={detail.images[0].url} alt={detail.images[0]} />
          </div>
          <div className="d-flex flex-column">
            <span className='text-capitalize'>{detail.name}</span>
            <span className="d-flex">
              Color:
              {detail.colors.map((item, index) => {
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
            <span>${String(detail.price).slice(0, 3) + "." + String(detail.price).slice(3)}</span>
          </div>
          <div className='details-minusplusDiv d-flex align-items-center col-3 gap-2'>
            {/* <button className='border-0 fs-3' onClick={()=>setQuantity(amount === 10 ? amount : amount + 1)}><FaPlusCircle/></button> */}
            <button className='border-0 fs-3' onClick={()=>changeQuantity(id)}><FaPlusCircle/></button>
            <h3 className='m-0'>{quantity}</h3>
            <button className='border-0 fs-3' onClick={()=>setQuantity(amount === 1 ? amount : amount - 1)}><FaMinusCircle/></button>
          </div>
          <div className="col-2">
          ${String(Number(amount)*Number(detail.price)).slice(0, 3) + "." + String(Number(amount)*Number(detail.price)).slice(3)}
          </div>
        <button className='border-0 fs-3 bg-transparent text-danger col-1' onClick={()=>handleClick(id)}><FaTrash/></button>
        </div>
        <hr />
      </div>
    </div>
  )
}
export default SingleCart
