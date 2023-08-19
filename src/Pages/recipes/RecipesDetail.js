import React from "react";
import { useParams } from "react-router-dom";
import { Recipes } from "../../Components/Json/Recipes";
import { Card, Col, Container, Row } from "reactstrap";
import "../../Components/css/recipeDetail2.css";
import "../../Components/css/recipeDetail.css";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from "react-icons/fa";

const RecipesDetail = () => {
  const { recipeId } = useParams();
  const recipe = Recipes.find((recipe) => recipe.name === recipeId);
  const {
    id,
    name,
    category,
    img,
    recipeD,
    kcal,
    PorsionforPerson,
    cookingTime,
    PrepairTime,
    porsionGr,
  } = recipe;

  window.onload = function () {
    document.querySelector(".cont_modal").className = "cont_modal";
  };

  let c = 0;
  function open_close() {
    document.querySelector(".cont_modal").className =
      c % 2 === 0 ? "cont_modal cont_modal_active" : "cont_modal";
    c++;
  }
  const TotCookTime = parseInt(cookingTime) + parseInt(PrepairTime);
  return (
    <div>
      {/* {Recipes.map((item) => (  ))} */}

      <Row noGutters>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div class="cont_principal ">
            <div class="cont_central ">
              <div class="cont_modal cont_modal_active">
                <div class="cont_photo">
                  <div class="cont_img_back">
                    <img src={img} alt="" />
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
                    <h3>{PorsionforPerson}</h3>
                    <span>SERVINGS</span>
                  </div>
                  <div class="cont_detalles">
                    <h3>{name}</h3>
                    <p>
                      lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam sagittis est est aliquam, sed faucibus massa
                      lobortis. Maecenas non est justo.est
                    </p>
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
                        <p>🔥 {kcal} KCAL</p>
                      </div>
                      <div class="cont_info_preparation d-flex">
                        <p className="d-inline-block">
                          <i className="" style={{ fontSize: 50 }}>
                            🍽️
                          </i>{" "}
                           <br/>{PorsionforPerson} Person
                        </p>
                        <p className="d-inline-block">
                          <i className="" style={{ fontSize: 50 }}>
                            ♨
                          </i>{" "}
                         <br/> {cookingTime}Minutes
                        </p>
                        <p className="d-inline-block">
                          <i className="" style={{ fontSize: 50 }}>
                            🔪
                          </i>{" "}
                          {PrepairTime}Minutes
                        </p>
                      </div>
                    </div>
                    <div class="cont_btn_mas_dets">
                      <a href="#">
                        <i class="material-icons">
                          <FaArrowAltCircleDown fontSize={25} />
                        </i>
                      </a>
                    </div>
                  </div>
                  <div class="cont_btn_open_dets">
                    <a href="#e" onClick={open_close}>
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
                <p>🔥 {kcal} KCAL</p>
                <p>1 Porsion {porsionGr} gr</p>
              </div>
              <div class="mx-2 recipeCard d-flex">
                <p className="px-3 d-inline-block">
                  <i className="" style={{ fontSize: 50 }}>
                    🍽️
                  </i>{" "}
                  <br/>{PorsionforPerson}{" "} <br/>Person
                </p>
                <p className="px-3 d-inline-block">
                  <i className="" style={{ fontSize: 50 }}>
                    ♨
                  </i>{" "}
                  <br/>  {cookingTime}{" "} <br/> Minutes
                </p>
                <p className="px-3 d-inline-block">
                  <i className="" style={{ fontSize: 50 }}>
                    🔪
                  </i>{" "}
                  <br/>  {PrepairTime}{" "} <br/> Minutes
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
