"use strict";
import React, { Component } from "react";
import { database } from "../../firebase";

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HTML: ``,
      link: ""
    };
  }

  componentDidMount() {
    let promise1 = new Promise((resolve, reject) => {
      let value;
      database
        .ref("events/")
        .once("value")
        .then(function(snapshot) {
          value = snapshot.val();
          resolve(value);
        });
    });
    let promise2 = new Promise((resolve, reject) => {
      let value;
      database
        .ref("events/links/")
        .once("value")
        .then(function(snapshot) {
          value = snapshot.val();
          resolve(value);
        });
    });
    promise1.then(value => {
      let stringHTML = `` + value.HTML;
      this.setState({
        HTML: stringHTML
      });
    });
    promise2.then(value => {
      let link = [];
      for (var key in value) {
        link.push({[key]: value[key]["link"]})
      }
      this.setState({
        link: link
      });
    });
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
        <div
          id="bpt-large"
          dangerouslySetInnerHTML={{ __html: this.state.HTML }}
        />
        {this.state.link && this.state.link.map((link, idx) => {
          for (var key in link) {
          return <div key={idx} id="bpt-small">
            <h2>{key}</h2>
            <a href={link[key]} target="_blank">
            <img src="http://www.brownpapertickets.com/g/6/BPT_buy_tickets_large.png" />
          </a>
            </div>
          }
        })}
      </section>
    );
  }
}
