import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { Recipes } from "../../Components/Json/Recipes";
import { Card, Col, Row } from "reactstrap";
import "../../Pages/recipes/recipeDetail2.css";
import useFetch from "../../hooks/useFetch";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import { urlRecipes } from "../../endpoints";
import {
  Box,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const RecipesDetail = () => {
  const { id } = useParams();
  const data = useFetch(`${urlRecipes}/${id}`);
  const { loading, error } = useFetch(urlRecipes);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const setdata = data.data;
  console.log(setdata);

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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <div>
      <Row noGutters>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div class="cont_principal ">
            <div class="cont_central ">
              <div class="cont_modal cont_modal_active">
                <div class="cont_photo">
                  <div class="cont_img_back">
                    <img src={`http://localhost:5149${setdata?.img}`} alt="" />
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

        <Container maxWidth="xl">
          <Grid justifyContent={"center"} mt={4} container>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={8}
              xl={8}
              sx={{
                // background: "blue",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography mb={4} variant="h3">
                {" "}
                {data.data.name}
              </Typography>
              <Box
                mb={4}
                display="grid"
                gridTemplateColumns="repeat(12,minmax(0, 1fr))"
                gridAutoRows="60px"
                gap="5px"
                // sx={{
                //   "& > div ": { gridColumn: isNonMobile ? undefined : "span 12" },
                // }}
              >
                <Box
                sx={{'@media (max-width: 767px)': { gridColumn: "span 4" }}}
                  gridColumn="auto / span 2"
                  gridRow="span 1"
                  backgroundColor={red[100]}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography>Diyetisyen Adı</Typography>
                </Box>
                <Box
                sx={{'@media (max-width: 767px)': { gridColumn: "span 4" }}}
                  gridColumn="auto / span 2"
                  gridRow="span 1"
                  backgroundColor={red[100]}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography>Tarih</Typography>
                </Box>
                <Box
                sx={{'@media (max-width: 767px)': { gridColumn: "span 4" }}}
                  gridColumn="auto / span 2"
                  gridRow="span 1"
                  backgroundColor={red[100]}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography>Tarih</Typography>
                </Box>
                <Box
                sx={{'@media (max-width: 767px)': { gridColumn: "span 4" }}}
                  gridColumn="auto / span 2"
                  gridRow="span 1"
                  backgroundColor={red[100]}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography>Tarih</Typography>
                </Box>
                <Box
                sx={{'@media (max-width: 767px)': { gridColumn: "span 4" }}}
                  gridColumn="auto / span 2"
                  gridRow="span 1"
                  backgroundColor={red[100]}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography>Tarih</Typography>
                </Box>
              </Box>
              <Box
                justifyContent="start"
                sx={{
                  width: "100%",
                  height: "500px",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  overflow: "hidden",
                }}
              >
                <img
                  src={`http://localhost:5149${setdata?.img}`}
                  alt="Resim"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain", // Resmi çerçeveye sığdırır
                    display: "block",
                    // margin: "20px",
                  }}
                />
              </Box>

              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Stack
                  mb={5}
                  sx={{
                    flexWrap: "wrap",
                    "@media (max-width: 768px)": {
                      justifyContent: "center",
                      mt: 2,
                      mb: 4,
                      direction: "column",
                    },
                  }}
                  mt={5}
                  justifyContent="start"
                  useFlexGap
                  direction="row"
                  spacing={{ xs: 2, sm: 2, md: 3, lg: 4, xl: 5 }}
                >
                  <Item sx={{ fontSize: 20 }}>
                    {" "}
                    <Typography variant="h5"> Servis Boyutu </Typography>
                    <i className="" style={{ fontSize: 50 }}>
                      🍽️
                    </i>{" "}
                    Item 1
                  </Item>
                  <Item sx={{ fontSize: 20 }}>
                    {" "}
                    <Typography variant="h5"> Pişirme Süresi </Typography>
                    <i className="" style={{ fontSize: 50 }}>
                      ♨
                    </i>{" "}
                    Item 1
                  </Item>
                  <Item sx={{ fontSize: 20 }}>
                    {" "}
                    <Typography variant="h5"> Hazırlama Süresi </Typography>
                    <i className="" style={{ fontSize: 50 }}>
                      🔪
                    </i>{" "}
                    Item 1
                  </Item>
                </Stack>
              </Col>
              <Grid item>
                <Typography variant="h5">Recipes detail for recipe</Typography>

                <Typography mb={3} mt={5} variant="h3">
                  Malzemeler:
                </Typography>
                {/* data map  */}
                <Stack direction="column">
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...label}
                        // defaultChecked
                        sx={{
                          mx: -1,
                          color: green[800],
                          "&.Mui-checked": {
                            color: green[600],
                          },
                        }}
                      />
                    }
                    label={
                      <Typography mx={2} variant="h5">
                        Soğan
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...label}
                        // defaultChecked
                        sx={{
                          mx: -1,
                          color: green[800],
                          "&.Mui-checked": {
                            color: green[600],
                          },
                        }}
                      />
                    }
                    label={
                      <Typography mx={2} variant="h5">
                        Soğan
                      </Typography>
                    }
                  />
                </Stack>
              </Grid>
              <Grid item>
                <Typography mb={3} mt={5} variant="h3">
                  Hazırlanış:
                </Typography>
                {/* data map  */}
                <Stack
                  spacing={{ xs: 2, sm: 2, md: 3, lg: 4, xl: 3 }}
                  direction="column"
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...label}
                        // defaultChecked
                        sx={{
                          mx: -1,
                          color: green[800],
                          "&.Mui-checked": {
                            color: green[600],
                          },
                        }}
                      />
                    }
                    label={
                      <Typography mx={2} variant="h5">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.delectus tenetur! Harum temporibus necessitatibus,{" "}
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...label}
                        // defaultChecked
                        sx={{
                          mx: -1,
                          color: green[800],
                          "&.Mui-checked": {
                            color: green[600],
                          },
                        }}
                      />
                    }
                    label={
                      <Typography mx={2} variant="h5">
                        Commodi voluptas, a eaque at ullam qui esse deleniti
                        quis recusandae quidem porro deserunt aliquid odio
                        earum!
                      </Typography>
                    }
                  />
                </Stack>
              </Grid>
            </Grid>
            <Grid
              sx={{ background: "red" }}
              item
              xs={12}
              sm={12}
              md={8}
              lg={4}
              xl={4}
            >asdsa</Grid>
          </Grid>
        </Container>
      </Row>
    </div>
  );
};

export default RecipesDetail;
