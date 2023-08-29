import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Card } from "reactstrap";
import "./FoodCard.css";
const FoodCard = ({ foods }) => {
  // console.log(foods)
  return (
    <>
      <Link to={`/Calculator/${foods?.id}`}>
      <img
        className="food-image "
        key={foods?.id}
        src={`http://localhost:1337${foods?.attributes?.img?.data?.attributes?.url}`}
        alt=""
      />
     <span className="foodTitleSpan"> <h5 className='food-title'>{foods?.attributes?.name}</h5></span>
      </Link>
    </>
    
  );
};

export default FoodCard;
