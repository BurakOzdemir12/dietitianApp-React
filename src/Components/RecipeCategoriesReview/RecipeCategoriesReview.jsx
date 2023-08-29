import React from "react";
import useFetch from "../hooks/useFetch";
import RecipiesCard from "../card/RecipiesCard";

const RecipeCategoriesReview = ({ selected }) => {
  const { data, loading } = useFetch(
    `http://localhost:1337/api/recipe-categories?populate=*&filters[id][$eq]=${selected}`
  );
 !loading && console.log(data?.[0]?.attributes?.recipes?.data)
  return (
    <>
      {  !loading && data?.[0]?.attributes?.recipes?.data?.map((food,i,) => <RecipiesCard key={i} items={food}/>)}
    </>
  );
};

export default RecipeCategoriesReview;
