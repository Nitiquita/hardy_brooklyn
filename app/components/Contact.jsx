"use strict";
import React, { Component } from "react";

export default class Contact extends Component {
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
      <section style={styles} id="contact">
        <h1>How can I contact Hardy Brooklyn?</h1>
        <form>
          First name:
          <br />
          <input type="text" name="firstName" />
          <br /> Last name:
          <br />
          <input type="text" name="lastName" />
          <br /> Email:
          <br />
          <input type="text" name="email" />
          <br /> Phone number:
          <br />
          <input type="text" name="phoneNumber" />
          <br /> Statement/ Question/ Request:
          <br />
          <input id="sqr" type="text" name="query" />
          <br /> When is the best time to call you back?
          <br />
          <input type="text" name="time" />
          <br /> Add me to the Hardy Brooklyn mailing list!
          <input type="radio" name="mailingList" value="mailingList" />
          <br />
          <button type="submit">SUBMIT</button>
        </form>
      </section>
    );
  }
}
