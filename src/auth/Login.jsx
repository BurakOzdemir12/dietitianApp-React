import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Grid2,
  Input,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Col, Row } from "reactstrap";
import { ColorModeContext, tokens } from "../theme";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Anim from "../Components/Animations/authAnimation/Anim";
const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [isAdmin, setAdmin] = useState(null);
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Box
      sx={{
        backgroundColor: colors.backGround[400],
      }}
    >
      <Grid2 container>
        <Grid2
          sx={{
            "@media (max-width: 820px )": {
              display: "none",
            },
          }}
          item
          size={{ xs: 0, sm: 12, md: 6, lg: 6, xl: 6, xxl: 6 }}
        >
          <Anim />
          {/* <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
            }}
            src="https://html.com/wp-content/uploads/flamingo4x.jpg"
          ></img> */}
        </Grid2>
        <Grid2
          sx={{
            mb: "75px",
            color: "black",
            alignContent: "center",
            justifyItems: "center",
          }}
          item
          size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6, xxl: 6 }}
        >
          <Box
            sx={{
              borderRadius: "25px",
              margin: "40px 40px 20px",
              boxShadow: "0px 5px 23px 11px rgba(3,76,12,0.3)",
              height: "40rem",
              width: "25rem",
              minHeight: "100%",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",

              "@media(max-width:440px)": {
                height: "35rem",
                width: "90%",
              },
            }}
            display="grid"
            gridTemplateColumns="repeat(12,minmax(0,1fr))"
            gridAutoRows="30px"
            noGutters
          >
            <Box gridColumn="span 12" gridRow="span 3">
              <Typography variant="h4" className="text-center" fontWeight={600}>
                {" "}
                Giriş Yap
              </Typography>

              <Typography
                mt={2}
                variant="h5"
                className="text-center "
                fontWeight={400}
                opacity={0.7}
                letterSpacing={0.8}
              >
                {" "}
                Çeşitli işlemler için Giriş yap
              </Typography>
            </Box>
            <Box justifySelf="center" gridColumn="span 12" gridRow="span 3">
              <Button
                variant="outlined"
                sx={{
                  "@media(max-width:440px)": {
                    margin: "0px 20px 0px 20px",
                  },
                  borderRadius: "19px",
                  borderColor: "black",
                }}
              >
                {" "}
                <Typography
                  sx={{
                    "@media(max-width:440px)": {
                      fontSize: "16px",
                      svg: { height: "45px", width: "40px", mx: "10px" },
                    },
                  }}
                  variant="h4"
                  fontWeight={600}
                  fontFamily="serif"
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55"
                    height="45"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M44 20H24v8h11a12 12 0 1 1-3-13l6-6A20 20 0 0 0 4 24a20 20 0 1 0 40-4z"
                    />
                    <path
                      fill="#FF3D00"
                      d="m6 15 7 5a12 12 0 0 1 19-5l6-6a20 20 0 0 0-32 6z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24 44c5 0 10-2 13-5l-6-5a12 12 0 0 1-18-6l-7 5c4 7 10 11 18 11z"
                    />
                    <path
                      fill="#1976D2"
                      d="M44 20H24v8h11c0 2-2 4-4 6l6 5s7-5 7-15v-4z"
                    />
                  </svg>
                  Google ile Giriş Yap
                </Typography>
              </Button>
            </Box>

            <Box gridColumn="span 12" gridRow="span 0">
              <Typography variant="h5">
                <hr />
                Mail Adresin ile Giriş Yap
              </Typography>
            </Box>
            <Box
              padding={5}
              component="form"
              gridColumn="span 12"
              gridRow="span 8"
            >
              <TextField
                sx={{
                  width: "100%",
                  "& .MuiInputBase-input": {
                    color: "black", // Giriş metni rengi
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    color: "black",
                    borderColor: "black", // Çerçeve rengi
                    opacity: 0.3,
                    borderRadius: "19px",
                  },
                  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                    {
                      color: "black",
                      borderColor: "black", // Hover durumunda çerçeve rengi
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      color: "black",
                      borderColor: "green", // Focus durumunda çerçeve rengi
                    },
                }}
                //  {error ?(
                //        id="outlined-basic"
                //        label="abc@email.com"
                //  ):(
                //        error
                //        id="outlined-error-helper-text"
                //        label="Error"
                //        helperText="Incorrect entry."
                //   )
                // }
                id="outlined-basic"
                label="abc@email.com"
                variant="outlined"
                InputLabelProps={{
                  style: { color: "black" }, // Label rengi
                }}
              />
              <TextField
                sx={{
                  width: "100%",
                  "& .MuiInputBase-input": {
                    color: "black", // Giriş metni rengi
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    color: "black",
                    opacity: 0.3,
                    borderRadius: "19px",
                    borderColor: "black", // Çerçeve rengi
                  },
                  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                    {
                      color: "black",
                      borderColor: "black", // Hover durumunda çerçeve rengi
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      color: "black",

                      borderColor: "green", // Focus durumunda çerçeve rengi
                    },
                  mt: 4,
                }}
                id="outlined-basic"
                label="Şifre"
                variant="outlined"
                InputLabelProps={{
                  style: { color: "black" }, // Label rengi
                }}
              />

              {/* <TextField
                error
                id="outlined-error-helper-text"
                label="Error"
                helperText="Incorrect entry."

                defaultValue="Hello World"

              /> */}
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      "& .MuiSvgIcon-root": { fontSize: 28 },
                      color: colors.primary[800],
                      "&.Mui-checked": {
                        color: "darkgreen",
                      },
                    }}
                  />
                }
                label={
                  <Typography variant="h4" sx={{ color: "black" }}>
                    Beni Hatırla
                  </Typography>
                }
              />
            </Box>
            <Box gridColumn="span 12" gridRow="span 2">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "green",

                  borderRadius: "14px",
                  borderColor: "blue",
                  width: "220px",
                  height: "100%",
                  padding: "10px",
                  "&:hover": {
                    backgroundColor: colors.backGround[500],
                  },
                }}
              >
                {" "}
                <Typography variant="h4" fontWeight={600} fontFamily="serif">
                  {" "}
                  Giriş Yap
                </Typography>
              </Button>
            </Box>
            <Box
              sx={{
                justifySelf: "end",
              }}
              gridColumn="span 12"
              gridRow="span 3"
            >
              <Link to="/signUp">
                <Button
                  sx={{
                    mx: 2,
                    textTransform: "none",
                    justifySelf: "end",
                  }}
                >
                  <Typography variant="h5" fontWeight={400} fontFamily="serif">
                    {" "}
                    Hesabın Yok mu? Hemen Kayıt Ol{" "}
                  </Typography>
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Login;
