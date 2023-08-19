import React, { Component } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "../css/footer.css";

import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

  function Footer()   {

    return (
      <div>
       
          <Row noGutters   >
            <Col className="about" xs={2} sm={3} md={6} lg={6} xl={6}>
              <h4 className="aboutHeader mt-5">Contact Me</h4>
              <p className="aboutText mt-4">Come! Lets Burn Calorie Together</p>

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
                <Button type="submit" className="submit mt-4  ">
                  Submit
                </Button>
              </div>
            </Col>
            <Col className="about" xs={2} sm={3} md={3} lg={3} xl={3}>
              <div>
                <h5 class="fw-dark mt-5 ">Links</h5>
                <ul class="list-unstyled   ">
                  <div>
                    <li class="my-3">
                      <a href="/home" class="text-dark-50 text-decoration-none ">
                        <span className="">Home</span>
                      </a>
                    </li>
                  </div>
                  <li class="my-3">
                    <a href="" class="text-dark-50 text-decoration-none ">
                      <span>ABOUT</span>
                    </a>
                  </li>
                  <li class="my-3">
                    <a href="" class="text-dark-50 text-decoration-none ">
                      <span>CALORIE CALCULATOR</span>
                    </a>
                  </li>
                  <li class="my-3">
                    <a href="" class="text-dark-50 text-decoration-none">
                      <span>RECIPES</span>
                    </a>
                  </li>
                  <li class="my-3">
                    <a href="" class="text-dark-50 text-decoration-none ">
                      <span>BLOGS</span>
                    </a>
                  </li>
                  <li class="my-1">
                    <a href="" class="text-dark-50 text-decoration-none ">
                      <span>CONTACT</span>
                    </a>
                  </li>
                  <li class="my-1">
                    <a href="" class="text-dark-50 text-decoration-none ">
                      <span>MEDIA</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col className="about" xs={2} sm={3} md={3} lg={3} xl={3}>
              <h5 class="fw-dark mt-4 mb-4">Follow Us</h5>
              <div>
                <ul class="list-unstyled  d-flex">
                  <li>
                    <a
                      href=""
                      class="text-black text-decoration-none fs-4 me-4 "
                    >
                      <FaFacebook className="footerIcons" />
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      class="text-black text-decoration-none fs-4 me-4"
                    >
                      <FaInstagram className="footerIcons" />
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      class="text-black text-decoration-none fs-4 me-4"
                    >
                      <FaTwitter className="footerIcons" />
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      class="text-black text-decoration-none fs-4 me-4"
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

export default Footer