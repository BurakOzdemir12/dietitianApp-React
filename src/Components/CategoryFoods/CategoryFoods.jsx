import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import FoodCard from '../card/FoodCard';
import Lists from '../CategorysFoodsReviev/list';


const CategoryFoods = () => {
  const catId = parseInt(useParams().id);
  
  
    // console.log(catId +" gelen id")
  return (
   <div>
    {/* give catid to CategoryFoodReview Component */}
    <Lists catId={catId}/>
    
   </div>
  )
}

export default CategoryFoods