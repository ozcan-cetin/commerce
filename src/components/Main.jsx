import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import FeaturedProduct from "./FeaturedProduct";

import Glider from "react-glider";
import "glider-js/glider.min.css";


const Main = () => {

  const { featured } = useContext(ProductContext);
  const navigate = useNavigate();
  // console.log(featured.slice(0,3));
  // console.log(zoom)
  return (
    <main className="py-5 featured mt-3 mt-md-5">
      <h1 className="text-center fw-bold mt-2 main-title">Featured Products</h1>
      <div className="underline m-auto mb-3"></div>
      <div className="container row m-auto p-0">
        {/* //! slider */}


          <Glider
            draggable
            hasArrows
            hasDots
            slidesToShow={3}
            slidesToScroll={3}
            >
            {featured.map((item) => {
            return (
              <ul className="row m-auto">
            <li className="list-unstyled">
              {" "}
              <FeaturedProduct key={item.id} item={item} />
            </li>
            </ul>
            );
          })}
          </Glider>;
    
      </div>
      <div className="text-center">
        {" "}
        <button
          className="text-uppercase text-white py-1 px-3 border-0 rounded-2 mt-4"
          onClick={() => navigate("/products")}
        >
          All Products
        </button>
      </div>
    </main>
  );
};
export default Main;
