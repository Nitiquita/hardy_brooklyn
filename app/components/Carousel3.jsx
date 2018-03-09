"use strict";
import React, { Component } from "react";
import Slider from "react-slick";
import store from "../store";
import { database } from "../../firebase";

export default class Carousel2 extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
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

  componentWillUnmount() {
    this.unsubscribe();
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
      <Slider {...settings}>
    {this.state.selectedImages && this.state.selectedImages.map((image, idx) => {
        return <img className="carousel-image" src={image["imageURL"]} key={idx}/>
      })}
      </Slider>
    );
  }
}
