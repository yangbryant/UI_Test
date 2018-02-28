import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ThemeSwitch extends Component {
  static propTypes = {
    themeColor: PropTypes.string.isRequired,
    onSwitchColor: PropTypes.func.isRequired,
  }

  handleSwitchColor = (color) => {
    if (this.props.onSwitchColor) {
      this.props.onSwitchColor(color);
    }
  }

  render() {
    return (
      <div>
        <button
          style={{ color: this.props.themeColor }}
          onClick={() => this.handleSwitchColor('red')}
        >
          Red
        </button>
        <button
          style={{ color: this.props.themeColor }}
          onClick={() => this.handleSwitchColor('blue')}
        >
          Blue
        </button>
      </div>
    );
  }
}

export default ThemeSwitch;
