import React, { Component } from 'react';

class Reservation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const curTarget = event.target;
    const value = curTarget.type === 'checkbox' ? curTarget.checked : curTarget.value;

    this.setState({
      [curTarget.name]: value,
    });
  }

  render() {
    return (
      <form>
        <label htmlFor="isGoing">
          Is going:
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
        </label>
        <br />
        <label htmlFor="numberOfGuests">
          Number of Guests:
                    <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

export default Reservation;
