import React, { Component } from 'react';
import { database } from '../../firebase'

export default class AddSocialMedia extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      link: ""
    }
    this.handleChangeLink = this.handleChangeLink.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleChangeLink(event) {
    this.setState({
      link: event.target.value
    })
  }

  handleSubmit(event) {
    let submitDate = new Date()
    event.preventDefault();
    database.ref("socialMedia/" + submitDate).set({
      name: this.state.name,
      link: this.state.link
    });
    this.refs.name.value = "";
    this.refs.link.value = "";
  }


  render() {
    return (
      <div id="add-social-media">
      <form onSubmit={this.handleSubmit}>
      <h1>Add Social MediaLinks</h1>
      <label>Name:</label>
      <input type="text" ref="name" onChange={this.handleChangeName}/><br/>
      <label>Link:</label>
      <input type="text" ref="link" onChange={this.handleChangeLink}/><br/>
      <button>submit</button>
      </form>
      </div>
    )
  }
}
