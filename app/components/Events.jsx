"use strict";
import React, { Component } from "react";
import { database } from "../../firebase"

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      HTML: "",
      HTMLSplit: "",
      JSX: ""
    }
  }

  componentDidMount() {
    let promise = new Promise((resolve, reject) => {
      let value
      database
      .ref("events/")
      .once("value")
      .then(function(snapshot) {
        value = snapshot.val();
        resolve(value)
      })

    })
    promise.then(value => {
      this.setState({
        HTML: value.HTML
      })
    })

    this.state.HTMLSplit = this.state.HTML.split(' ')
    // for (let i = 0; i < this.state.HTML.length; i++) {

    // }

  }

  render() {
    let HTML = this.state.HTML
    const styles = {
      height: this.props.height
    };
    console.log(this.state.HTML)
    return (
      <section id="events" style={styles}>
        <div id="event-headline">
          <h1 onMouseEnter={this.showEvent}>Where can I see Hardy Brooklyn?</h1>
        </div>
        <div>
        </div>
      </section>
    );
  }
}
