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
        <div className="circle">
          <div id="circle-1">
            Born and raised in
          <br />
          Brooklyn and Nassau County (Long Island),
          <br />
          Hardy was the black-sheep of his community. He was stifled by this
          conservative environment and society’s expectations for many years. He
          was able to rise above it and became successful in many different
          industries. For example, he built a successful tech company, worked in
          kosher foods, worked in event planning and large scale festivals and
          started a business development consultant company.
          <br />
          Yet throughout his successes, he still felt like there was something
          still missing,
          <br />
          something larger…
          </div>
        </div>
        <div className="circle">
              <div  id="circle-2">
                One day, Hardy and a friend walked into a New Year’s Day party
                and was chosen to become a body painting model. With his
                timeless good looks and industry standard physique, Hardy
                Brooklyn was a perfect specimen for both body painters and
                photographers alike.
              </div>
        </div>
        <div className="circle">
              <div id="circle-3">
                Within two years,
                <br/>
                he made a name for himself in the underground
                arts, music and fashion scene. He is an instant hit at parties
                and his energy is synonymous with being the life of the party.
              </div>
        </div>
        <div className="circle">
              <div id="circle-4">
                Hardy is inherently and fundamentally a performance artist. He
                hopes to propel the interactive themed costume art scene and is
                open to new connections, interactive events and photo ops.
          </div>
        </div>
      </section>
    );
  }
}
