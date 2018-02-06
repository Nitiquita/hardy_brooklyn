"use strict";
import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
        height: this.props.height
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
