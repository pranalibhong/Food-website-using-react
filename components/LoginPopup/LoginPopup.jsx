// step 25:- LoginPupup.jsx(create Ui of login page,create new currState for set default initial state,take prop from app.jsx(setshowlogin) then set logic for login and sign up button click

import React, { useState } from "react";
import './LoginPopup.css';
import { FaTimes } from "react-icons/fa"; // Import the cross icon from Font Awesome

const LoginPopup = ({ setshowLogin }) => {
    const [currState, setCurrState] = useState("Login");
    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    {/* for check the current text(i.e login or sign Up)  we create useState and set it to login first, when btn click first login screen show*/}
                    <h2>{currState}</h2>
                    <button onClick={() => setshowLogin(false)} className="close-btn">    {/*setshowLogin(false) is used to hide the login or sign-up popup when the user clicks the close button (usually represented by a cross icon).*/}
                        <FaTimes size={20} />                    {/* Font Awesome cross icon */}
                    </button>
                </div>
 
                {/* Logic for render between login and sign up */}
                <div className="login-popup-inputs">
                    {/* create if else for login and sign up btn, when login click only show email and password and , when false then show name ,email and password */}
                    {currState === "Login" ? <></>: <input type="text" placeholder="Your name" required />
                    }
                    <input type="email" placeholder="Your email" required />
                    <input type="password" placeholder="Password" required />
                </div>

                {/* apply if else loop for btn show, i.e when currstate is signup then show create account btn else show login btn  */}
                <button >{currState === "Sign Up" ? "Create account" : "Login"}</button>

                <div className="login-popup-condition">
                    <input type="checkbox " required />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>

                {/* add onclick on text to render between click here(to go for sign up page)  and login here(to go for login page) */}
                {currState === "Login" ?(
                    <p> Create a new account?<span onClick={() => setCurrState("Sign Up ")}>Click here</span></p>
                ):( <p>Already have  an account?<span onClick={() => setCurrState("Login ")}>Login here</span></p>)}
            </form>
        </div>
    );
};

export default LoginPopup;
