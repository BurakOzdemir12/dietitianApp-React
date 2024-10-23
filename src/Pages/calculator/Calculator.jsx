import React, { Component, useContext, useState } from "react";

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
import { Form, Link } from "react-router-dom";
import { products } from "../../Components/Json/NutritionalItems";
import useFetch from "../../hooks/useFetch";
import FoodCard from "../../Components/card/FoodCard";
import Catlist from "../../Components/CatList/Catlist";
import { urlFoods } from "../../endpoints";
import { Typography, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";

const Calculator = (foods) => {
  const { data, loading } = useFetch(urlFoods);
  // console.log(data);
  const [value, setQuery] = useState("");
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Container style={{backgroundColor:colors.backGround[400]}} fluid>
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
            <Typography sx={{color:colors.backGround[500]}} variant="h1" className="header mt-3">Kalori Hesapla</Typography>
            <Typography  sx={{color:colors.backGround[500]}} variant="h2" className=" mt-4" style={{ textAlign: "start" }}>
              Besinlerin Detaylı Besin Değerlerini Öğren 
            </Typography>

            <FormGroup>
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

                {data
                  ?.filter((item) => {
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
                          to={`/Calculator/${product?.id}`}
                        >
                          <div className="d-inline">
                            <img
                              className="mx- me-2"
                              src={`http://localhost:5149${product.img}`}
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
              <h4 style={{ color: "black", fontWeight: "600", opacity: 0.7 }}>
                Most Searched Foods
              </h4>
              {data?.slice(0, 5).map((item) => (
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
          <div className="headertwodiv">
            <h4  className="headertwo"> FOOD CATEGORIES</h4>
          </div>
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
