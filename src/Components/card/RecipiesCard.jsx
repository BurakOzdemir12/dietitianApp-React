import React from "react";
import { Link } from "react-router-dom";
import "../../Pages/recipes/Recipes.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Card, CardContent, CardCover, Typography } from "@mui/joy";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const RecipiesCard = ({ items }) => {
  // console.log(items[0].img)
  // console.log(items);
  return (
    <Box sx={{ width: "100%", flexGrow: 1 }} className="">
      {" "}
      {/* recipe-grid */}
      <Grid container rowSpacing={8} columnSpacing={{xs:4, sm:4,md:1.4,lg:1.8,xl: 2.5 ,xxl:1 }}>
        {items.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3} xl={3} xxl={4}>
            <Box
              component="ul"
              sx={{
                display: "",
                gap: 0,
                flexWrap: "nowrap",
                p: 0,
                m: 0,
                height: "100%",
                width: "100%",
              }}
            >
              <Link to={`/recipes/${item.id}`}>
                <Item sx={{ m:0,p:0.4,   }}>
                  <Card
                    component="li"
                    sx={{ minWidth: "100%", minHeight: "100%", flexGrow: 1 }}
                  >
                    <CardCover>
                      <img
                        style={{ height: "100%", width: "100%" }}
                        className=""
                        src={`http://localhost:5149${item.img}`||null}
                        alt={item.name}
                      />
                      {/* <h5 className="entry-title" itemProp="name">
                    {item.name}
                  </h5> */}
                    </CardCover>
                    <CardContent>
                      <Typography
                        level="body-lg"
                        fontWeight="lg"
                        textColor="#fff"
                        mt={{ xs: 40, sm: 50,md:50 ,xl:60,xxl:80}}
                      >
                        {item.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Item>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RecipiesCard;
