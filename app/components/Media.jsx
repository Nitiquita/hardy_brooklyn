"use strict";
import React, { Component } from "react";
import { database } from "../../firebase"

export default class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      media: []
    }
  }

  componentDidMount() {
    let promise = new Promise((resolve, reject) => {
      let value;
      database
        .ref("media/")
        .once("value")
        .then(function(snapshot) {
          value = snapshot.val();

          resolve(value);
        });
    });
    promise.then(value => {
      let media = value;
      let mediaArray = [];
      for (var key in media) {
        mediaArray.push(media[key])
      }
      this.setState({
        media: mediaArray
      });
    });

  }

  render() {
    const styles = {
      height: this.props.height
    };
    console.log(this.state.media)
    return (
      <section style={styles} id="media">
        <h1>What's to know about Hardy Brooklyn?</h1>
        <div className="row">
          <div className="col span-1-of-2">
            <h3>In the Media</h3>
            <div className="media-box">
            {this.state.media && this.state.media.map(media=>{
              return <h4><a href={media.link}>{media.source} {media.date}</a></h4>
            })}
            </div>
          </div>
          <div className="col span-1-of-2">
            <h3>On Social Media</h3>
            <div className="media-box">
            <a href="https://www.facebook.com/hardy.brooklyn"><h4>Facebook</h4></a>
            <a href="https://www.modelmayhem.com/hardybrooklyn"><h4>Model Mayhem</h4></a>

            </div>
          </div>
        </div>
      </section>
    );
  }
}
