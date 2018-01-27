"use strict";
import React, { Component } from "react";

let navStyles = {
  showNav: {
    visibility: "visible"
  },
  hideNav: {
    visibility: "hidden"
  }
};

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: "hideNav"
    };
    this.showNav = this.showNav.bind(this);
    this.hideNav = this.hideNav.bind(this);
  }

  showNav() {
    this.setState({
      nav: "showNav"
    });
  }

  hideNav() {
    this.setState({
      nav: "hideNav"
    });
  }

  render() {
    return (
      <div>
        <img
          id="nav"
          src={require("../../public1/icons/icons8-menu.svg")}
          onMouseEnter={this.showNav}
        />
        <ul id="nav-items" style={navStyles[this.state.nav]}
        onMouseLeave={this.hideNav}>
          <li><a href="#events">Events</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    );
  }
}
