import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AiOutlineStar } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { ProductContext } from '../context/ProductContext';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
const Details = () => {
  const navigate = useNavigate();
  const {id} =useParams();
  const [detail,setDetail]=useState([])
  const {loading, setLoading, cart, setCart} = useContext(ProductContext)
  const [index, setIndex] = useState(0)
  const [tickColor, setTickColor] = useState(0)
  const [amount, setAmount] = useState(1)
  // const [buyproduct, setBuyproduct] = useState({
  //   item:
  //   quantity:amount,

  // })

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
// console.log(detail);
  useEffect(() => {
    getProductDetails()
  }, [])
  // console.log(getProductDetails)

const {name, reviews, price, description, stock, company, colors, images, stars} = detail

const newImages = images?.map((item)=>item.thumbnails.large.url)
console.log(newImages)

// console.log(images);
// console.log(colors[tickColor])

const addToCart = () =>{
  // const id = new Date().getTime();
  const newcart = { id: id, detail: detail, amount:amount, color:colors[tickColor] };
  setCart([...cart, newcart]);
  // setDetail([])
  // setAmount(1)
  navigate("/cart", {state:setAmount})
}
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
          <div className='details-imgDiv-upper'>
          <img src={newImages && newImages[index]} alt="" />
            </div>
          <div className='d-flex justify-content-between mt-1'>
           {newImages?.map((item, index)=>{
            return(
              <div key={index}  className='card details-imgDiv-bottom' onClick={()=>setIndex(index)}>
                <img src={item} alt="" />
              </div>
            )
           })}
          </div>
        </div>


        <div className="details-content col-md-6">
          <h1 className='text-capitalize'>{name}</h1>
          < div className="stars fs-4 d-flex align-items-center flex-row text-warning">
            <span className="d-flex align-items-center">
              {stars >=1 ? <BsStarFill/> : stars>=0.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span className="d-flex align-items-center">
              {stars >=2 ? <BsStarFill/> : stars>=1.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span className="d-flex align-items-center">
              {stars >=3 ? <BsStarFill/> : stars>=2.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span className="d-flex align-items-center">
              {stars >=4 ? <BsStarFill/> : stars>=3.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span className="d-flex align-items-center">
              {stars ==5 ? <BsStarFill/> : stars>=4.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span className="single-detail-review d-flex align-items-center fs-5 ps-2">({reviews} customer reviews)</span>
          </div>
          <h3> ${String(price).slice(0, 3) + "." + String(price).slice(3)}</h3>
          <p>{description}</p>
          <p><span>Available:</span>{stock ? "In Stock" : "Out Of Stock"}</p>
          <p className='text-capitalize'><span>SKU:</span>{id}</p>
          <p className="text-capitalize"><span>Brand:</span>{company}</p>
          <hr />
          <div className='d-flex'>
            <span>Colors:</span>
            <div className='d-flex justify-content-start align-items-center'>
               {
              colors?.map((item, tickIndex)=>{
                return(
                  <button style={{backgroundColor:item}} key={tickIndex} className="rounded-circle border-0 mx-1 " onClick={()=>setTickColor(tickIndex)}>
                  {tickColor === tickIndex ? <TiTick className='text-white m-1 fs-5'/> : <p className='default-color mx-2'><TiTick/></p>}
                </button>
                )
              })
            }
            </div>
           
          </div>
          <div className='details-minusplusDiv d-flex align-items-center'>
            <button className='border-0 fs-3' onClick={()=>setAmount(amount === 10 ? amount : amount + 1)}><FaPlusCircle/></button>
            <h3 className='m-0'>{amount}</h3>
            <button className='border-0 fs-3' onClick={()=>setAmount(amount === 1 ? amount : amount - 1)}><FaMinusCircle/></button>
          </div>
          {/* <button onClick={()=>navigate("/cart", {state:{quantity:amount, item:detail}})} className="cartBtn p-2 border-0 rounded-2 my-1">ADD TO CART</button> */}
          <button onClick={addToCart} className="cartBtn p-2 border-0 rounded-2 my-1">ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}
export default Details
