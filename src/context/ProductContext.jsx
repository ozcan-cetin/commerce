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
const [displayStyle,setDisplayStyle]=useState(true)
const [showSidebar,setShowSidebar]=useState(false)
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


  //! price format
  const costing = (price) => {
    return parseFloat(price)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  


// console.log(featured);
useEffect(() => {
  getProducts()
}, [])

const [cart, setCart] = useState(
  JSON.parse(localStorage.getItem('cart')) || []
);

useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart))
}, [cart]);

const [user, setUser] = useState(
  JSON.parse(localStorage.getItem('user'))
);

useEffect(() => {
  localStorage.setItem('user', JSON.stringify(user))
}, [user]);

  return (
    <ProductContext.Provider value={{featured, products, loading, cart, setCart, defaultPrice, costing, displayStyle,setDisplayStyle,setShowSidebar,showSidebar, user, setUser}}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductContextProvider;