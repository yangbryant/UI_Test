import React, { Component } from 'react';
import PropTypes from 'prop-types';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

class TemperatureInput extends Component {
    static propTypes = {
      temperature: PropTypes.string.isRequired,
      onTemperatureChange: PropTypes.func.isRequired,
      scale: PropTypes.string,
    };

    static defaultProps = {
      scale: 'c',
    };

    constructor(props) {
      super(props);

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.props.onTemperatureChange(e.target.value);
    }

    render() {
      const temp = this.props.temperature;
      const scal = this.props.scale;
      return (
        <fieldset>
          <legend>输入温度{scaleNames[scal]}值:</legend>
          <input value={temp} onChange={this.handleChange} />
        </fieldset>
      );
    }
}

export default TemperatureInput;
