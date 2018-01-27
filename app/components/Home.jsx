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
    }

    render() {
        return (
            <div>
            <Nav/>
            <Events/>
            <Carousel1/>
            <About/>
            <Carousel2/>
            <Contact/>
            </div>
        )

    }
}
