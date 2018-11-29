import React from "react";
// UI Elements
import { Title, BodyText } from "../../atoms";
// Styles
import "./styles.css";

const Card = ({ title, content }) => (
  <div className="card">
    <Title text={title} />
    <BodyText content={content} />
  </div>
);

export default Card;
