import Box from "@mui/material/Box/Box";
import React from "react";
import Footer from "../pages/layout/Footer";
import Header from "../pages/layout/Header";
interface NavigationPageProps {
  children: JSX.Element;
}
function NavigationPage(props: NavigationPageProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      {props.children}
      <Footer />
    </Box>
  );
}

export default NavigationPage;
