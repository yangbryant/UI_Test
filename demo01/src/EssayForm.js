import React, { Component } from 'react';

/* eslint-disable no-alert */
class EssayForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Please write an essay about your favorite DOM element.',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    alert(`A name was submitted: ${this.state.value}`);
    this.setState({ value: '' });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="Name">
          Name:
                    <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EssayForm;
