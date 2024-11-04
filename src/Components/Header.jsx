import { Typography, Box, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.backGround[500]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>

      <Typography
        variant="h5"
        color={colors.backGround[500]}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
