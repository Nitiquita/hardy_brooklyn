"use strict";
import React, { Component } from "react";
import { database } from "../../firebase";

let eventStyles = {
  showEvent: {
    visibility: "visible"
  },
  hideEvent: {
    visibility: "hidden"
  }
}

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      eventTitle: "",
      eventLocation: "",
      eventDate: "",
      eventAddress: "",
      ticketLink: "",
      event: "hideEvent"
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEventAddress = this.handleEventAddress.bind(this);
    this.handleEventDate = this.handleEventDate.bind(this);
    this.handleEventLocation = this.handleEventLocation.bind(this);
    this.handleTicketLink = this.handleTicketLink.bind(this);
    this.handleEventTitle = this.handleEventTitle.bind(this);
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
      <section id="admin" style={styles}>
        <form onSubmit={this.handleSubmit}>
          <h1>Add Event Information</h1>
          Event Title{" "}
          <input
            value={this.state.eventTitle || ''}
            type="text"
            name="eventTitle"
            onChange={this.handleEventTitle}
          />
          <br/>
          Date{" "}
          <input value={this.state.eventDate} type="text" name="eventDate" onChange={this.handleEventDate} />
          <br/>
          Event Location Name<input
            value={this.state.eventLocation || ''}
            type="text"
            name-="eventLocation"
            onChange={this.handleEventLocation}
          />
          <br/>
          Address{" "}
          <input
            value={this.state.eventAddress || ''}
            type="text"
            name="eventAddress"
            onChange={this.handleEventAddress}
          />
          <br/>
          <div  id="ticket-link">
          <h1>Add Ticket Link</h1>
          Link{" "}
          <input
          value={this.state.ticketLink || ''}
            type="text"
            name="ticketLink"
            onChange={this.handleTicketLink}
          />
          </div>
          <button>submit</button>


        <h1>Add and Edit Photos</h1>
        </form>
        {/* show all photos
          allow upload of photos
          admin can select which photos appear in rotation */}
      </section>
    );
  }
}
