import React, { Component, useState } from "react";

import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  FormGroup,
  InputGroup,
  Row,
} from "reactstrap";
import "../calculator/Calculator.css";
import chicken from "../../Components/images/products/chicken.jpg";
import { FaSearch } from "react-icons/fa";
import { Form, Link } from "react-router-dom";
import { products } from "../../Components/Json/NutritionalItems";
import { valHooks } from "jquery";
import axios from "axios";
import useFetch from "../../Components/hooks/useFetch";
import FoodCard from "../../Components/card/FoodCard";
import Catlist from "../../Components/CatList/Catlist";
import FoodCategoryCard from "../../Components/card/FoodCategoryCard";

const Calculator = (foods) => {
  const { data,loading } = useFetch("http://localhost:1337/api/foods?populate=*");

  const [value, setQuery] = useState("");
  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSearch = (searchTerm) => {};

 {!loading && console.log(data[0].attributes?.details?.[0] )};

  return (
    <Container fluid>
      <Row noGutters>
        <Col xs={12} sm={12} md={1} lg={1} xl={1}></Col>
        {/* <div className=""> */}
        <Col xs={12} sm={12} md={10} lg={10} xl={10}>
          <Col
            style={{ textAlign: "center" }}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <h4 className="header mt-3">Calories in Foods</h4>
            <h5 className=" mt-4" style={{ textAlign: "start" }}>
              Learn the meals Macro and Micro values you consume.
            </h5>

            <FormGroup >
              {/* <InputGroup> */}
                <div className=" SortArea">
                  {/* <FaSearch className="faS mt-0 mx-2" /> */}
                  <input
                    value={value}
                    name="text"
                    type="text"
                    className="InputArea  mt-5"
                    placeholder="Search For Foods"
                    onChange={onChange}
                  />
                  {/* <Button
                    className="searchButton"
                    onClick={() => onSearch(value)}
                  >
                    Search
                  </Button> */}

                  {products
                    .filter((item) => {
                      const searchTerm = value.toLowerCase();
                      const name = item.name.toLowerCase();
                      return searchTerm && name.startsWith(searchTerm);
                    })
                    .slice(0, 5)
                    .map((product) => (
                      <ul className="ul-l" style={{ textDecoration: "none" }}>
                        <li className=" mx-3 listItem">
                          <Link
                            key={product.id}
                            to={`/Calculator/${product.name}`}
                          >
                            <div className="d-inline">
                              <img
                                className="mx- me-2"
                                src={product.img}
                                style={{ height: 55 }}
                              ></img>
                            </div>
                            <span>{product.name}</span>
                          </Link>
                        </li>
                        {/* // <h1>{product.category}</h1> */}
                      </ul>
                    ))}
                </div>
              {/* </InputGroup> */}
            </FormGroup>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className=" mt-5 MostSearchProduct">
              <h4 style={{ color: "black" ,fontWeight:"600",opacity:.7}}>Most Searched Foods</h4>
              {data?.map((item) => (
                <div className=" mt-5 Card">
                  <div className="Product">
                    <FoodCard key={item.id} foods={item} />
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Col>
        {/* </div> */}
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="allFood-Categories-List  d-flex flex-wrap  justify-content-center justify-content-md-center">
            <Catlist />
            
          </div>
        </Col>

        <Col xs={12} sm={12} md={1} lg={1} xl={1}></Col>
      </Row>
    </Container>
  );
};
export default Calculator;
