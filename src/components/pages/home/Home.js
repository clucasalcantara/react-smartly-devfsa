import React, { Component, Fragment } from "react";
// Client Request
import { getCards } from "../../../services/api";
// UI Elements
import { Header, Hero, List } from "../../../components/organisms";

import "./styles.css";

class Home extends Component {
  state = {
    cardList: []
  };

  async componentDidMount() {
    const cardList = await getCards();

    this.setState({ cardList });
  }

  render() {
    const { cardList } = this.state;

    return (
      <Fragment>
        <Header title="My Awesome Cards" />
        <Hero />
        <List items={cardList} />
      </Fragment>
    );
  }
}

export default Home;
