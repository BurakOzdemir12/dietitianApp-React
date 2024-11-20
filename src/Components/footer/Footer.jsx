import React, { Component, useContext } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "../footer/footer.css";

import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { ColorModeContext, tokens } from "../../theme";
import { Typography, useTheme } from "@mui/material";
import { green } from "@mui/material/colors";

function Footer() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const liComponent = {
    color: colors.grey[100],
    "&:hover": {
      color: colors.primary[900],
    },
  };
  return (
    <div className="">
      <Row  noGutters>
        <Col
          style={{ backgroundColor: colors.seashellBackground[400] }}
          className="footer"
          xs={12}
          sm={3}
          md={12}
          lg={6}
          xl={6}
        >
          <h4 className="aboutHeader mt-5">İletişime Geç</h4>
          <p className="aboutText mt-4">Sağlıklı Yaşamdan Haberdar Olmak İçin Sen de Gel</p>

          <div className="formField mt-5">
            <input
              type="text"
              className="inputs mt-3"
              placeholder="First Name"
            ></input>
          </div>
          <div className="formField">
            <input
              type="text"
              className="inputs mt-3"
              placeholder="Your e-mail"
            ></input>
          </div>
          <div className="formField">
            <Button  type="submit" className="submit mt-4 mb-5  ">
              Gönder
            </Button>
          </div>
        </Col>
        <Col
          style={{ backgroundColor: colors.seashellBackground[400] }}
          className="footer"
          xs={12}
          sm={6}
          md={6}
          lg={3}
          xl={3}
        >
          <div>
            <h5 class="fw-dark mt-5 ">Linkler</h5>
            <ul class="list-unstyled   ">
              <div>
                <li class="my-3">
                  <a
                    style={liComponent}
                    href="/home"
                    class=" text-decoration-none "
                  >
                    <span className="">Ana Sayfa</span>
                  </a>
                </li>
              </div>
              <li  class="my-3">
                <a
                  style={liComponent}
                  href=""
                  class=" text-decoration-none "
                >
                  <span>Kimim Ben?</span>
                </a>
              </li>
              <li  class="my-3">
                <a
                  style={liComponent}
                  href=""
                  class=" text-decoration-none "
                >
                  <span>Kalori Hesapla</span>
                </a>
              </li>
              <li  class="my-3">
                <a
                  style={liComponent}
                  href=""
                  class=" text-decoration-none"
                >
                  <span>Yemek Tarifleri</span>
                </a>
              </li>
              <li  class="my-3">
                <a
                  style={liComponent}
                  href=""
                  class=" text-decoration-none "
                >
                  <span>Blog</span>
                </a>
              </li>
              <li  class="my-1">
                <a
                  style={liComponent}
                  href=""
                  class=" text-decoration-none "
                >
                  <span>İletişime Geç</span>
                </a>
              </li>
              {/* <li style={liComponent} class="my-3">
                <a
                  style={liComponent}
                  href=""
                  class=" text-decoration-none "
                >
                  <span>MEDIA</span>
                </a>
              </li> */}
            </ul>
          </div>
        </Col>
        <Col
          style={{ backgroundColor: colors.seashellBackground[400] }}
          className="footer"
          xs={12}
          sm={6}
          md={6}
          lg={3}
          xl={3}
        >
          <h5 class="fw-dark mt-4 mb-4">Follow Us</h5>
          <div>
            <ul class="list-unstyled  d-flex">
              <li>
                <a
                  style={{ color: colors.grey[100] }}
                  href=""
                  class=" text-decoration-none fs-4 me-4 "
                >
                  <FaFacebook className="footerIcons" />
                </a>
              </li>
              <li>
                <a
                  style={{ color: colors.grey[100] }}
                  href=""
                  class=" text-decoration-none fs-4 me-4"
                >
                  <FaInstagram className="footerIcons" />
                </a>
              </li>
              <li>
                <a
                  style={{ color: colors.grey[100] }}
                  href=""
                  class=" text-decoration-none fs-4 me-4"
                >
                  <FaTwitter className="footerIcons" />
                </a>
              </li>
              <li>
                <a
                  style={{ color: colors.grey[100] }}
                  href=""
                  class=" text-decoration-none fs-4 me-4"
                >
                  <FaPinterest className="footerIcons" />
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
