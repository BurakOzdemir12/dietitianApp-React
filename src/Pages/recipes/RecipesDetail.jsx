import React, { useContext, useState } from "react";
import { Form, useParams } from "react-router-dom";
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
import { blue, blueGrey, green, grey, red, yellow } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Divider from "@mui/material/Divider";
import { dark } from "@mui/material/styles/createPalette";
import NutritionComponent from "./NutritionComponent";
import { Block, ShareOutlined } from "@mui/icons-material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { colors, useTheme } from "@mui/material";

import { ColorModeContext, tokens } from "../../theme";
import PageSkeleton from "../../Components/PageSkeleton";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const RecipesDetail = () => {
  const { id } = useParams();
  const data = useFetch(`${urlRecipes}/${id}`);
  const { loading, error } = useFetch(urlRecipes);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  if (loading) return <PageSkeleton/>;
  if (error){
     <PageSkeleton/>
      window.location.reload()

  }
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
  const cookTime = setdata.cooktime || 0;
  const repairOnTime = setdata.preparationTime || 0;

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
    <Box
      sx={{
        background: colors.backGround[100],
      }}
    >
      <Row noGutters>
        <Container maxWidth="xl">
          <Grid mt={4} container>
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
              <Box
                mb={4}
                display="grid"
                gridTemplateColumns="repeat(12,minmax(0, 1fr))"
                gridAutoRows="60px"
                gap="5px"
              >
                <Typography
                  sx={{
                    "@media (max-width: 768px)": {
                      gridColumn: "auto / span 12",
                    },
                    color: colors.grey[100],
                  }}
                  mb={0}
                  mt={1}
                  variant="h2"
                  gridColumn="span 4"
                  gridRow="span 1"
                >
                  {" "}
                  {setdata.name}
                </Typography>
                <Box
                  sx={{
                    "@media (max-width: 767px)": { gridColumn: "auto /span 6" },
                  }}
                  gridColumn="span 2"
                  gridRow="span 1"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <BookmarkIcon sx={{ ":hover": "green" }} />
                  <BookmarkBorderIcon sx={{ ":hover": "green" }} />
                </Box>
                <Box
                  sx={{
                    "@media (max-width: 767px)": {
                      gridColumn: "auto / span 6",
                    },
                  }}
                  gridColumn="span 2"
                  gridRow="span 1"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <ShareOutlinedIcon sx={{ fontSize: "35px" }} />
                </Box>
              </Box>
              <Box
                mb={4}
                display="grid"
                gridTemplateColumns="repeat(12,minmax(0, 1fr))"
                gridAutoRows="40px"
                gap="5px"
                // sx={{
                //   "& > div ": { gridColumn: isNonMobile ? undefined : "span 12" },
                // }}
              >
                <Box
                  sx={{ "@media (max-width: 767px)": { gridColumn: "span 4" },
                backgroundColor: colors.greenAccent[900],
                }}
                  gridColumn="auto / span 2"
                  gridRow="span 1"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography fontSize={20} variant="h5">Diyetisyen Adı</Typography>
                </Box>
                <Box
                  sx={{ "@media (max-width: 767px)": { gridColumn: "span 4" }  ,backgroundColor: colors.greenAccent[900], }}
                  gridColumn="auto / span 2"
                  gridRow="span 1"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography>20.11.2024</Typography>
                </Box>
                <Box
                  sx={{ "@media (max-width: 767px)": { gridColumn: "span 4" } ,backgroundColor: colors.greenAccent[900], }}
                  gridColumn="auto / span 2"
                  gridRow="span 1"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography>35 yorum</Typography>
                </Box>
                <Box
                  sx={{ "@media (max-width: 767px)": { gridColumn: "span 4" } ,backgroundColor: colors.greenAccent[900], }}
                  gridColumn="auto / span 2"
                  gridRow="span 1"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography>8 kaydedildi</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              lg={8}
              xl={8}
              sx={{
                // background: "blue",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                justifyContent="start"
                sx={{
                  width: "100%",
                  height: "600px",
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
                    objectFit: "contain",
                    display: "block",
                    margin: "auto",
                  }}
                />
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                      md: "none",
                      lg: "none",
                      xl: "none",
                    },
                    "@media (max-width: 767px)": {
                      display: "none",
                  },
                    // Sadece 768px altında göster
                    margin: "0 auto",
                    backgroundColor: colors.greenAccent[900],
                    width: "40%",
                    
                  }}
                >
                  {setdata && (
                    <NutritionComponent data={setdata.nutrition} />
                  )}
                </Box>
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
                    "@media (min-width: 1024px)": {
                      justifyContent: "center",
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
                <Typography variant="h5">Recipes detail for recipe Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum obcaecati, nisi tempore error assumenda ex doloremque quae consequatur porro, repudiandae enim nobis perferendis reprehenderit placeat rerum! Quibusdam, maiores nobis.</Typography>

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
              sx={{
                maxWidth: "100%",
                // background: "red",
                "@media (width: 768px)": {
                  backgroundColor: blueGrey[500],
                  display: "none",
                },
              }}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={4}
            >
              <Box
                sx={{py: 0.1,
                  margin: "0 auto",
                  display: { sm: "block", lg: "block", xl: "block" },
                  backgroundColor: colors.greenAccent[900],
                  backgroundopacity: 0.5,
                  width: {
                    xl: "100%",
                    lg: "100%",
                    md: "100%",
                    sm: "75%",
                    xs: "100%",
                  },
                  "@media (width: 820px)": {
                    display: "none",
                  },
                }}
              >
                {setdata && <NutritionComponent data={setdata.nutrition} />}
              </Box>
            </Grid>
            <Grid
              sx={{
                maxWidth: "100%",
                backgroundColor: yellow[500],
              }}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={4}
            >
              <Typography mt={5}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, eius fugit? Laborum sapiente repellendus odio culpa
                quos beatae maiores eaque consectetur. Architecto adipisci dolor
                consequuntur quae deleniti! Doloremque, commodi quidem.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Row>
    </Box>
  );
};

export default RecipesDetail;
