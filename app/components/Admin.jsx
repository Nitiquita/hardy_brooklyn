"use strict";
import React, { Component } from "react";
import Uploader from "./Uploader";
import AddMedia from "./AddMedia";
import AddSocialMedia from "./AddSocialMedia"
import { Link, Redirect } from "react-router-dom";
import { database } from "../../firebase";

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
      HTML: ""
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      HTML: event.target.value
    });
  }

  handleSubmit(event) {
    let HTML = this.refs.HTML;
    event.preventDefault();
    database.ref("events/").set({
      HTML: this.state.HTML
    });
    HTML.value = "";
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
            <h1>Add Event Information</h1>
            <h5>Paste HTML code from Brown Paper Tickets Widget</h5>
            <h6>For more than one event paste all HTML together</h6>
            <textarea ref="HTML" onChange={this.handleChange} />
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
