'use strict'
import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import Nav from './Nav'
import Events from './Events';
import Carousel1 from './Carousel1'
import About from './About';
import Carousel2 from './Carousel2'
import Contact from './Contact';


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 0,
            height: 0
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
      }

      componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
      }

      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    render() {
        return (
            <div>
            <Nav/>
            <Events width={this.state.width} height={this.state.height}/>
            <Carousel1 width={this.state.width}/>
            <About width={this.state.width} height={this.state.height}/>
            <Carousel2 width={this.state.width}/>
            <Contact  width={this.state.width} height={this.state.height}/>
            </div>
        )

    }
}
