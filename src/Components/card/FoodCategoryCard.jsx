import React from "react";
import { Link } from "react-router-dom";
import "./FoodCategoryCard.css";
const FoodCategoryCard = ({ cats }) => {
  //   console.log(cats?.attributes?.img?.data?.[0]?.attributes?.url);
  return (
    <div className="CategoryCard mt-3 ">
      <Link to={`/catitems/${cats?.id}`} key={cats?.id}>
        <img
          className="categoryImage"
          key={cats?.id}
          src={`http://localhost:1337${cats?.attributes?.img?.data?.[0]?.attributes?.url}`}
          alt=""
        />
        <span className="">
          {" "}
          <h5 className="mt-2 title">{cats?.attributes?.title}</h5>
        </span>
      </Link>
    </div>
  );
};

export default FoodCategoryCard;
