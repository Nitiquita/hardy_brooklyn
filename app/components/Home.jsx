import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { database } from "../../firebase";

import Nav from "./Nav";
import Events from "./Events";
import Carousel1 from "./Carousel1";
import About from "./About";
import Carousel2 from "./Carousel2";
import Contact from "./Contact";
import Admin from "./Admin";
import Media from "./Media";
import Carousel3 from "./Carousel3";
import Carousel4 from "./Carousel4";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: "",
      width: 0,
      height: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    database
      .ref("bgimage")
      .once("value")
      .then(snapshot => {
        let image = snapshot.val();
        this.setState({ backgroundImage: image });
      });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    let backgroundImage = this.state.backgroundImage["imageURL"];
    let parallaxStyles;
    this.state.width > 476 ? parallaxStyles = {
      backgroundImage: `linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, 0.048)), url(${backgroundImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundSize: "cover"
    } :
    parallaxStyles = {
      backgroundImage: `linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, 0.048)), url(${backgroundImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "repeat",
      backgroundAttachment: "fixed"
    }
    return (
      <div id="background" style={parallaxStyles}>
        <Nav />
        <Events
          width={this.state.width && this.state.width}
          height={this.state.height && this.state.height}
        />
        <Carousel1 width={this.state.width} />
        <About/>
        <Carousel2 width={this.state.width} />
        <Media/>
        <Carousel3 width={this.state.width} />
        <Contact/>
        <Carousel4 width={this.state.width} />
      </div>
    );
  }
}
