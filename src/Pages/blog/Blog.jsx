import {
  Box,
  Button,
  ButtonBase,
  ButtonGroup,
  Container,
  InputBase,
  useTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";
import BlogCard from "../../Components/blog/BlogCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { ColorModeContext, tokens } from "../../theme";

import blogimg from "../../Components/images/products/SALMON_large.png";
import Header from "../../Components/Header";

const Blog = ({search,setSearch}) => {
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  
  const [selectedCategory, setSelectedCategory] = useState("all");
  const handleCategory = (category) => {
    setSelectedCategory(category);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        backgroundColor: colors.backGround[400],
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <br />
      </Box>

      <Container maxWidth="xl">
        <Header
          title="Blog"
          subtitle="Sağlıklı Yaşam hakkındaki tüm yazıları buradan takip edebilirsiniz"
        />
        {/* Last submitted Card */}
        <Box
          justifySelf="center"
          maxWidth="75%"
          sx={{
            mb: 15,
            "@media (max-width:1024px)": {
              maxWidth: "100%",
            },
          }}
        >
          <Card
            sx={{
              backgroundColor: colors.backGround[300],

              mb: 10,
              mt: 2,
              "@media (min-width:768px)": {
                display: "flex",
              },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography fontWeight={700} mb={2} variant="h3">
                  Live From Space
                </Typography>
                <Typography
                  letterSpacing={1}
                  variant="h50"
                  sx={{ opacity: 0.9, color: "dark" }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Pariatur necessitatibus illo corrupti incidunt error? Eaque
                  beatae inventore laboriosam fuga dicta similique eum
                  reiciendis, animi repellat deleniti sint odio ducimus expedita
                  non explicabo rem ipsam! Temporibus velit cupiditate amet
                  voluptate libero autem, perspiciatis voluptatum corrupti,
                  cumque assumenda veritatis quaerat deleniti! Veniam,
                  perspiciatis vitae quidem suscipit aspernatur numquam minus
                  recusandae cum blanditiis a aliquid adipisci incidunt! Esse
                  perspiciatis, odit harum repellat obcaecati, officia sed cum
                  qui laudantium, sequi aut velit officiis consectetur.
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <Button
                  style={{
                    color: colors.primary[100],
                  }}
                  className="  Readmore mt-0  mx-2"
                >
                  {" "}
                  Read More
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                alignContent: "center",
                minWidth: "45%",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  p: 1,
                  width: "100%",
                }}
                image={blogimg}
                alt="L"
              />
            </Box>
          </Card>
        </Box>
        <Box
          sx={{
            gridTemplateColumns: "repeat(12,minmax(0,1fr))",
            gridAutoRows: "40px",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#013220",
            paddingBottom: 5,
            paddingTop: 5,
            width: "100%",
            height: "100%",
            mb: 7,
            "@media (max-width: 440px)": {
              display: "inline-flex",
              flexDirection: "column",

            },
          }}
        >
          <InputBase
          value={search}
          onChange={handleSearchChange}
            placeholder="Yazı Ara..."
            sx={{
              "@media (max-width: 1024px)": {
               width: "82%",
              },
              // opacity: 0.8,
              ".MuiInputBase-input": {
                marginLeft: 2,
              },
              "&:placeholder":{
                mx: 5,
                color: "black",
              },
              fontSize: 20, 
              justifySelf:"center",
              width: "50%",
              gridColumn: "span 12",
              gridRow: "span 3",
              color: "black",
              backgroundColor: "#E1D9D1",
            }}
          />
          <Button
            onclick={() => handleCategory("all")}
            sx={{
              
              gridColumn: "span 2",
              gridRow: "span 2",
              "@media ()": {},
              mx: 2,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#E1D9D1",
                color: "black",
              },
            }}
          >
            <Typography
              sx={{
                "&:hover": {
                  color: "black",
                },
              }}
              color="white"
              variant="h4"
            >
              Hepsi
            </Typography>
          </Button>
          <Button
            sx={{
              
              gridColumn: "span 2",
              gridRow: "span 2",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#E1D9D1",
              },
            }}
          >
            <Typography
              sx={{
                "&:hover": {
                  color: "black",
                },
              }}
              color="white"
              variant="h5"
            >
              Kilo Verme
            </Typography>
          </Button>
          <Button
            sx={{
              gridColumn: "span 2",
              gridRow: "span 2",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#E1D9D1",
              },
            }}
          >
            <Typography
              sx={{
                "&:hover": {
                  color: "black",
                },
              }}
              color="white"
              variant="h5"
            >
              Sağlıklı Beslenme
            </Typography>
          </Button>
          <Button
            sx={{
              gridColumn: "span 2",
              gridRow: "span 2",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#E1D9D1",
              },
            }}
          >
            <Typography
              sx={{
                "&:hover": {
                  color: "black",
                },
              }}
              color="white"
              variant="h5"
            >
              Fitness ve Exersiz
            </Typography>
          </Button>
          <Button
            sx={{
              gridColumn: "span 2",
              gridRow: "span 2",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#E1D9D1",
              },
            }}
          >
            <Typography
              sx={{
                "&:hover": {
                  color: "black",
                },
              }}
              color="white"
              variant="h5"
            >
              Psikoloji ve Disiplin
            </Typography>
          </Button>
        </Box>

        <Box
          sx={{
            backgroundColor: colors.backGround[400],
          }}
          display="grid"
          gridTemplateColumns="repeat(12,minmax(0,1fr))"
          gridAutoRows="180px"
          nogutters
        >
          <Box
            mx={1}
            gridColumn="span 4"
            gridRow="span 3"
            sx={{
              "@media (max-width:1024px)": {
                gridColumn: "span 4",
                gridRow: "span 3",
              },
              "@media (max-width: 425px)": {
                gridColumn: "span 12",
                gridRow: "span 3",
              },
            }}
          >
            <BlogCard />
          </Box>
          <Box
            mx={1}
            gridColumn="span 4"
            gridRow="span 3"
            sx={{
              "@media (max-width:1024px)": {
                gridColumn: "span 4",
                gridRow: "span 3",
              },
              "@media (max-width: 425px)": {
                gridColumn: "span 12",
                gridRow: "span 3",
              },
            }}
          >
            <BlogCard
            search={search}
            selectedCategory={selectedCategory}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
