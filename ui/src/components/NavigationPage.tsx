import React from "react";
import Footer from "../pages/layout/Footer";
import Header from "../pages/layout/Header";
interface NavigationPageProps {
  children: JSX.Element;
}
function NavigationPage(props: NavigationPageProps) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default NavigationPage;
