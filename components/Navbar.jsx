// step 1 project:-
// create navbar using array map(),
// active home state using useState,
// use FaSearch for search icon and FaShoppingCart for cart icon
// next create new pages folder which three more folder of Home,cart, placeorder folder 
// create react router for smooth routing ,for setup router go to index.jsx file and import BrowserRouter
// step 24:- Navbar.jsx(pass setshowlogin as prop to access the state created in app.jsx, then set onclick on button and pass this prop in arrow function and set true to activate the button click )



import React, { useContext, useState } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
// import logo from '../assets/logo.jpg';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';



const Navbar = ({ setshowLogin }) => {
    const [active, setActive] = useState("home");
    const { getTotalCartAmount } = useContext(StoreContext);

    return (
        <div className='navbar'>
            {/* <img src={logo} alt="Tomato Logo" className="h-8 w-8" /> */}
            <Link to='/'><span className="text-2xl  text-red-500 font-bold">Tomato</span></Link>
            <ul className='navbar-menu'>
                <Link to="/" onClick={() => setActive("home")} className={active === "home" ? "active" : " "}>home</Link>
                <a href='#explore-menu' onClick={() => setActive("menu")} className={active === "menu" ? "active" : " "}>menu</a>
                <a href='#app-download' onClick={() => setActive("mobile-app")} className={active === "mobile-app" ? "active" : " "}>mobile-app</a>
                <a href='#footer' onClick={() => setActive("contact us")} className={active === "contact us" ? "active" : " "}>contact us</a>
            </ul>
            <div className="navbar-right">
                {/* Search Icon */}
                <FaSearch className="cursor-pointer  text-gray-500 text-2xl" />

                {/* Cart Icon */}
                <div className="navbar-search-icon ">
                    <Link to='/cart'> <FaShoppingCart className="shopping-cart-icon cursor-pointer text-gray-500 text-2xl md:text-4xl sm:text-2xl " /></Link>
                    {getTotalCartAmount() > 0 && (
                        <div className="cart-item-count-dot"></div>
                    )}
                </div>

                {/* Sign In Button */}
                <button onClick={() => setshowLogin(true)} >Sign In </button>

            </div>
        </div>
    );
};

export default Navbar;

