"use strict";
import React, { Component } from "react";
import Uploader from "./Uploader";

let eventStyles = {
  showEvent: {
    visibility: "visible"
  },
  hideEvent: {
    visibility: "hidden"
  }
};

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEventTitle(event) {
    this.setState({
      eventTitle: event.target.value
    });
  }

  handleEventLocation(event) {
    this.setState({
      eventLocation: event.target.value
    });
  }

  handleEventDate(event) {
    this.setState({
      eventDate: event.target.value
    });
  }

  handleEventAddress(event) {
    this.setState({
      eventAddress: event.target.value
    });
  }

  handleTicketLink(event) {
    this.setState({
      ticketLink: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let eventTitle = this.state.eventTitle;
    let eventDate = this.state.eventDate;
    let eventLocation = this.state.eventLocation;
    let eventAddress = this.state.eventAddress;
    let ticketLink = this.state.ticketLink;
    database.ref("events/").set({
      eventTitle: eventTitle,
      eventDate: eventDate,
      eventLocation: eventLocation,
      eventAddress: eventAddress,
      ticketLink: ticketLink
    });
    this.setState({
      eventTitle: "",
      eventDate: "",
      eventLocation: "",
      eventAddress: "",
      ticketLink: ""
    });
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
      width: this.state.width,
      height: this.state.height
    };
    return (
      <section style={styles}>
      <div id="admin">
        <form onSubmit={this.handleSubmit}>
          <h1>Add Event Information</h1>
          <h5>Paste HTML code from Brown Paper Tickets Widget</h5>
          <textarea />
          <br />
          <button>submit</button>
        </form>
        <Uploader/>
        </div>
      </section>
    );
  }
}
