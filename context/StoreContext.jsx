// step 13:-The provided code sets up a basic React Context API. The StoreContext is created to share data across components. The StoreContextProvider wraps child components, providing them access to the shared data. To make it functional, populate the contextValue object with the desired data and use the useContext hook to access it in child components.//
// step 16: Import food_list and called it in contextValue

import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

// create context using createContext for storing it create 
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

  const [cartItems, setCartItems] = useState({});


  // for add to cart feature
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prevCartItems) => ({
        ...prevCartItems,
        [itemId]: 1
      }))
    }
    else {
      setCartItems((prevCartItems) => ({
        ...prevCartItems,
        [itemId]: (prevCartItems[itemId] || 0) + 1, // Increment quantity or initialize to 1
      }))
    };
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [itemId]: prevCartItems[itemId] - 1

    }));
  };
  // when cart item is updated then it show in console for 
  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);


  
  // delete item present in add to cart 
  const deleteFromCart = (id) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[id]; // Remove the item entirely from the cart
      return updatedCart;
    });
  };

  // replace above function and create new function for calculate total of items present in cart  and make total(final) bill with delivery fee and send to customer 
  const getTotalCartAmount= () =>{
    let totalAmount = 0;   {/*set total bill to 0  */}
    for (const item in cartItems){  {/*parse cartItems  */}
      if(cartItems[item]>0){
        let itemInfo = food_list.find((product) => product.id === parseInt(item));
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return Math.round( totalAmount, 2);
  }

  
  

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getTotalCartAmount
    
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;