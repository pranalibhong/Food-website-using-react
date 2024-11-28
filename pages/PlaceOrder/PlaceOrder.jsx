// step 28:- PlaceOrder.jsx(collect user information using form and also show final bill)

import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div>
      <form className='place-order'>
        <div className="place-order-left">
          <p className='title'>Delivery Information</p>
          <div className="multi-fields">
            <input type='text' placeholder='First name' />
            <input type='text' placeholder=' Lastname' />
          </div>
          <input type="email" placeholder='Email address' />
          <input type="text" placeholder='Street' />
          <div className="multi-fields">
            <input type='text' placeholder='City' />
            <input type='text' placeholder=' State' />
          </div>
          <div className="multi-fields">
            <input type='text' placeholder='Zip code' />
            <input type='text' placeholder=' Country' />
          </div>
          <input type='text' placeholder='phone' />
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
          <button>PROCEED TO PAYMENT</button>
        </div>

        </div>
      </form>
    </div>
  )
}

export default PlaceOrder
