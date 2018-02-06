"use strict";
import React, { Component } from "react";
import Slider from "react-slick";



export default class Carousel1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
        <img src={require("../../public1/img/zoltan-tasi-437454.jpg")} />
        <img src={require("../../public1/img/zoltan-tasi-437454.jpg")} />
        <img src={require("../../public1/img/zoltan-tasi-437454.jpg")} />
        <img src={require("../../public1/img/zoltan-tasi-437454.jpg")} />
        <img src={require("../../public1/img/zoltan-tasi-437454.jpg")} />
      </Slider>
    );
  }
}
