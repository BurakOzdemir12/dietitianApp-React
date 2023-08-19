import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../../Components/css/counter.css";
import "../../Components/css/home.css";

import diyetisyen1 from "../../Components/images/diyetisyen1.jpg";

import dietetician from "../../Components/images/About-img-home.jpg";
import "./multi-animated-counter";
import { Button, Card, Carousel, Col, Container, Row } from "reactstrap";
const Home = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div>
      
        <Row noGutters>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="  mt-1 ">
            <img className="startimg" src={diyetisyen1}></img>
          </Col>
          {/* <div className=""></div> */}

          <Col
            id="about"
            className=" gx-5  about"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
          >
            <h6 className="mt-5 mx-5 ">ABOUT</h6>
            <h3 className="hello  mx-5 mt-5 py-5 px-1">Hello There I'm X</h3>
            <p className="abouttext mx-4 mt-5">
              Aliquet porttitor lacus luc Ac turpis egestas maecenas pharetra
              convallis posuere morbi leo urna. Lacus vestibulum sed arcu non
              odio euismod. <br /> <br /> At erat pellentesque adipiscing
              commodo. Massa id neque aliquam vestibulum. Sed nisi lacus sed
              viverra tellus in hac. In pellentesque massa placerat duis
              ultricies lacus sed turpis.
            </p>{" "}
            <Button className="  Readmore mt-5 my-5  mx-5">Read More</Button>
          </Col>

          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <img className="img2" src={dietetician}></img>
          </Col>
        </Row>

        {/* Counter */}
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <Container >
            <Row noGutters>
              <Col  xs={12} sm={12} md={6} lg={6} xl={6}>
                <h2
                  className="mt-5 CounterHeader"
                  style={{ fontSize: 34, fontWeight: 500 }}
                >
                  We Are Growing
                </h2>
                <h4 className="mt-1 CounterHeader" style={{ opacity: "0.85" }}>
                  Lets Work Together{" "}
                </h4>
              </Col>
              <Col className="mt-4" xs={12} sm={12} md={6} lg={5} xl={5}>
                <Row noGutters>
                  <Col xs={3} sm={3} md={6} lg={6} xl={6}>
                    <div  id="counters_1">
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
                          <div class="text">Worked with Customers</div>
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
                          <div class="text">Hours of very hard work</div>
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
                          <div class="text">Hours of very hard work</div>
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
                          <div class="text">Hours of very hard work</div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </ScrollTrigger>
        {/* Join Community */}
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <img className="joinImg"></img>
        </Col>
     
    </div>
  );
};

export default Home;
