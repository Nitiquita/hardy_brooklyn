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
        .ref("event-links/")
        .once("value")
        .then(function(snapshot) {
          value = snapshot.val();
          resolve(value);
        });
    });
    promise1.then(value => {
      let stringHTML = `` + value.HTML;
      // let extractscript = /<script[\s\S]*<\/script>/gi.exec(stringHTML);
      // stringHTML = stringHTML.replace(extractscript[0], "");
      this.setState({
        HTML: stringHTML
      });
      // window.eval(extractscript[1])
    });
    promise2.then(value => {
      let link = [];
      for (var key in value) {
        link.push({ [key]: value[key]["link"] });
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
        <div id="bpt-large">
          <div dangerouslySetInnerHTML={{ __html: this.state.HTML }} />
          <br/>
          _______________________________________________
          <br/>
          <br/>
          <a href="https://www.verlocal.com/pages/calendar_frame?cal_id=360814&mode=customer&type=grid&listing_id=26309\\\">
            Paint My Body and Go Out for a Night of Fun
          </a>
        </div>
        {/* {this.state.link &&
          this.state.link.map((link, idx) => {
            for (var key in link) {
              return (
                <div key={idx} id="bpt-small">
                  <h2>{key}</h2>
                  <div dangerouslySetInnerHTML={{ __html: link[key] }} />
                </div>
              );
            }
          })} */}
      </section>
    );
  }
}
