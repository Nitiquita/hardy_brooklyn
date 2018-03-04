"use strict";
import React, { Component } from "react";
import { database } from "../../firebase"

export default class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      media: [],
      socialMedia: []
    }
  }

  componentDidMount() {
    let promise1 = new Promise((resolve, reject) => {
      let value;
      database
        .ref("media/")
        .once("value")
        .then(function(snapshot) {
          value = snapshot.val();
          resolve(value);
        });
    });
    promise1.then(value => {
      let media = value;
      let mediaArray = [];
      for (var key in media) {
        mediaArray.push(media[key])
      }
      this.setState({
        media: mediaArray
      });
    });

    let promise2 = new Promise((resolve, reject) => {
      let value;
      database
        .ref("socialMedia/")
        .once("value")
        .then(function(snapshot) {
          value = snapshot.val()
          resolve(value);
        });
    });
    promise2.then(value => {
      let socialMedia = value;
      let socialMediaArray = [];
      for (var key in socialMedia) {
        socialMediaArray.push(socialMedia[key])
      }
      this.setState({
        socialMedia: socialMediaArray
      });
    });

  }

  render() {
    const styles = {
      height: this.props.height
    };
    return (
      <section style={styles} id="media">
        <h1>What's to know about Hardy Brooklyn?</h1>
        <div className="row">
          <div className="col span-1-of-2">
            <h3>In the Media</h3>
            <div className="media-box">
            {this.state.media && this.state.media.map((media, idx)=>{
              return <h4 key={idx}><a href={media.link} target="_blank">{media.source} {media.date}</a></h4>
            })}
            </div>
          </div>
          <div className="col span-1-of-2">
            <h3>On Social Media</h3>
            <div className="media-box">
            <a href="https://www.facebook.com/hardy.brooklyn" target="_blank"><h4>Facebook</h4></a>
            <a href="https://www.modelmayhem.com/hardybrooklyn" target="_blank"><h4>Model Mayhem</h4></a>
            {this.state.socialMedia && this.state.socialMedia.map((media, idx)=>{
              return <h4 key={idx}><a href={media.link} target="_blank">{media.name}</a></h4>
            })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
