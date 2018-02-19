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
          <div className="form-input-item">
          First name:
          <br />
          <input type="text" name="firstName" />
          </div>
          <div className="form-input-item">
          Last name:
          <br />
          <input type="text" name="lastName" />
          </div>
          <div className="form-input-item">
          Email:
          <br />
          <input type="text" name="email" />
          </div>
          <div className="form-input-item">
          Phone number:
          <br />
          <input type="text" name="phoneNumber" />
          </div>
          <div className="form-input-item">
          Statement/ Question/ Request:
          <br />
          <input id="sqr" type="text" name="query" />
          </div>
          <div className="form-input-item">
           When is the best time to call you back?
          <br />
          <input type="text" name="time" />
          </div>
          <div className="form-input-item">
          Add me to the Hardy Brooklyn mailing list!
          <input type="radio" name="mailingList" value="mailingList" />
          <br />
          <button type="submit">SUBMIT</button>
          </div>
        </form>
      </section>
    );
  }
}
