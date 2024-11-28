// step 9:- This file include menu section page code, located below main image, present in header.jsx file.
// In This file first called json data(i.e menu_list) and import it. Then map it,fetch img and their name. 
// step 12:- pass UseState created in home.jsx, as props, like (const ExploreMenu = ({category,setCategory})),add onclick in  

import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

// step 12:- pass prop as parameter in below line
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1><center>Explore our menu</center></h1>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            // step 12:- add onclick in below div and write if prev click item is same as current then show all item otherwise show clicked item
            <div onClick={() => setCategory(prev => prev === item.name ? "All" : item.name)} key={index} className="explore-menu-list-item">
              <img className={category === item.name ? "active" : ""} src={item.image} alt="food image" />
              <p>{item.name}</p>
            </div>
          )
        })}
      </div>
      {/* <hr /> */}
    </div>
  )
}

export default ExploreMenu
