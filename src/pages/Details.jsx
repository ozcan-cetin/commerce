import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AiOutlineStar } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { ProductContext } from '../context/ProductContext';
const Details = () => {
  const navigate = useNavigate();
  const {id} =useParams();
  const [detail,setDetail]=useState([])
  const {loading, setLoading} = useContext(ProductContext)

  let singleUrl=`https://course-api.com/react-store-single-product?id=${id}`
const getProductDetails= async()=>{
  // setLoading(true)
  try{
    const {data}=await axios.get(singleUrl)
    setDetail(data)
    // setLoading(false)
  }catch(err){
    console.log(err);
    // setLoading(false)
  }
}
console.log(detail);
  useEffect(() => {
    getProductDetails()
  }, [])
  // console.log(getProductDetails)

const {name, reviews, price, description, stock, company, colors, images} = detail

const {url} = images[0].thumbnails.full

// console.log(typeof(images));
  return (
    <div>
      <div className="details-header py-2 ">
        <h1 className="details-h1 p-3 container">
          <span onClick={() => navigate("/")}>Home</span>
          <span onClick={() => navigate("/products")}> / Products</span>
          <span className='text-capitalize'> / {name}</span>
        </h1>
      </div>
      <div className='container row m-auto'>
        <div className='col-12'>
          <button className='details-backBtn text-uppercase p-2 border-0 rounded-2 my-1' onClick={()=>navigate("/products")}>Back To Products</button>
        </div>

        <div className="details-imgDiv col-md-6">
          <div>{
          <img src={url} alt="" />
            }</div>
          <div>
            {/* {images?.map((item)=>{
              const{}=item;
              img */}
            {/* })} */}
          </div>
        </div>


        <div className="details-content col-md-6">
          <h1 className='text-capitalize'>{name}</h1>
          <div className="stars">
            <span><AiOutlineStar/></span>
            <span><AiOutlineStar/></span>
            <span><AiOutlineStar/></span>
            <span><AiOutlineStar/></span>
            <span><AiOutlineStar/></span>
            <span>({reviews} customer reviews)</span>
          </div>
          <h3> ${String(price).slice(0, 3) + "." + String(price).slice(3)}</h3>
          <p>{description}</p>
          <p><span>Available:</span>{stock ? "In Stock" : "Out Of Stock"}</p>
          <p className='text-capitalize'><span>SKU:</span>{id}</p>
          <p className="text-capitalize"><span>Brand:</span>{company}</p>
          <hr />
          <div>
            <span>Colors:</span>
            {
              colors?.map((item)=>{
                return(
                  <button style={{backgroundColor:item}} className="rounded-circle border-0 mx-1">
                  <TiTick/>
                </button>
                )
              })
            }
          </div>
          <div className='d-flex align-items-center'>
            <button className='bg-transparent border-0 fs-3'><FaPlusCircle/></button>
            <h3 className='m-0'>1</h3>
            <button className='bg-transparent border-0 fs-3'><FaMinusCircle/></button>
          </div>
          <button onClick={()=>navigate("/cart")} className="cartBtn p-2 border-0 rounded-2 my-1">ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}
export default Details
