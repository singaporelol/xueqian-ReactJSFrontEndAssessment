import React, { Component, Fragment } from "react";
import "./index.scss";
import Header from "../components/header";
import GameList from "../components/gamelist";
import Footer from "../components/footer";
export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <GameList></GameList>
        <Footer></Footer>
      </Fragment>
    );
  }
}
