import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, useContext, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../home/counter.css";
import "../home/home.css";

import startImage from "../../Components/images/homePage.jpg";
import startImageDark from "../../Components/images/darkHomepage.jpg";

import dietetician from "../../Components/images/diyetisyenSena.jpg";
import "./multi-animated-counter";
import { Button, Card, Carousel, Col, Row } from "reactstrap";
import { Container, Typography, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
const Home = () => {
  const [counterOn, setCounterOn] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <div>
      <Row noGutters>
        <Col
          style={{ maxHeight: "95ch", minHeight: "30ch" }}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className="  mt-0"
        >
          {theme.palette.mode === "dark" ? (
            <img className="startimg" src={startImageDark}></img>
            
          ) : (
            <img
              style={{ position: "static" }}
              className="startimg"
              src={startImage}
            ></img>
          )}
        </Col>
        {/* <div className=""></div> */}

        <Col
          id="about"
          style={{
            maxHeight: "145ch",
            backgroundColor: colors.seashellBackground[400],
          }}
          className="  gx-5  about"
          xs={12}
          sm={12}
          md={8}
          lg={7}
          xl={8}
        >
          <h6 className=" dot mx-5 ">.</h6>
          <h4 className="hello  mx-5  py-5 px-1">
            Diyetisyen <br /> Sena Selen Baki
          </h4>
          <p className="abouttext mx-4 mt-2">
            Aliquet porttitor lacus luc Ac turpis egestas maecenas pharetra
            convallis posuere morbi leo urna. Lacus vestibulum sed arcu non odio
            euismod. <br /> <br /> At erat pellentesque adipiscing commodo.
            Massa id neque aliquam vestibulum. Sed nisi lacus sed viverra tellus
            in hac. In pellentesque massa placerat duis ultricies lacus sed
            turpis.
          </p>{" "}
          <Button
            style={{
              color: colors.primary[100],
            }}
            className="  Readmore mt-3  mx-5"
          >
            {" "}
            Read More
          </Button>
        </Col>

        <Col
          style={{ maxHeight: "145ch" }}
          xs={12}
          sm={12}
          md={12}
          lg={5}
          xl={4}
        >
          <img className="img2" src={dietetician}></img>
        </Col>
      </Row>

      {/* Counter */}
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <Col   style={{ paddingTop:55,paddingBottom:55,  backgroundColor: colors.backGround[300] }}>
          <Container maxWidth="xxl">
            <Row noGutters>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <h2
                  className="mt-5 CounterHeader"
                  style={{ fontSize: 34, fontWeight: 500 }}
                >
                  Birlikte Daha İyiye
                </h2>
                <h4 className="mt-3 CounterHeader" style={{ opacity: "0.85" }}>
                  Sağlıklı Yaşam Yolculuğunuzda Yanınızdayız!{" "}
                </h4>
              </Col>
              <Col className="mt-4" xs={12} sm={12} md={6} lg={5} xl={5}>
                <Row noGutters>
                  <Col xs={3} sm={3} md={6} lg={6} xl={6}>
                    <div id="counters_1">
                      <div class="cont">
                        <div class="row">
                          <div className="counter">
                            {/* <img className="counterImage"></img> */}
                            {counterOn && (
                              <CountUp
                                start={0}
                                end={232}
                                duration={2}
                                delay={0}
                              />
                            )}
                            <p class="sign">+</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="text">Danışan Hizmeti Verildi</div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={3} sm={3} md={6} lg={6} xl={6}>
                    <div id="counters_1">
                      <div class="cont ">
                        <div class="row ">
                          <div class="counter ">
                            {counterOn && (
                              <CountUp
                                start={0}
                                end={124}
                                duration={2}
                                delay={0}
                              />
                            )}
                            <p class="sign">+</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="text">Diyetisyenlerimiz</div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={3} sm={3} md={6} lg={6} xl={6}>
                    <div id="counters_1">
                      <div class="cont">
                        <div class="row">
                          <div class="counter">
                            {counterOn && (
                              <CountUp
                                start={0}
                                end={4526}
                                duration={2}
                                delay={0}
                              />
                            )}
                            <p class="sign">+</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="text">Yapılan Randevu</div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={3} sm={3} md={6} lg={6} xl={6}>
                    <div id="counters_1">
                      <div class="cont">
                        <div class="row">
                          <div class="counter num">
                            {counterOn && (
                              <CountUp
                                start={0}
                                end={37}
                                duration={2}
                                delay={0}
                              />
                            )}
                            <p class="sign">+</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="text">Ulaşılan Hayal..</div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
      </ScrollTrigger>
      {/* Join Community */}
      {/* <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <img className="joinImg"></img>
        </Col> */}
    </div>
  );
};

export default Home;
