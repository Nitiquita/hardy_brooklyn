"use strict";

import React, { Component } from "react";

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const styles = {
        height: this.state.height,
        width: this.state.width
    }
    return (
      <section style={styles}>
        <div>
          <h1>Where can I see Hardy Brooklyn?</h1>
        </div>
      </section>
    );
  }
}
