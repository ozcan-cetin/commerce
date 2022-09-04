import React, { useContext} from "react";
import { FaPlusCircle, FaMinusCircle, FaTrash } from "react-icons/fa";
import { ProductContext } from "../context/ProductContext";

const SingleCart = ({ cartItem }) => {
  const { id, amount, detail, color, date } = cartItem;

  const { cart, setCart, costing } = useContext(ProductContext);

  const handleClick = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };
 //! *************************************INCREASE THE AMOUNT
  const increaseQuantity = (id) => {
    if (cart.length > 0) {
      let newCart = cart.filter((item) => item.id === id);
      amount < 10
        ? (newCart[0].amount = amount + 1)
        : (newCart[0].amount = amount);
      let testcart = cart.filter((item) => item.id !== id);
      setCart([...testcart, ...newCart]);
    }
  };
//! *************************************DECREASE THE AMOUNT
  const decreaseQuantity = (id) => {
    if (cart.length > 0) {
      let newCart = cart.filter((item) => item.id === id);
      amount > 1
        ? (newCart[0].amount = amount - 1)
        : (newCart[0].amount = amount);

      let testcart = cart.filter((item) => item.id !== id);
      setCart([...testcart, ...newCart]);
    }
  };

  return (
        <div className="container single-cart-container m-0 p-0 py-3 my-2 border-bottom border-bottom-1 border-secondary d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-start align-items-center general-img-div">
            <div className="cart-img">
              <img src={detail.images[0].url} alt={detail.images[0]} />
            </div>
            <div className="d-flex flex-column ms-1 ms-sm-3 img-name-color">
              <span className="text-capitalize product-name fw-bold">{detail.name}</span>
              <span className="d-flex justify-content-start align-items-center product-color">
                Color:
                {
                  <span
                    style={{ backgroundColor: color }}
                    className="rounded-2 border-0 mx-1"
                  >
                    <p className="cart-default-color mx-2">x</p>
                  </span>
                }
              </span>
              <span className="single-cart-price d-md-none">${costing(detail.price)}</span>
            </div>
          </div>

          <div className="d-none d-md-flex justify-content-center align-items-center">
            <span className="single-cart-price ms-5 ps-5">
            ${costing(detail.price)}
            </span>
          </div>
          <div className="d-flex  justify-content-center align-items-center me-3">
            <button
              className="border-0 fs-3 plus"
              onClick={() => increaseQuantity(id)}
            >
              <FaPlusCircle />
            </button>
            <h3 className="m-0 mx-2">{amount}</h3>
            <button
              className="border-0 fs-3 minus"
              onClick={() => decreaseQuantity(id)}
            >
              <FaMinusCircle />
            </button>
          </div>
          <div className="d-none d-md-flex justify-content-center align-items-center single-cart-subtotal pe-4">
          ${costing(amount*detail.price)}
          </div>
          <div className="d-flex justify-content-center align-items-center">
          <button
            className="border-0 fs-3 bg-transparent text-danger d-flex justify-content-center align-items-center"
            onClick={() => handleClick(id)}
          >
            <FaTrash />
          </button>
          </div>
        </div>
  );
};
export default SingleCart;
