"use strict";
import React, { Component } from "react";
import Slider from "react-slick";
import { database } from "../../firebase";

export default class Carousel3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImages: []
    }
  }

  componentDidMount() {
    database
    .ref("c3images")
    .once("value")
    .then(snapshot => {
      let images = snapshot.val();
      let imagesArray = [];
      for (var key in images) {
        imagesArray.push(images[key])
      }
      this.setState({ selectedImages: imagesArray})
    });
  }

  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <div className="slider-box">
      <h6 className="carousel-title"><a href="http://solas.studio">Live Art Soiree Events with Solas Studio</a></h6>
      <Slider {...settings}>
    {this.state.selectedImages && this.state.selectedImages.map((image, idx) => {
        return <img className="carousel-image" src={image["imageURL"]} key={idx}/>
      })}
      </Slider>
      </div>
    );
  }
}
