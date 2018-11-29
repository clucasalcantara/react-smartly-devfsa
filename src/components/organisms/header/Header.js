import React from "react";
// Styles
import "./styles.css";

const Header = ({ title }) => (
  <div className="header">
    <h1 className="header-title">{title}</h1>
  </div>
);

export default Header;
