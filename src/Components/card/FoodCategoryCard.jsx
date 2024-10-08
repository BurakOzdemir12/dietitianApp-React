import React from "react";
import { Link } from "react-router-dom";
import "./FoodCategoryCard.css";
const FoodCategoryCard = ({ cats }) => {
// console.log(cats)
  return (
    <div className="CategoryCard mt-3 mx-1 ">
      <Link to={`/catitems/${cats?.id}`} key={cats?.id}>
        <img
          className="categoryImage"
          key={cats.id}
          src={`http://localhost:5149${cats.img}`||null}
          alt=""
        />
        <span className="">
          {" "}
          <h5 className="mt-2 title">{cats.name}</h5>
        </span>
      </Link>
    </div>
  );
};

export default FoodCategoryCard;
