"use strict";
import React, { Component } from "react";
import { auth } from "../../firebase"

let navStyles = {
  showNav: {
    visibility: "visible"
  },
  hideNav: {
    visibility: "hidden"
  }
}

let loginStyles = {
  showLogin: {
    visibility: "visible"
  },
  hideLogin: {
    visibility: "hidden"
  }
};

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: "hideNav",
      login: "hideLogin",
      email: "",
      password: ""
    };
    this.showNav = this.showNav.bind(this);
    this.hideNav = this.hideNav.bind(this);
    this.showLogin = this.showLogin.bind(this);
    this.hideLogin = this.hideLogin.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  showNav() {
    this.setState({
      nav: "showNav"
    });
  }

  hideNav() {
    this.setState({
      nav: "hideNav"
    });
  }

  showLogin() {
    this.setState({
      login: "showLogin"
    })
  }

  hideLogin() {
    this.setState({
      login: "hideLogin"
    })
  }

  handleChange1(event) {
    this.setState({email: event.target.value});
  }

  handleChange2(event) {
    this.setState({password: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
    auth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        console.log(email)
      } else {
        console.log('no user')
      }
    });


  }

  render() {
    return (
      <div>
        <img
          id="nav"
          src={require("../../public1/icons/icons8-menu.svg")}
          onMouseEnter={this.showNav}
        />
        <ul id="nav-items" style={navStyles[this.state.nav]}
        onMouseLeave={this.hideNav}>
          <li><a href="#events">Events</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li onClick={this.showLogin}>Login</li>
        </ul>
        <form id="login" style={loginStyles[this.state.login]} onSubmit={this.handleSubmit}>
          ADMIN USE ONLY
          <br/>
          Email:
          <input type="email" name="email" onChange={this.handleChange1}/>
          <br/>
          Password:
          <input type="password" name="password" onChange={this.handleChange2}/>
          <br/>
          <button >submit</button>
          <button onClick={this.hideLogin}>hide</button>
        </form>
      </div>
    );
  }
}
