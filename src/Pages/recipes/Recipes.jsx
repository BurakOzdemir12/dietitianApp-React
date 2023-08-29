import React, { useState } from "react";
import useFetch from "../../Components/hooks/useFetch";
import {
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Row,
} from "reactstrap";
import { Categories } from "../../Components/Json/Categories";
import { Link } from "react-router-dom";
import "../../Pages/recipes/Recipes.css";
import RecipesCategories from "../../Components/RecipesCategories/RecipesCategories";
import RecipeCategoriesReview from "../../Components/RecipeCategoriesReview/RecipeCategoriesReview";

const Recipes = ({ direction, ...args }) => {
  // const { data } = useFetch("http://localhost:1337/api/recipes?populate=*");
  // console.log(data);

 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

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

            <section className="Check-Boxes mt-5  mx-5 recipe-filters row">
              <div className="full">
                <div className="desk-des">
                  <div className="filters2">
                    <RecipesCategories />
                  </div>
                </div>
              </div>
            </section>
          </Form>
        </Col>
        <Col noGutters className="" xs={12} sm={12} md={12} lg={9} xl={9}>
          <div className="  mt-5 recipe-container">
            {/* {data?.map((item) => (
  <div className="recipe-grid-item  ">
    category :{item?.attributes?.category}
    <Link key={item?.id} to={`/recipes/${item.id}`}>
      {console.log(item.id)}
      <div className="recipe-featured-image">
        <img
          className="product1"
          src={`http://localhost:1337${item?.attributes?.img?.data[0]?.attributes?.url}`}
        ></img>
      </div>
      <h5 class="entry-title" itemprop="name">
        {item?.attributes.name}
      </h5>
    </Link>
  </div>
))} */}
            <RecipeCategoriesReview />
          </div>

          {/* Recipe-Container Ends */}
        </Col>{" "}
        {/*container end */}
      </Row>
    </div>
  );
};

export default Recipes;
