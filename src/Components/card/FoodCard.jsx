import React from "react";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";
import "./FoodCard.css";
const FoodCard = ({ foods }) => {
  // console.log(foods);
  return (
    <>
      <Link to={`/Calculator/${foods?.id}`}>
        <img
          className="food-image "
          key={foods.id}
          src={`http://localhost:5149${foods.img}` || null}
          alt=""
        />
        <span className="foodTitleSpan">
          {" "}
          <h5 className="food-title">{foods.name}</h5>
        </span>
      </Link>
    </>
  );
};

export default FoodCard;
