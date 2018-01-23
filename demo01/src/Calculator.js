import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

// class Calculator extends Component {
//   constructor(props) {
//     super(props);

//     this.handleChange = this.handleChange.bind(this);
//     this.state = {
//       temperature: '',
//     };
//   }

//   handleChange(e) {
//     this.setState({
//       temperature: e.target.value,
//     });
//   }

//   render() {
//     const temp = this.state.temperature;
//     return (
//       <fieldset>
//         <legend>输入一个摄氏温度:</legend>
//         <input value={temp} onChange={this.handleChange} />
//         <BoilingVerdict celsius={parseFloat(temp)} />
//       </fieldset>
//     );
//   }
// }

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return ((celsius * 9) / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {
      temperature: '',
      scale: 'c',
    };
  }

  handleCelsiusChange(temperature) {
    this.setState({
      scale: 'c',
      temperature,
    });
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      scale: 'f',
      temperature,
    });
  }

  render() {
    const scales = this.state.scale;
    const temp = this.state.temperature;
    const celsius = scales === 'f' ? tryConvert(temp, toCelsius) : temp;
    const fahrenheit = scales === 'c' ? tryConvert(temp, toFahrenheit) : temp;
    return (
      <div>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;
