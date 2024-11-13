import { Box, IconButton, useTheme } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import cardimg from "../images/products/SALMON_large.png";
import { Col } from "reactstrap";
import { ColorModeContext, tokens } from "../../theme";
import { urlBlogs } from "../../endpoints";
import useFetch from "../../hooks/useFetch";
import Blog from "../../Pages/blog/Blog";
const BlogCard = ({ blogs, search, selectedCategory, setFilteredDate }) => {
  // console.log(blogs);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (blogs && blogs.description) {
      setDescription(blogs.description);
    }
  });
  const date = new Date(blogs.date);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const filteredDate = `${day}.${month}.${year}`;

  useEffect(() => {
    if (setFilteredDate) {
      setFilteredDate(filteredDate);
    }
  }, [filteredDate, setFilteredDate]);

  return (
    <Box>
      <Card sx={{ maxWidth: "100%", backgroundColor: colors.backGround[300] }}>
        <Box
          sx={{
            height: "100%",
          }}
        >
          <CardMedia
            sx={{
              width: "100%", // Set a fixed width
              height: "350px",
              "@media(max-width:1024px)":{
                width: "100%", // Set a fixed width
                height: "100%",
              },
              objectFit: "contain",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            component="img"
            alt=""
            height="100%"
            image={`http://localhost:5149${blogs.img}` || cardimg}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {blogs.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 0.5, mb: 1, color: "text.secondary", fontWeight: 600 }}
          >
            {/* 2021-10-10 */}
            Yayınlanma Tarihi: {filteredDate}
          </Typography>
          <Typography variant="h5" sx={{ color: "text.secondary" }}>
            <Box dangerouslySetInnerHTML={{ __html: description }}></Box>

            {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default BlogCard;
