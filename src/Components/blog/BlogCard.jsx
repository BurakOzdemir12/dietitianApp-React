import { Box, IconButton, useTheme } from "@mui/material";
import React, { useContext } from "react";
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
const BlogCard = ({search,selectedCategory}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box>
     
      <Card sx={{ maxWidth: "100%",
              backgroundColor: colors.backGround[300],

       }}>
        <CardMedia
          sx={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
          component="img"
          alt="green iguana"
          height="100%"
          image={cardimg}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{mt:0.5, mb:1, color: "text.secondary" }}>
        2021-10-10
          </Typography>
          <Typography variant="h5" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton  aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>{" "}
    </Box>
    
  );
};

export default BlogCard;
