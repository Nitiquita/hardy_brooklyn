"use strict";
import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      height: this.props.height
    };
    return (
      <section style={styles} id="about">
        <h1>Who is Hardy Brooklyn?</h1>
        <div id="about-box">
          <p>
            Born and raised in Brooklyn and Nassau County (Long Island), Hardy
            was the black-sheep of his community. He was stifled by this
            conservative environment and society’s expectations for many years.
            He was able to rise above it and became successful in many different
            industries. For example, he built a successful tech company, worked
            in kosher foods, worked in event planning and large scale festivals
            and started a business development consultant company. Yet
            throughout his successes, he still felt like there was something
            still missing, something larger…
          </p>
          <br/>
          <p>
            One day, Hardy and a friend walked into a New Year’s Day party and
            he was chosen to become a body painting model. With his timeless
            good looks and industry standard physique, Hardy Brooklyn was a
            perfect specimen for both body painters and photographers alike.
          </p>
          <br/>
          <p>
            Within two years, he made a name for himself in the underground
            arts, music and fashion scene. He is an instant hit at parties and
            his energy is synonymous with being the life of the party.
          </p>
          <br/>
          <p>
            Hardy is inherently and fundamentally a performance artist. He hopes
            to propel the interactive themed costume art scene and is open to
            new connections, interactive events and photo ops.
          </p>
        </div>
      </section>
    );
  }
}
