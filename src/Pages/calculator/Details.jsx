import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Components/hooks/useFetch";

const Details = () => {
  const { name } = useParams();
  const { data } = useFetch("http://localhost:1337/api/foods?populate=*");
  console.log(data);

  return <div>Details {name}</div>;
};

export default Details;
