import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiOrderPlayFill } from "react-icons/ri";
import { FaBorderAll } from "react-icons/fa";
import { ProductContext } from "../context/ProductContext";
import SingleProduct from "../components/SingleProduct";
import { TiTick } from "react-icons/ti";

const _ = require('underscore'); //! UNDERSCORE********** _.intersection([][][])
// console.log(_.intersection());

const Products = () => {
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);
  let highestPrice = []
  products?.map((item)=>highestPrice.push(item.price))
  const defaultPrice = Math.max(...highestPrice)

  const [tickColor, setTickColor] = useState(false);
  const [category, setCategory] = useState("all");
  const [newCompany, setNewCompany] = useState("all");
  const [newColor, setNewColor] = useState("all")
  const [newProducts, setNewProducts] = useState(products);
  const [price, setPrice] = useState(defaultPrice)
  const [foundedProduct, setFoundedProduct] = useState(23)
  const [sortedProduct, setSortedProduct] = useState("Price(Lowest)")

  // console.log(newProducts);

  // console.log(products);

  const categories = ["All", ...new Set(products.map((item) => item.category))];

  const company = ["All", ...new Set(products.map((item) => item.company))];

  const tempColors = [];
  // console.log([...new Set(products.map((item)=>item.category))])
  // console.log(
    products.map((item) => item.colors.map((color2) => tempColors.push(color2)))
  // );
  // console.log(products);
  const colors = [...new Set(tempColors)];
  // console.log(colors);


  useEffect(() => {
    // console.log("test");
    handleCategory();
  }, [category, newCompany, newColor, price]);

  useEffect(()=>{
    setFoundedProduct(newProducts.length)
  },[newProducts])

  useEffect(()=>{
    sortProducts()
  },[sortedProduct])


//! price format
  const costing= (price) => {
    return parseFloat(price).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }




  const handleCategory = () => {
    // console.log(category);
    // console.log(newCompany);
    // console.log(newColor)
    // console.log(price)
    //! underscore version************
    if (category === "all" && newCompany === "all" && newColor === "all" && price === defaultPrice) {
      setNewProducts(products);
    } else{
      let tempCategory;
      let tempCompany;
      let tempColor;
      let tempPrice;

      if(category !== "all"){
        tempCategory = products?.filter((item) => item.category === category)
      }else{
        tempCategory= products
      }
      if(newCompany !== "all"){
        tempCompany = products?.filter((item)=>item.company === newCompany)
      }else{
        tempCompany = products
      }
      if(newColor !== "all"){
        tempColor = products?.filter((item)=>item.colors.includes(newColor))
      }else{
        tempColor = products
      }
      if(price !== defaultPrice){
        tempPrice = products?.filter((item)=>item.price < price)
      }else{
        tempPrice = products
      }
      // const _ = require('underscore')
      // console.log(_.intersection(tempCategory, tempCompany, tempColor, tempPrice));
      setNewProducts(_.intersection(tempCategory, tempCompany, tempColor, tempPrice))
    }



    // if (category === "all" && newCompany === "all" && newColor === "all" && price === defaultPrice) {
    //   setNewProducts(products);
    // } 
    // else if (category !== "all" && newCompany === "all" && newColor === "all" && price === defaultPrice) {
    //   setNewProducts(products?.filter((item) => item.category === category));
    // }
    // else if (category === "all" && newCompany !== "all" && newColor === "all" && price === defaultPrice) {
    //   setNewProducts(products?.filter((item)=>item.company === newCompany));
    // }
    // else if (category === "all" && newCompany === "all" && newColor !== "all" && price === defaultPrice) {
    //   setNewProducts(products?.filter((item)=>item.colors.includes(newColor)));
    // }
    // else if (category === "all" && newCompany === "all" && newColor === "all" && price !== defaultPrice) {
    //   setNewProducts(products?.filter((item)=>item.price < price));
    // }
    // else if (category !== "all" && newCompany !== "all" && newColor === "all" && price === defaultPrice) {
    //   setNewProducts(products?.filter((item) => item.category === category)?.filter((item)=>item.company === newCompany));
    // }
    // else if (category !== "all" && newCompany === "all" && newColor !== "all" && price === defaultPrice) {
    //   setNewProducts(products?.filter((item) => item.category === category)?.filter((item)=>item.colors.includes(newColor)));
    // }
    // else if (category !== "all" && newCompany === "all" && newColor === "all" && price !== defaultPrice) {
    //   setNewProducts(products?.filter((item) => item.category === category)?.filter((item)=>item.price < price));
    // }
    // else if (category === "all" && newCompany !== "all" && newColor !== "all" && price === defaultPrice) {
    //   setNewProducts(products?.filter((item) => item.company === newCompany)?.filter((item)=>item.colors.includes(newColor)));
    // }
    // else if (category === "all" && newCompany !== "all" && newColor === "all" && price !== defaultPrice) {
    //   setNewProducts(products?.filter((item) => item.company === newCompany)?.filter((item)=>item.price < price));
    // }
    // else if (category === "all" && newCompany === "all" && newColor !== "all" && price !== defaultPrice) {
    //   setNewProducts(products?.filter((item)=>item.colors.includes(newColor))?.filter((item)=>item.price < price));
    // }
    // else if (category !== "all" && newCompany !== "all" && newColor !== "all" && price === defaultPrice) {
    //   setNewProducts(products?.filter((item) => item.category === category)?.filter((item) => item.company === newCompany)?.filter((item)=>item.colors.includes(newColor)));
    // }
    // else if (category !== "all" && newCompany === "all" && newColor !== "all" && price !== defaultPrice) {
    //   setNewProducts(products?.filter((item) => item.category === category)?.filter((item)=>item.colors.includes(newColor))?.filter((item)=>item.price < price));
    // }
    // else if (category === "all" && newCompany !== "all" && newColor !== "all" && price !== defaultPrice) {
    //   setNewProducts(products?.filter((item) => item.company === newCompany)?.filter((item)=>item.colors.includes(newColor))?.filter((item)=>item.price < price));
    // }
  };

// const liste = [{a:5, b:"ali"}, {a:3, b:"veli"}, {a:3, b:"deli"}, {a:1, b:"ali"}]
// const newliste = []
// const yepyeni = newliste.concat(liste)
// console.log(yepyeni.sort((a,b)=>a.a - b.a))
// console.log(liste)

//! *************************************SORT THE PRODUCTS
const sortProducts = () => {
  let empty = []
console.log(sortedProduct);
if (sortedProduct === "Price(Lowest)"){
  const newStatus = empty.concat(newProducts)
setNewProducts(newStatus?.sort((a,b)=>a.price - b.price))
empty = []
}
if (sortedProduct === "Price(Highest)"){
  const newStatus = empty.concat(newProducts)
setNewProducts(newStatus?.sort((a,b)=>b.price - a.price))
empty = []
}
// if (sortedProduct === "Name(A-Z)"){
//   const newStatus = empty.concat(newProducts)
// setNewProducts(newStatus?.sort((a, b)=>a.name))
// empty = []
// }
if(sortedProduct === "Name(A-Z)"){
  let names=newProducts.map((item)=>item.name)
  names.sort()
  let result=[]
  for(let i=0;i<names.length;i++){
    for(let k=0;k<newProducts.length;k++){
      if(names[i]===newProducts[k].name){
        result.push(newProducts[k])
      }
    }
  }
  setNewProducts(result)
}
// if(sortedProduct === "Name(Z-A)"){
//   let names=newProducts.map((item)=>item.name)
//   names.reverse()
//   let result=[]
//   for(let i=0;i<names.length;i++){
//     for(let k=0;k<newProducts.length;k++){
//       if(names[i]===newProducts[k].name){
//         result.push(newProducts[k])
//       }
//     }
//   }
//   setNewProducts(result)
// }
  }

  
   
  return (
    <div>
      <div className="products-header py-2 ">
        <h1 className="products-h1 p-3 container">
          <span onClick={() => navigate("/")}>Home</span>
          <span> / Products</span>
        </h1>
      </div>
      <main className="container row m-auto mt-3 mt-md-5 p-0">
        <div className="search col-2 m-0 p-0">
          <form action="">
            <input type="search" placeholder="Search" className="px-1" />

            {/* //! *********************************** CATEGORY */}
            <ul className="category p-0 m-0">
              <h6>Category</h6>
              {categories.map((item, categoryIndex) => {
                return (
                  <li
                    className="text-capitalize list-unstyled"
                    onClick={(e) =>
                      setCategory(e.target.innerText.toLowerCase())
                    }
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
            {/* //! *********************************** COMPANY */}
            <h6>Company</h6>
            <select
              name="company"
              id="company"
              onChange={(e) => 
                setNewCompany(e.target.value.toLowerCase())
              }
            >
              {company.map((item) => {
                return (
                  <option value={item} className="text-capitalize">
                    {item}
                  </option>
                );
              })}
            </select>
            {/* //! *********************************** COLORS */}
            <h6>Colors</h6>
            <div className="d-flex">
            <span style={{cursor:"pointer"}} className="border-0 bg-transparent" onClick={()=>{setNewColor("all"); setTickColor(false)}}>All</span>
               {colors.map((item, tickIndex) => {
              return (
                <span style={{backgroundColor:item, cursor:"pointer"}} key={tickIndex} className="rounded-circle border-0 mx-1" onClick={()=>{setTickColor(tickIndex); setNewColor(item)}}>
                  {tickColor === tickIndex ? <TiTick className='text-white m-1 fs-5'/> : <TiTick className='product-default-color m-1 fs-5'/>}
                </span>
              );
            })}
            </div>
           
            {/* //! *********************************** PRICE */}
            <h6>Price</h6>
            <p>${costing(price)}</p>
            <input type="range" min="0" max={Math.max(...highestPrice)} value={price} onChange={(e)=>setPrice(e.target.value)}/>
          </form>
        </div>

        <div className="main-products col-10 m-0">
          <div className="main-products-upper d-flex align-items-center justify-content-between row">
            <div className="upper-btnDiv col-4 d-flex align-items-center justify-content-between">
              <div className="products-btnDiv d-flex align-items-center gap-1 p-0 m-0">
                <button className="d-flex align-items-center border-0 bg-transparent fs-4">
                  <FaBorderAll />{" "}
                </button>
                <button className="d-flex align-items-center border-0 bg-transparent fs-4">
                  <RiOrderPlayFill />{" "}
                </button>
              </div>
              <span>{foundedProduct} Products Found</span>
            </div>
            {/* //! *********************************** SORT PRODUCTS */}
            <div className="line-through border border-1 border-bottom border-dark col-5 "></div>
            <div className="col-3">
              <span className="me-2">Sort By</span>
              <select
                name="select"
                id="select"
                className="border-0 bg-transparent"
                onChange={(e)=>setSortedProduct(e.target.value)}
              >
                <option value="Price(Lowest)">Price(Lowest)</option>
                <option value="Price(Highest)">Price(Highest)</option>
                <option value="Name(A-Z)">Name(A-Z)</option>
                <option value="Name(Z-A)">Name(Z-A)</option>
              </select>
            </div>
          </div>
          <div className="main-products-bottom row">
            {newProducts?.map((product) => {
              return <SingleProduct key={product.id} product={product} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
};
export default Products;
