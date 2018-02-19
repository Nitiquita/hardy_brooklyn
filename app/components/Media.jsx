"use strict"
import React, { Component } from "react";

export default class Media extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    const styles = {
      height: this.props.height
  }
    return (
      <section style={styles} id="media">

      </section>
    )
  }
}
