import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Card } from "reactstrap";
import "./FoodCard.css";

const FoodCard2 = ({ foods }) => {
    let id= foods?.id
  
    const { data,loading } = useFetch(
        `http://localhost:1337/api/foods?populate=*&filters[id][$eq]=${id}`
    );
    // console.log(data)
    return (
    <div>
      <Link to={`/Calculator/${foods?.id}`}>
      <img
        className="food-image"
        key={foods?.id}
        src={!loading && `http://localhost:1337${data[0]?.attributes?.img?.data?.attributes?.url}`}
        alt=""
      />
     <span className="foodTitleSpan"> <h1 className='food-title'>{foods?.attributes?.name}</h1></span>
      </Link>
    </div>
    
  );
};

export default FoodCard2;
