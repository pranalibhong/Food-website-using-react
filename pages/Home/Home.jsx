// Step 4:-created Header folder in component and use it in home page called the header file in home.
// step 11:-add some fuctionality to banner img, create state and pass it in <ExploreMenu/> as a prop.Then go to ExploreMEnu.jsx 

import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload'

const Home = () => {

  const [category,setCategory] = useState("All");
  return (
    <div>
       {/*Called header file */} 
       <Header/> 
       {/* then calling ExploreMenu.jsx file */}
       {/* Step 11:-pass useState as prop like category={category}*/}
       <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
