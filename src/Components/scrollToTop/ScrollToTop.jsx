import React, { Component, useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "reactstrap";

function ScrollToTop() {
  
  const [backToTopButton, setBackToTopbutton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopbutton(true);
      } else {
        setBackToTopbutton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    
    <div>
      {backToTopButton && (
        <Button className="button" style={{
          
        backgroundColor:"green",
        position: "fixed", 
        bottom: "50px",
        right:"50px",
        height:"50px",
        width:"50px",
        fontSize:"25px",
        }}
        onClick={scrollUp}
        >
          <FaArrowUp />
        </Button>
      )}
      
    </div>
  );
}
export default ScrollToTop;
