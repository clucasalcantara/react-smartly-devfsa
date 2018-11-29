import React from "react";
// Styles
import "./styles.css";

const Hero = ({ imgUrl }) => (
  <div
    style={{
      background:
        "url(https://www.astro.cz/apod_data/2016/03/EquinoxSunset_Christen_1852.jpg)"
    }}
    className="hero-img"
  />
);

export default Hero;
