import React, { Component } from 'react';

/* eslint-disable no-alert */
class RefNameForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert(`A name was submitted : ${this.input.value}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="RefNameForm" >
          Name:
                    <input type="text" ref={(input) => { this.input = input; return this.input; }} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default RefNameForm;
