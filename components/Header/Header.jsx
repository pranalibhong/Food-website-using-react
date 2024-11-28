// Step 5 :- main image  with heading and button and export it form here and for showing it on browser called (<header/> ) it in home.jsx 

import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of crafted with the finest ingredients and culinary expertise. Our delicious meal at a time.</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
