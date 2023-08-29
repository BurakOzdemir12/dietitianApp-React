import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Row,
  Col,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import "../navi/navi.css";
import brand from "../images/Brand.PNG";
import { Link } from "react-router-dom";
//@import url('https://fonts.googleapis.com/css2?family=Kaisei+Tokumin:wght@400;500;700&family=Poppins:wght@300;400;500&family=Roboto+Slab:wght@700&display=swap');

function Navi(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const body = document.body;
  // let lastScroll = 0;
  // window.addEventListener("scroll", () => {
  //   const currentScroll = window.scrollY;

  //   if (currentScroll <= 0) {
  //     body.classList.remove("scroll-up");
  //   }
  //   if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
  //     body.classList.remove("scroll-up");
  //     body.classList.add("scroll-down");
  //   }
  //   if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
  //     body.classList.remove("scroll-down");
  //     body.classList.add("scroll-up");
  //   }
  //   if (currentScroll === currentScroll) {
  //     body.classList.add("scrolled-up");
  //   } if(currentScroll!==0) {
  //     body.classList.remove("scrolled-up");
  //   }
  //   lastScroll = currentScroll;
  // });

  return (
    <div class="navlinks fluid  ">
     
        <Row noGutters>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Navbar className="navv" fixed="fixed" expand="xl" {...args}>
              <NavbarBrand className="brand" href="/home">
                <img height={110} width={220} src={brand}></img>
              </NavbarBrand>
              <NavbarToggler className="mx-5" onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className=" nav mt-4 mx-auto" navbar>
                  <NavItem className="mx-3 py-2">
                    <a className="navlink"  href="#about">
                      ABOUT
                    </a>
                  </NavItem>
                  <NavItem className="mx-3 py-2">
                    <a className=" navlink" href="/calculator">
                      CALORIE CALCULATOR
                    </a>
                  </NavItem>
                  {/* <NavItem className="mx-3 py-2">
                    <a className="navlink" href="#">
                      EBOOK
                    </a>
                  </NavItem> */}
                  <NavItem className="mx-3 py-2">
                    <a className="navlink"  href="/recipes">
                      RECIPES
                    </a>
                  </NavItem>
                  <NavItem className="mx-3 py-2">
                    <a className="navlink" href="#">
                      FOOD FACTS
                    </a>
                  </NavItem>
                  <NavItem className="mx-3 py-2">
                    <a className="navlink" href="#">
                      CONTACT
                    </a>
                  </NavItem>
                  {/* <NavItem className="mx-3 py-2">
                    <a className="navlink" href="#">
                      MEDIA
                    </a>
                  </NavItem> */}
                  {/* <NavItem className="navIcon mt-2">
                    <FaFacebook className=" navicons  mx-2" />
                    <FaInstagram className="navicons mx-2" />
                    <FaPinterest className=" navicons mx-2" />
                  </NavItem> */}
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
        </Row>
     
    </div>
  );
}

export default Navi;
