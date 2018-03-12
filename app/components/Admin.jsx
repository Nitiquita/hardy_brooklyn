"use strict";
import React, { Component } from "react";
import Uploader from "./Uploader";
import AddMedia from "./AddMedia";
import AddSocialMedia from "./AddSocialMedia"
import { database } from "../../firebase";
import { Link } from "react-router-dom";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      HTML: "",
      link: "",
      date: ""
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeLink = this.handleChangeLink.bind(this);
    this.handleSubmitLink = this.handleSubmitLink.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  handleChange(event) {
    this.setState({
      HTML: event.target.value
    });
  }

  handleChangeLink(event) {
    this.setState({
      link: event.target.value
    })
  }

  handleSubmit(event) {
    let HTML = this.refs.HTML;
    event.preventDefault();
    database.ref("events/").set({
      HTML: this.state.HTML
    });
    HTML.value = "";
  }

  handleSubmitLink(event) {
    event.preventDefault();
    database.ref("events/links/" + this.state.date).set({
      link: this.state.link
    })
    this.refs.link.value = "";
    this.refs.date.value = "";
  }

  handleDate(event) {
    this.setState({
      date: event.target.value
    })
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
          <Link to="/">
            <button id="go-home">HOME</button>
          </Link>
          <form onSubmit={this.handleSubmit}>
            <h1>Add Event Information for Large Screens</h1>
            <h5>Paste HTML code from Brown Paper Tickets Widget</h5>
            <h6>For more than one event paste all HTML together</h6>
            <textarea ref="HTML" onChange={this.handleChange} />
            <br />
            <button>submit</button>
          </form>
          <form onSubmit={this.handleSubmitLink}>
            <h1>Add Event Link for Small Screens</h1>
            <h5>Paste link from Brown Paper Tickets site</h5>
            <h6>For more than one event paste and submit links separately</h6>
            <br/>
            <h6>Date Format: Monday, April 4, 2018 </h6>
            <input onChange={this.handleDate} type="text" ref="date"/>
            <br/>
            <textarea ref="link" onChange={this.handleChangeLink} />
            <br />
            <button>submit</button>
          </form>
          <Uploader />
          <AddMedia />
          <AddSocialMedia/>
        </div>
      </section>
    );
  }
}
