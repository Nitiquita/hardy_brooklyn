'use strict'
import React, { Component } from 'react';

export default class Nav extends Component {
    constructor(props) {
        super(props)
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    handleMouseOver() {
        
    }

    render() {
        return (
            <div>
            <img id="nav" src={require("../../public1/icons/icons8-menu.svg")} onMouseOver={this.handleMouseOver}/>
            <ul id="nav-items">
            <li>Events</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
            </div>
        )
    }

}