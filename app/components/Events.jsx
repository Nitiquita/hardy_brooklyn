"use strict";
import React, { Component } from "react";
import { database } from "../../firebase";

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HTML: ``,
    };
    this.renderHTML = this.renderHTML.bind(this);
  }

  componentDidMount() {
    let promise = new Promise((resolve, reject) => {
      let value;
      database
        .ref("events/")
        .once("value")
        .then(function(snapshot) {
          value = snapshot.val();
          resolve(value);
        });
    });
    promise.then(value => {
      let stringHTML = `` + value.HTML;
      this.setState({
        HTML: stringHTML
      });
    });
  }

  renderHTML(html) {
    return html;
  }

  render() {
    const styles = {
      height: this.props.height,
      width: this.props.width
    };
    return (
      <section id="events" style={styles}>
        <div id="event-headline">
          <h1>Where can I see Hardy Brooklyn?</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: this.state.HTML }} />
      </section>
    );
  }
}
