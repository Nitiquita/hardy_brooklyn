"use strict";
import React, { Component } from "react";
import { database } from "../../firebase"

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      query: "",
      time: "",
      mailingList: false,
      checked: false
    }
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
    this.handleChangeQuery = this.handleChangeQuery.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeMailingList = this.handleChangeMailingList.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeFirstName(event) {
    this.setState({ firstName: event.target.value})
  }

  handleChangeLastName(event) {
    this.setState({ lastName: event.target.value})
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value})
  }

  handleChangePhoneNumber(event) {
    this.setState({ phoneNumber: event.target.value})
  }

  handleChangeQuery(event) {
    this.setState({ query: event.target.value})
  }

  handleChangeTime(event) {
    this.setState({ time: event.target.value})
  }

  handleChangeMailingList(event) {
    this.setState({ checked: true })
  }

  handleSubmit(event) {
    event.preventDefault()
    let submitDate = new Date()
    database.ref("contact/" + submitDate).set({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      query: this.state.query,
      time: this.state.time,
      mailingList: !this.state.checked
    })
    this.refs.firstName.value = "";
    this.refs.lastName.value = "";
    this.refs.email.value = "";
    this.refs.phoneNumber.value = "";
    this.refs.query.value = "";
    this.refs.time.value = "";
    this.setState({ checked: false })
  }


  render() {
    const styles = {
        height: this.props.height
    }
    return (
      <section style={styles} id="contact">
        <h1>How can I contact Hardy Brooklyn?</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-input-item">
          First name:
          <br />
          <input onChange={this.handleChangeFirstName} type="text" name="firstName" ref="firstName" />
          </div>
          <div className="form-input-item">
          Last name:
          <br />
          <input onChange={this.handleChangeLastName} type="text" name="lastName" ref="lastName"/>
          </div>
          <div className="form-input-item">
          Email:
          <br />
          <input onChange={this.handleChangeEmail} type="text" name="email" ref="email"/>
          </div>
          <div className="form-input-item">
          Phone number:
          <br />
          <input onChange={this.handleChangePhoneNumber} type="text" name="phoneNumber" ref="phoneNumber"/>
          </div>
          <div className="form-input-item">
          Statement/ Question/ Request:
          <br />
          <input onChange={this.handleChangeQuery} id="sqr" type="text" name="query" ref="query"/>
          </div>
          <div className="form-input-item">
           When is the best time to call you back?
          <br />
          <input onChange={this.handleChangeTime} type="text" name="time" ref="time"/>
          </div>
          <div className="form-input-item">
          <input onChange={this.handleChangeMailingList} type="checkbox" name="mailingList" value="mailingList" checked={this.state.checked}/>
          Add me to the Hardy Brooklyn mailing list!
          <br />
          <button type="submit">SUBMIT</button>
          </div>
        </form>
      </section>
    );
  }
}
