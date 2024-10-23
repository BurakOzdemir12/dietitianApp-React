import React, { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
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
import { Link, useParams } from "react-router-dom";
import "../../Pages/recipes/Recipes.css";
import RecipesCategories from "../../Components/RecipesCategories/RecipesCategories";
import RecipeCategoriesReview from "../../Components/RecipeCategoriesReview/RecipeCategoriesReview";
import { urlRecipes, urlRecipesCategories, urlWeather } from "../../endpoints";
import RecipiesCard from "../../Components/card/RecipiesCard";
import { Box, Grid, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";

const Recipes = ({ direction, ...args }) => {
  const { data, loading, error } = useFetch(urlRecipesCategories);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [selectedCheckboxes, setSelectedCheckBoxes] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  if (!data) {
    return <div>Loading...</div>; // Return a loading indicator if data is not available yet
  }

  const handleCheckBox = (e) => {
    const value = e.target.value;
    if (value === "2") {
      setSelectedCheckBoxes(null);
    } else {
      setSelectedCheckBoxes([value]);
    }
  };

  return (
    <div>
      <Col
        className="recipesCol"
        style={{
          backgroundColor: colors.seashellBackground[400],
          boxShadow:
            theme.palette.mode === "dark"
              ? "0px 1px 10px 11px #2b1f1c" // Karanlık tema için gölge
              : "0px 1px 10px 11px #ffebcd", // Açık tema için gölge
        }}
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <div className="recipes ">
          <h5 className="">RECIPES</h5>
        </div>
      </Col>

      <Row noGutters>
        <Col
          style={{ marginTop: 0, backgroundColor: colors.backGround[400] }}
          noGutters
          xs={12}
          sm={12}
          md={12}
          lg={2}
          xl={2}
        >
          <Form className="">
            <Box
              display="grid"
              gridTemplateColumns="repeat(12,minmax(0,1fr))"
              gridAutoRows="30px"
              noGutters
              className="Check-Boxes    mx-0 recipe-filters "
              sx={{
                "@media(max-width: 992px)": {
                  mx: 0,
                  paddingLeft: 3,
                },
                "@media(min-width: 992px)": {
                  paddingLeft: "6%",
                  mt:5
                },
              }}
            >
              {/* <RecipesCategories /> */}
              {data.map((item) => (
                <Box
                  gridColumn="span 4"
                  gridRow="span 2"
                  sx={{
                    "@media (max-width: 425px)": {
                      gridColumn: "span 6",
                      gridRow: "span 3",
                      justifyItems: "start",
                    },
                    "@media (min-width:992px)": {
                      gridColumn: "span 12",
                      gridRow: "span 3",
                    },
                  }}
                >
                  <div
                    class=" form-check"
                    categoryValue={item.id}
                    data_filter="all"
                  >
                    <br />

                    <input
                      onChange={handleCheckBox}
                      type="radio"
                      class=" form-check-input"
                      id="anime"
                      value={item.id}
                      name="hobby"
                      // checked="ALL"
                    />
                    <label
                      class="form-check-label  custom-radio-label"
                      for="anime"
                    >
                      <div className="mt-1 mx-1" key={item.id}>
                        {item.name}
                      </div>
                    </label>
                  </div>
                </Box>
              ))}{" "}
            </Box>
          </Form>
        </Col>
        <Col
          style={{ marginTop: 0, backgroundColor: colors.backGround[400] }}
          noGutters
          className=""
          xs={12}
          sm={12}
          md={12}
          lg={10}
          xl={10}
        >
          <Box className="  mt-5 mb-5 " sx={{ height: "100%", width: "100%" }}>
            {/* <RecipiesCard/> */}

            <RecipeCategoriesReview selected={selectedCheckboxes} />
          </Box>

          {/* Recipe-Container Ends */}
        </Col>{" "}
        {/*container end */}
      </Row>
    </div>
  );
};

export default Recipes;
