"use strict";

import React, { Component } from "react";

let eventStyles = {
  showEvent: {
    display: "block"
  },
  hideEvent: {
    display: "none"
  }
};


export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      event: "hideEvent"
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.showEvent = this.showEvent.bind(this);
    this.hideEvent = this.hideEvent.bind(this);
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

  showEvent() {
    this.setState({
      event: "showEvent"
    });
  }

  hideEvent() {
    this.setState({
      event: "hideEvent"
    });
  }

  render() {
    const styles = {
      height: this.state.height,
      // width: this.state.width
    };
    console.log(this.state.event);
    return (
      <section style={styles}>
        <div id="event-headline">
          <h1 onMouseEnter={this.showEvent} >
            Where can I see Hardy Brooklyn?
          </h1>
        </div>
        <div id="showEvent" style={eventStyles[this.state.event]}
        onMouseLeave={this.hideEvent}>
          Solas Studio and Hardy Brooklyn Present
          <br /> A Nude Live Art Soiree
          <br /> January 9, 2018 at 6pm
          <br /> Solas Studio
          <br /> West 30th Street
          <br /> New York, NY 10001
          <br />
          <a href="https://www.brownpapertickets.com/event/3213481">Tickets</a>
        </div>
      </section>
    );
  }
}
