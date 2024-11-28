// step 17:- Show images below banner images and called component  from foodItem(To display the cart i.e created in foodItem.jsx)
// (Home.jsx(called FoodDisplay) -> FoodDisplay (map food_list) -> Fooditem(card structure))

import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
      <div className='food-display-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 sm:p-6 md:p-10 mt-4 sm:mt-8'>
     
        {food_list.map((item, index) => {
         
             console.log(category,item.category)
          //  add filter product using their name ,after click on banner rounded img for that create if loop
          if (category === "All" ) {
            // write return statement in if loop        
            return <FoodItem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
          }
          else if(category === item.category){
            return <FoodItem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
  
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
