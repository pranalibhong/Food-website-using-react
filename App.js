// Step 3 of project:-
// Create Routers below navbar calling , import it and add multiple routes for navigation link
// Now go to  Home page and create it 
// step 23:- App.jsx(create useState for login and  set it to false, then above navbar called LoginPopup, if else loop  (showlogin is true then call loginpopup else called  blank) in navbar  pass prop setshowlogin  then got to navbar)


import Navbar from "./components/Navbar";
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart'; 
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";

function App() {

  // showLogin is current value and setshowLogin is function use to change the value
  // for visibility  of login page
  const [showLogin ,setshowLogin] =useState(false)
  return (
    <>
    {/*  When showLogin is true, it shows the LoginPopup; otherwise, it renders nothing (<></>). */}
    {showLogin? <LoginPopup setshowLogin={setshowLogin}/> :<></>}
    <div className="app" >
      <Navbar setshowLogin={setshowLogin} />  {/* The setshowLogin={setshowLogin} part passes the state setter function setshowLogin to the Navbar so that it can be used within Navbar to show or hide the login popup.*/}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
