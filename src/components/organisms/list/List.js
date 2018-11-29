import React from "react";
// UI Elements
import { Card } from "../../molecules";
// Styles
import "./styles.css";

const List = ({ items }) => (
  <div class="list-cards">
    {items &&
      items.map(({ title, content }) => (
        <Card title={title} content={content} />
      ))}
  </div>
);

export default List;
