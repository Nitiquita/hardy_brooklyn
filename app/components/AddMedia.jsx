import React, { Component } from 'react';
import { database } from '../../firebase'

export default class AddMedia extends Component {
  constructor(props) {
    super(props)
    this.state = {
      source: "",
      date: "",
      link: ""
    }
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeLink = this.handleChangeLink.bind(this);
    this.handleChangeSource = this.handleChangeSource.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeSource(event) {
    this.setState({
      source: event.target.value
    })
  }

  handleChangeDate(event) {
    this.setState({
      date: event.target.value
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
    database.ref("media/" + submitDate).set({
      source: this.state.source,
      date: this.state.date,
      link: this.state.link
    });
    this.refs.source.value = "";
    this.refs.date.value = "";
    this.refs.link.value = "";
  }


  render() {
    return (
      <div id="add-media">
        <form onSubmit={this.handleSubmit}>
        <h1>Add Media Links</h1>
        <label>Media Source:</label>
        <input type="text" ref="source" onChange={this.handleChangeSource}/><br/>
        <label>Date:</label>
        <input type="text" ref="date" onChange={this.handleChangeDate}/><br/>
        <label>Link:</label>
        <input type="text" ref="link" onChange={this.handleChangeLink}/><br/>
        <button>submit</button>
        </form>
        </div>
    );
  }
}
