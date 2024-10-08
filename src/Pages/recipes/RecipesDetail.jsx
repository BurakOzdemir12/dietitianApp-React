import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { Recipes } from "../../Components/Json/Recipes";
import { Card, Col, Container, Row } from "reactstrap";
import "../../Pages/recipes/recipeDetail2.css";
import useFetch from "../../hooks/useFetch";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import { urlRecipes } from "../../endpoints";

const RecipesDetail = () => {
  const { id } = useParams();
  const data = useFetch(`${urlRecipes}/${id}`);
   const { loading, error } = useFetch(urlRecipes);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const setdata=data.data;
  console.log(setdata)


 

  window.onload = function () {
    document.querySelector(".cont_modal").className = "cont_modal";
  };

  let c = 0;
  function open_close() {
    document.querySelector(".cont_modal").className =
      c % 2 === 0 ? "cont_modal cont_modal_active" : "cont_modal";
    c++;
  }

  let TotCookTime = 0;
  // Access 'cooktime' and 'repairontime' from the attributes
  const cookTime = data?.data?.cooktime || 0;
  const repairOnTime = data?.data?.preparationtime || 0;

  // Add the times to the total
  TotCookTime = cookTime + repairOnTime;

  return (
    <div>
      <Row noGutters>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div class="cont_principal ">
            <div class="cont_central ">
              <div class="cont_modal cont_modal_active">
                <div class="cont_photo">
                  <div class="cont_img_back">
                    <img
                  src={`http://localhost:5149${setdata.img}`}
                  alt=""
                    />
                  </div>
                  <div class="cont_mins">
                    <div class="sub_mins">
                      <h3>{TotCookTime}</h3>
                      <span>MINS</span>
                    </div>
                    <div class="cont_icon_right">
                      <a href="#">
                        {" "}
                        <i class="material-icons">
                          <FaArrowAltCircleRight fontSize={25} />
                        </i>
                      </a>
                    </div>
                  </div>
                  <div class="cont_servings">
                    <h3>{data.data.porsionsize}</h3>
                    <span>SERVINGS</span>
                  </div>
                  <div class="cont_detalles">
                    <h3>{data.data.name}</h3>
                    <p>{data.data.recipeDetail}</p>
                  </div>
                </div>
                <div class="cont_text_ingredients">
                  <div class="cont_over_hidden">
                    <div class="cont_tabs">
                      <ul>
                        <li>
                          <a href="#">
                            <h4>INGREDIENTS</h4>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <h4>VALUES</h4>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="cont_text_det_preparation">
                      <div class="cont_title_preparation">
                        <p className="mt-4">🔥 {data.data.kcal} KCAL</p>
                      </div>
                      <div class="cont_info_preparation d-flex">
                        <p className="d-inline-block">
                          <i className="" style={{ fontSize: 50 }}>
                            🍽️
                          </i>{" "}
                          <br />
                          {data.data.porsionsize} Person
                        </p>
                        <p className="d-inline-block">
                          <i className="" style={{ fontSize: 50 }}>
                            ♨
                          </i>{" "}
                          <br /> {data.data.cooktime} Minutes
                        </p>
                        <p className="d-inline-block">
                          <i className="" style={{ fontSize: 50 }}>
                            🔪
                          </i>{" "}
                          <br />
                          {data.data.preparationTime} Minutes
                        </p>
                      </div>
                    </div>
                    <div class="cont_btn_mas_dets">
                      <a href="#">
                        <i class="material-icons">
                          {/* <FaArrowAltCircleDown fontSize={25} /> */}
                        </i>
                      </a>
                    </div>
                  </div>
                  <div class="cont_btn_open_dets">
                    <a href="#" onClick={open_close}>
                      <i class="material-icons">
                        <FaArrowAltCircleLeft fontSize={30} />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col className="" xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="recipeCard">
            <div class="">
              <div class="">
                <p>🔥 {data.data.kcal} KCAL</p>
                <p>1 Porsion {data.data.totalPorsiongram} gr</p>
              </div>
              <div class="mx-2 recipeCard d-flex">
                <p className="px-3 d-inline-block">
                  <i className="" style={{ fontSize: 50 }}>
                    🍽️
                  </i>{" "}
                  <br />
                  {data.data.porsionsize} <br />
                  Person
                </p>
                <p className="px-3 d-inline-block">
                  <i className="" style={{ fontSize: 50 }}>
                    ♨
                  </i>{" "}
                  <br /> {data.data.cooktime} <br /> Minutes
                </p>
                <p className="px-3 d-inline-block">
                  <i className="" style={{ fontSize: 50 }}>
                    🔪
                  </i>{" "}
                  <br /> {data.data.preparationtime} <br /> Minutes
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RecipesDetail;
