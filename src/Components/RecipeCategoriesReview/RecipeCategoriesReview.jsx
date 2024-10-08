import React from "react";
import useFetch from "../../hooks/useFetch";
import RecipiesCard from "../card/RecipiesCard";
import { urlRecipes } from "../../endpoints";

const RecipeCategoriesReview = ({ selected }) => {
  const { data: recipes, loading, error } = useFetch(urlRecipes);
console.log(recipes)
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data.</div>;
  }

  if (!recipes || recipes.length === 0) {
    return <div>No data available</div>;
  }

  const filteredRecipes = selected? recipes.filter(recipe => recipe.recipeCategoryId === parseInt(selected[0], 10)):recipes;

  return (
    <>
    
      <RecipiesCard items={filteredRecipes} />
    </>
  );
};

export default RecipeCategoriesReview;
