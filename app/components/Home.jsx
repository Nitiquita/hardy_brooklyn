'use strict'
import React, { Component } from 'react';
import Nav from './Nav'
import Events from './Events';
import About from './About';
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
            <About/>
            <Contact/>
            </div>
        )
        
    }
}