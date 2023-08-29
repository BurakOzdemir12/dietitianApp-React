import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import RecipeCategoriesReview from "../RecipeCategoriesReview/RecipeCategoriesReview";

const RecipesCategories = () => {
  const [selectedCheckboxes, setSelectedCheckBoxes] = useState([]);
  const RecipeCatId = parseInt(useParams().id);

  const { data } = useFetch(
    "http://localhost:1337/api/recipe-categories?populate=*"
  );
 
  if (!data) {
    return <div>Loading...</div>; // Return a loading indicator if data is not available yet
  }

  // console.log(data)
  const handleCheckBox = (e) => {
    const value = e.target.value;
    setSelectedCheckBoxes([value]);
     // Set the state to an array containing only the current selected checkbox value
  };
  return (
    <div>
      {/* {Categories.map((cat) => ( */}
      {data?.map((item) => (
        <div
          class=" form-check"
          categoryValue={item?.attributes?.id}
          data_filter="all"
        >
          <br />

          <input
            onChange={ handleCheckBox}
            type="radio"
            class=" form-check-input"
            id="anime"
            value={item.id}
            name="hobby"
          />
          <label class="form-check-label" for="anime">
            <div key={item?.id}>{item?.attributes?.name}</div>
          </label>
        </div>
      ))}{" "}
      {/* ))} */}
      <br/>
      <br/>
      <br/>



      <RecipeCategoriesReview selected = {selectedCheckboxes}/>
    </div>
  );
};

export default RecipesCategories;
