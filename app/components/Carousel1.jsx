"use strict";
import React, { Component } from "react";
import Slider from "react-slick";
import store from "../store";
import { database } from "../../firebase";



export default class Carousel1 extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
    database
    .ref("c1image")
    .once("value")
    .then(snapshot => {
      console.log(snapshot.val())
      let images = snapshot.val();
      this.setState({ selectedImages: images})
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }


  render() {
    console.log(this.state)
    const settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <Slider {...settings}>
      {this.state.selectedImages.map((image, idx) => {
        return <img className="carousel-image" src={image["imageURL"]} key={idx}/>
      })}
      </Slider>
    );
  }
}
