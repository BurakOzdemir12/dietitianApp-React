import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../Pages/recipes/Recipes.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { colors, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const RecipiesCard = ({ items }) => {
  const theme =useTheme();
  const colors=tokens(theme.palette.mode);
  const colorMode=useContext(ColorModeContext);
  return (
    <Box sx={{ width: "100%", flexGrow: 1 }} className="">
      {" "}
      {/* recipe-grid */}
      <Grid
        container
        rowSpacing={8}
        columnSpacing={{ xs: 4, sm: 4, md: 1.4, lg: 1.8, xl: 2.5, xxl: 1 }}
      >
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
                <Item sx={{ m: 0, p: 0.4 }}>
                  <Card
                    component="li"
                    sx={{ minWidth: "100%", minHeight: "100%", flexGrow: 1 }}
                  >
                    <CardMedia
                      component="img"
                      image={`http://localhost:5149${item.img}` || null}
                      alt={item.name}
                      sx={{ height: "100%", width: "100%" }}
                    />
                    <CardContent>
                      <Typography
                        variant="h5" // "level" yerine "variant" kullanıyoruz
                        fontWeight="bold" // "fontWeight" ayarını yineledik
                      sx={{ color:colors.primary[500] }}                   
                        mt={{ xs: 0, sm: 0, md: 0,lg:0, xl: 0, xxl: 0 }} // margin-top ayarları
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
