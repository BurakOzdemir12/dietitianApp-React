import React, { Component, useEffect, useState, useRef } from "react";
import "../../Components/css/Recipes.css";

import { Categories } from "../../Components/Json/Categories";
import { Recipes } from "../../Components/Json/Recipes";
import jQuery from "jquery";
import {
  Button,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Input,
  Row,
} from "reactstrap";

import { Link } from "react-router-dom";
function Cart({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  let menuRef = useRef();

  // useEffect(()=>{
  //   let handler=(e)=>{
  //     if (!menuRef.current.contains(e.target)) {
  //       setDropdownOpen(false);
  //     }

  //   }
  //  document.addEventListener("mousedown",handler);
  // })

  const [data, setData] = useState(Recipes);
  const filterResult = (catItem) => {
    const result = Recipes.filter((curData) => {
      return curData.category === catItem;
    });

    setData(result);
    if (catItem === "ALL") {
      setData(Recipes);
    }
  };
  // Checkbox Sınırı

  // --------------------------------------------------------------------------------
  return (
    <div>
      <Col className="recipesCol" xs={12} sm={12} md={12} lg={12} xl={12}>
        <div className="recipes ">
          <h5 className="">RECIPES</h5>
        </div>
      </Col>

      <Row noGutters>
        <Col noGutters xs={12} sm={12} md={12} lg={3} xl={3}>
          <Form className="">
            <section className="  mt-1  recipe-filters ">
              <Dropdown
                className="filters   "
                // ref={menuRef}
                isOpen={dropdownOpen}
                toggle={toggle}
                direction={direction}
                type="radio"
              >
                <DropdownToggle caret>
                  <div className="fliter  ">
                    <span className="filtertext  ">Filter</span>
                  </div>

                  <DropdownMenu {...args}>
                    {Categories.map((cat) => (
                      <DropdownItem toggle>
                        <div
                          class="mt-4 form-check"
                          categoryValue={cat.category}
                        >
                          {" "}
                          <input
                            type="radio"
                            class=" form-check-input"
                            id="anime"
                            name="hobby"
                            onClick={() => filterResult(cat.category)}
                          />
                          <label class="form-check-label" for="anime">
                            {cat.category}
                          </label>
                        </div>
                      </DropdownItem>
                    ))}
                    {/* ------------------------------------------------------------------ */}
                  </DropdownMenu>
                </DropdownToggle>
              </Dropdown>
            </section>

            <section className="Check-Boxes mt-5 mx-5 recipe-filters row">
              <div className="full">
                <div className="desk-des">
                  <div className="filters2">
                    {Categories.map((cat) => (
                      <div
                        class=" form-check"
                        categoryValue={cat.category}
                        data_filter="all"
                      >
                        <br />

                        <input
                          type="radio"
                          class=" form-check-input"
                          id="anime"
                          name="hobby"
                          onClick={() => filterResult(cat.category)}
                        />
                        <label class="form-check-label" for="anime">
                          {cat.category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </Form>
        </Col>
        <Col noGutters className="" xs={12} sm={12} md={12} lg={9} xl={9}>
          <div className="  mt-5 recipe-container">
            {data.map((item) => (
              <div className="recipe-grid-item  ">category :
                {item.category}

                <Link key={item.name} to={`/recipes/${item.name}`}>
                  {" "}
                  
                  <div className="recipe-featured-image">
                    <img className="product1" src={item.img}></img>
                  </div>
                  <h5 class="entry-title" itemprop="name">
                    {item.name}
                  </h5>
                </Link>
              </div>
            ))}
          </div>

          {/* Recipe-Container Ends */}
        </Col>{" "}
        {/*container end */}
      </Row>
    </div>
  );
}
export default Cart;
