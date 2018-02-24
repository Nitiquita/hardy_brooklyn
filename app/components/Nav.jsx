"use strict";
import React, { Component } from "react";
import { Link, Redirect} from "react-router-dom";
import { auth } from "../../firebase";
import { ScrollableAnchor } from "react-scrollable-anchor";
import Scrollchor from 'react-scrollchor';

let navStyles = {
  showNav: {
    display: "block"
  },
  hideNav: {
    display: "none"
  }
}

let loginStyles = {
  showLogin: {
    display: "block"
  },
  hideLogin: {
    display: "none"
  },
  showLoggedIn: {
    display: "block"
  },
  hideLoggedIn: {
    display: "none"
  }
};

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: "hideNav",
      login: "hideLogin",
      email: "",
      password: "",
      loggedIn: "hideLoggedIn"
    };
    this.showNav = this.showNav.bind(this);
    this.hideNav = this.hideNav.bind(this);
    this.showLogin = this.showLogin.bind(this);
    this.hideLogin = this.hideLogin.bind(this);
    this.hideLoggedIn = this.hideLoggedIn.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    auth.signOut().then(function() {
      console.log("signed out")
    }).catch(function(error) {
      console.log(error)
    });
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
    let isUser = false;
    const userPromise = new Promise(function(resolve, reject) {
      auth.onAuthStateChanged(function(user) {
        if (user) {
          isUser = true;
        } else {
          isUser = false;
        }
        resolve(isUser)
      })
    }).then(user => {
      if (user) {
        this.setState({
          loggedIn: true
        })
    } else {
      console.log(user)
        this.setState({
          login: "showLogin"
        })
    }
    })
  }

  hideLogin() {
    this.setState({
      login: "hideLogin"
    })
  }

  hideLoggedIn() {
    this.setState({
      loggedIn: "hideLoggedIn"
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

    let userPromise = new Promise (function(resolve, reject) {
      let isUser = false;
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
          isUser = true;
          resolve(isUser)
        } else {
          console.log('no user')
        }
      });
    }).then(user => {
      if(user) {
        this.setState({
          login: "hideLogin",
          loggedIn: "showLoggedIn"
        })
      }
    })
  }

  render() {
    return (
      <div>
        <img
          id="nav"
          src={require("../../public/icons/icons8-menu.svg")}
          onMouseEnter={this.showNav}
        />
        <ul id="nav-items" style={navStyles[this.state.nav]}
        onMouseLeave={this.hideNav}>
          <li>Events</li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
          <li onClick={this.showLogin}>Login</li>
        </ul>
        <div id="logged-in" style={loginStyles[this.state.loggedIn]}>
        <h1>You are logged in!</h1>
        <button onClick={this.logOut}>logout</button>
        <button onClick={this.hideLoggedIn}>hide</button>
        <br/>
        <Link to="/admin">Go to admin page</Link>
        </div>
        <form id="login" style={loginStyles[this.state.login]} onSubmit={this.handleSubmit}>
          ADMIN USE ONLY
          <br/>
          Email:
          <input type="email" name="email" onChange={this.handleChange1}/>
          <br/>
          Password:
          <input type="password" name="password" onChange={this.handleChange2}/>
          <br/>
          <button>submit</button>
          <button onClick={this.hideLogin}>hide</button>
        </form>
      </div>
    );
  }
}
