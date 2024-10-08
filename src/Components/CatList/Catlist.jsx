import React from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";
import FoodCategoryCard from "../card/FoodCategoryCard";
import { urlFoods, urlFoodsCategories } from "../../endpoints";

const Catlist = () => {
  const { data,loading,error } = useFetch(urlFoodsCategories);
// console.log(data)
  if (!data) {
    return <div>Loading...</div>; // Return a loading indicator if data is not available yet
  }

  // Now you can safely access data[0]?.attributes.title
  
  return (
    <>
      {/* this Component shows Food Category Lists and give id to CategoryFoods Component  */}

      {data.map((item) => (
        <>
          <FoodCategoryCard  key={item.id} cats={item}/>
        </>
      ))}
    </>
  );
};

export default Catlist;
