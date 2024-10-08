import React from "react";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";
import "./FoodCard.css";
import { urlFoods } from "../../endpoints";

const FoodCard2 = ({ food }) => {
  return (
    <div>
      <Link to={`/Calculator/${food.id}`}>
        <img
          className="food-image"
          src={`http://localhost:5149${food.img}`}
          alt={food.name}
        />
        <span className="foodTitleSpan">
          <h1 className="food-title">{food.name}</h1>
        </span>
      </Link>
    </div>
  );
};

export default FoodCard2;
