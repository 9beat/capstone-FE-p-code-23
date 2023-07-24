import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import React, { useState, useEffect } from "react";

const ScrollToTopBtn = () => {
  const [showButton, setShowButton] = useState(false);
  const theme = useTheme();
  const wideScreen = useMediaQuery("(min-width:800px)");

  const primaryLight = theme.palette.primary.light
  const primaryMain = theme.palette.background.main

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <>
    { wideScreen ? (
        <div 
            style={{ 
              backgroundColor: "transparent", 
              color: primaryLight, 
              border: "2px solid",
              borderColor: primaryLight,
              width: "6rem", 
              height: "3rem",
              position: "fixed",
              bottom: "8rem",
              right: "8rem",
              borderRadius: "2%",
              cursor: "pointer",
              display: showButton ? "flex" : "none",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              zIndex: 100
            }}
            className={`scroll-to-top-button ${showButton ? "show" : ""}`}
            onClick={scrollToTop}
          >
            BackToTop
          </div>
    ) : (
      <div 
            style={{ 
              backgroundColor: primaryMain, 
              color: primaryLight, 
              border: "2px solid",
              borderColor: primaryLight,
              width: "3rem", 
              height: "3rem",
              position: "fixed",
              bottom: "20rem",
              right: "2rem",
              borderRadius: "15%",
              cursor: "pointer",
              display: showButton ? "flex" : "none",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              zIndex: 100
            }}
            className={`scroll-to-top-button ${showButton ? "show" : ""}`}
            onClick={scrollToTop}
          >
            UP
          </div>
    )

    }
    </>
  );
};

export default ScrollToTopBtn;