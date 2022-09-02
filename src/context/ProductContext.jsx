import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { createContext } from 'react'
let url="https://course-api.com/react-store-products"
let singleUrl="https://course-api.com/react-store-single-product?id="
export const ProductContext=createContext()
const ProductContextProvider = ({children}) => {
const [featured,setFeatured]=useState([])
const [products,setProducts]=useState([])
const [loading,setLoading]=useState(false)
const [defaultPrice, setDefaultPrice] = useState([])
const getProducts=async()=>{
  setLoading(true);
  try{
    const {data}=await axios.get(url);
    // console.log(data);
    setProducts(data)
    setFeatured(data.filter((item)=>item.hasOwnProperty("featured")))
    setDefaultPrice(Math.max(...data.map((item) => item.price)))
    setLoading(false)
  }
  catch(err){
    console.log(err)
    setLoading(false)
  }
}
// console.log(featured);
useEffect(() => {
  getProducts()
}, [])

const [cart, setCart] = useState(
  JSON.parse(localStorage.getItem('cart')) || []
);

useEffect(() => {
  // cart && cart.sort((a,b)=>a.date-b.date)
  // setCart(cart.sort((a,b)=>a.date-b.date))
  localStorage.setItem('cart', JSON.stringify(cart))
}, [cart]);

  return (
    <ProductContext.Provider value={{featured, products, loading, cart, setCart, defaultPrice}}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductContextProvider;