import React, { useContext, useEffect, useState } from 'react'
import { FaPlusCircle, FaMinusCircle, FaTrash } from "react-icons/fa";
import { ProductContext } from '../context/ProductContext';

const SingleCart = ({cartItem}) => {
const {id, amount, detail, color, date} = cartItem
// console.log(cartItem);
// console.log(detail.images[0])
// const [quantity, setQuantity] = useState(amount)
const {cart, setCart} = useContext(ProductContext)

const handleClick = (id) => {
    // console.log(id);
    const newCart = cart.filter((item)=>item.id !== id)
    setCart(newCart)    
  }
// useEffect(() => {
//   setQuantity(quantity === 10 ? quantity : quantity + 1)
//   changeQuantity()
// }, [amount])


const increaseQuantity = (id) =>{
  if(cart.length>0){
    let newCart = cart.filter((item)=>item.id===id)
    amount < 10 ? newCart[0].amount=amount+1 : newCart[0].amount=amount
  let testcart=cart.filter((item)=>item.id!==id)
  setCart([...testcart, ...newCart])
  // let tempcart=cart
  // setCart(tempcart.sort((a,b)=>a.date-b.date))
  // console.log(tempcart)
    } }
const decreaseQuantity = (id) =>{
  if(cart.length>0){
    let newCart = cart.filter((item)=>item.id===id)
    amount > 1 ? newCart[0].amount=amount-1 : newCart[0].amount=amount
 
  let testcart=cart.filter((item)=>item.id!==id)
  setCart([...testcart, ...newCart])
  // let tempcart=cart.sort((a,b)=>a.date-b.date)
  // setCart(tempcart)
    } }

  return (
    <div>
        <div className="container">
         <div className="d-flex justify-content-evenly align-items-center row my-5">
          <div className="d-flex justify-content-start align-items-center col-3 gap-3">
            <div className="cart-img">
            <img src={detail.images[0].url} alt={detail.images[0]} />
          </div>
          <div className="d-flex flex-column">
            <span className='text-capitalize'>{detail.name}</span>
            <span className="d-flex">
              Color:{ <span style={{ backgroundColor: color }} className="rounded-2 border-0 mx-1"><p className="cart-default-color mx-2">x</p></span> }
              {/* {detail.colors.map((item, index) => {
                return (
                  <span
                    style={{ backgroundColor: item }}
                    key={index}
                    className="rounded-2 border-0 mx-1"
                  >
                    <p className="cart-default-color mx-2">x</p>
                  </span>
                );
              })} */}
            </span>
          </div>
          </div>
          
          <div className="col-2">
            <span>${String(detail.price).slice(0, 3) + "." + String(detail.price).slice(3)}</span>
          </div>
          <div className='details-minusplusDiv d-flex align-items-center col-3 gap-2'>
            {/* <button className='border-0 fs-3' onClick={()=>setQuantity(quantity === 10 ? quantity : quantity + 1)}><FaPlusCircle/></button> */}
            <button className='border-0 fs-3 plus' onClick={()=>increaseQuantity(id)}><FaPlusCircle/></button>
            <h3 className='m-0'>{amount}</h3>
            <button className='border-0 fs-3 minus' onClick={()=>decreaseQuantity(id)}><FaMinusCircle/></button>
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
