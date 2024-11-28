// Step 2:-  after navbar ,setup BrowserRouter for that import it and write <app/> in browserRouter
// Then open App.jsx file setup the routes
// step 14:- write app component in StoreContextProvider so that it apply to all */}
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider, { StoreContext } from './context/StoreContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* write app component in StoreContextProvider so that it apply to all */}
    <StoreContextProvider>
      <App />
    </StoreContextProvider>

  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// algorithm :-
// step 1:- Navbar.jsx(navbar code)
// step 2:- index.jsx
// step 3:- App.jsx 
// step 4:- Home.jsx( called  Header.jsx file)
// step 5:- Header.jsx (create main  heading code )
// step 6:- header.css (add css to main heading)
// step 7:- index.css (create keyframe for adding animation of main heading and use it in header.css)
// step 8:- Assets.js (copy json data in it and use it in ExploreMenu.jsx)
// step 9:- ExploreMenu.jsx (For display data on browser wrote code here)
// step 10:- ExploreMenu.css( Add css of banner img,below header (rounded images) )
// step 11:- Home.jsx( for add functionality, create UseState and pass it as props in ExploreMenu.jsx)
// step 12:- ExploreMenu.jsx (add onclick to div and img )
// step 13:- storeContext.jsx (create context api, so that there no need to write prop in every file)
// step 14:- index.js (wrap app component between  StoreContextProvider)
// step 15:- assets.js (Include food_list content and export it to new file StoreContext)
// step 16:- StoreContext.jsx (Import food_list and called it in contextValue also include addToCart and removeFromCart feature)
// step 17:- FoodDisplay.jsx (Show images below banner images ,map food_list and also show using FoodItem.jsx file card code) (Home.jsx-> FoodDisplay-> Fooditem )
// step 18:- FoodItem.jsx (This is only card content,In which we take image price description id of food_list using prop)
// step 19:- FoodDisplay.jsx (Add filter product after click on banner img for that first check the category: in food list and name : in menu_list is same or not if not then it give error)
// step 20:- Footer.jsx(write footer code and called it in App.js and fontawesome icon cdn link paste in index.html in public folder  and use linkdin,twitter, icon in footer tab)
// step 21:- index.css(add scroll behavior for smooth scroll page while click on navbar link)
// step 22:- LoginPopup.jsx (write login page code and popup it and called it in  app js above navbar )
// step 23:- App.jsx(create useState for login and  set it to false, then above navbar called LoginPopup, if else loop  (showlogin is true then call loginpopup else called  blank) in navbar  pass prop setshowlogin  then got to navbar)
// step 24:- Navbar.jsx(pass setshowlogin as prop to access the state created in app.jsx, then set onclick on button and pass this prop in arrow function and set true to activate the button click )
// step 25:- LoginPupup.jsx(create Ui of login page,create new currState for set default initial state,take prop from app.jsx(setshowlogin) then set logic for login and sign up button click
// step 26:- cart.jsx (fetch cartItems ,food_list, removeFromCart from storecontext( because we create all function in it) , add link tag to basket icon present in navbar also write condition for dot on cart icon when item is present in cart or not for more info checkout cart.jsx page )
// step 27:- StoreContext.jsx(create deleteFromCart function, and use it to remove item from cart page)
// step 28:- PlaceOrder.jsx(collect user information using form and also show final bill)