import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { ApiContext } from '../../context/ApiContext';

function Cart() {
  const {
    removeCart,
    cartItems,
  } = useContext(StoreContext);

  const { meals } = useContext(ApiContext);
  const hasItemsInCart = meals?.some(item => cartItems[item.idMeal] > 0);
  const price = 100
  console.log(meals, "full meals");
  console.log(cartItems, "cart");

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {/* Conditional Rendering */}
        {!hasItemsInCart ? (
          <p>No dishes available</p>
        ) : (
          meals?.map((item, index) => {
            if (cartItems[item.idMeal] > 0) {
              return (
                <>
                  <div className="cart-items-title cart-items-item" key={index}>
                    <img src={item.strMealThumb} alt="" />
                    <p>${price}</p>
                    <p>{item.strMeal}</p>
                    <p>{cartItems[item.idMeal]}</p>
                    <p>{price * cartItems[item.idMeal]}</p>
                    <p className='cart-items-remove' onClick={() => removeCart(item.idMeal)}>X</p>
                  </div>
                  <hr />
                </>
              );
            }
            return null; // Return null if the condition is not met
          })
        )}
      </div>
    </div>
  );
}

export default Cart;
