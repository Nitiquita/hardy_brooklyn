"use strict";

import React, { Component } from "react";
import Slider from "react-slick";


export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      event: "hideEvent"
    };
    this.showEvent = this.showEvent.bind(this);
    this.hideEvent = this.hideEvent.bind(this);
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
      height: this.props.height
    };
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true
    };
    return (
      <section id="events" style={styles}>
        <div id="event-headline">
          <h1 onMouseEnter={this.showEvent}>Where can I see Hardy Brooklyn?</h1>
        </div>
        <div id="bpt_eventbody">
          <form action="https://www.brownpapertickets.com/addtocart/3235059" >
          <input type="hidden" name="event_id" value="3235059"/>
          <table cellPadding="0" cellSpacing="0" border="0" width="100%" />
          </form>
        </div>
      </section>
    );
  }
}
