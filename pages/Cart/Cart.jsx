// step 26:- 1) fetch cartItems ,food_list, removeFromCart from storecontext because we create all function in it
// 2) add link tag on basket icon present in navbar, then create div for table titles which include cart items data,the map() use for add data in table,
// 3) for fetch users address info, we navigate proceed to checkout button to placeorder page, for that create use navigate  and add onclick to button(proceed to checkout), also show total bill in last placeorder page
// 4) Use addtToCart and removeFromCart function  to set increase and decrease button in quantity column side to item count,
// 5) create Functon(model) to show alert(confirmation) box before remove the product from cart page,and also create delete and cancel button

import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const { cartItems, food_list, addToCart, removeFromCart, deleteFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  // State to manage the modal visibility and selected item ID
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          {" "}
          {/* This div consist  the all title of table, and teble include  all cart items  */}
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {/* item is consider for individual item and index is consider for uniqur index */}
        {food_list.map((item, index) => {
          // check if loop, when id in cartitem is greater than 0 then show below div (i.e when add to art button click show product on cart page table in below format )
          if (cartItems[item.id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />                {/* show img of cart item*/}
                  <p>{item.name}</p>                             {/*cart item name */}
                  <p>${item.price}</p>                           {/*cart item price */}
                  <div className="quantity-controls">

                    <button
                      className="px-2 py-1 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded transition duration-200"
                      onClick={() => removeFromCart(item.id)}>-
                    </button> {/*decrease count by one */}

                    <span className="mx-2">{cartItems[item.id]}</span> {/*show item count present in cart page */}

                    <button
                      className="px-2 py-1 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded transition duration-200"
                      onClick={() => addToCart(item.id)}>+
                    </button> {/*------increase count by one---- */}
                  </div>

                  <p>$ {item.price * cartItems[item.id]}</p>  {/*-------show total of each product in table--------  */}

                  {/*------- Cross button logic (when corss button click it activate selectedItemId and also activate setIsModalOpen() and run it then it show confirmation message before delete theitem from cart. For this confirmation logic consider below isModalOpen() ) */}
                  <p className="text-black-500 text-lg cursor-pointer hover:text-red-600 transition duration-200"
                    onClick={() => {
                      setSelectedItemId(item.id);
                      setIsModalOpen(true);
                    }}><FaTrashAlt />
                  </p>  {/*cross button for remove product from cart */}

                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>

      {/*------------------------------------------- For total bill of user, below code refer---------------------------------------------------------------------- */}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2> {/* left hand side heading (bill title) */}
          <div>
            {/*for remaining part rather than heading  and also created 3 div for 3 numerical col */}
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>  {/*for fetch subtotal use getTotalCartAmount() created in storecontext */}
            </div>
            <hr />

            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() > 0 ? 2.0 : 0.0}</p>  {/*logic for show the delivery fee to user,it show 0 when nothing in cart and when any product enter is show delivery fee */}
            </div>
            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() > 0 ? getTotalCartAmount() + 2.0 : 0.0}
              </b>
            </div>

          </div>
          {/*----------give /order, because in app.js route, we consider /order for placeorder page------- */}
          <button onClick={() => navigate("/order")}> PROCEED TO CHECKOUT</button>
        </div>

        {/* -------------------------Allow customers to submit their feedback here-------------------------------------------------------------------------------------------- */}

        <div className="cart-promocode">
          <div>
            <p>If you have promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------For showing confirmation msg to user before delete the product ----------------------------------------------*/}
      {/* ----------------------------------------Confirmation Modal------------------------------------------------------------------------------------------ */}
      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8  shadow-xl max-w-sm w-full transform transition-all duration-300 scale-100 hover:scale-105">
            <h2 className="text-xl font-bold  text-center  text-gray-900 mb-4">Are you sure ?</h2>
            <p className="text-gray-700  mb-6">Are you sure you want to remove this item from cart?</p>
            <div className="flex justify-evenly space-x-4">
              <button
                className="px-8 py-2 bg-gray-300 text-gray-800  hover:bg-gray-400 transition duration-200"
                onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button
                className="px-8 py-2 bg-red-500 text-white  hover:bg-red-600 transition duration-200"
                onClick={() => {
                  deleteFromCart(selectedItemId);
                  setIsModalOpen(false);
                }}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
