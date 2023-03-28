import React from "react";
import { Link } from "react-router-dom";
interface FooterProps {}
function Footer(props: FooterProps) {
  return (
    <div>
      Footer <Link to="about">A Propos</Link>
    </div>
  );
}

export default Footer;
