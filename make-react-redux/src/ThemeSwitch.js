import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ThemeSwitch extends Component {
  static contextTypes = {
    store: PropTypes.object,
  }

  constructor() {
    super();
    this.state = { themeColor: '' };
  }

  componentWillMount() {
    const { store } = this.context;
    this.updateThemeColor();
    store.subscribe(() => this.updateThemeColor());
  }

  updateThemeColor() {
    const { store } = this.context;
    const state = store.getState();
    this.setState({ themeColor: state.themeColor });
  }

  handleSwitchColor = (color) => {
    const { store } = this.context;
    store.dispatch({
      type: 'CHANGE_COLOR',
      themeColor: color,
    });
  }

  render() {
    return (
      <div>
        <button
          style={{ color: this.state.themeColor }}
          onClick={() => this.handleSwitchColor('red')}
        >
          Red
        </button>
        <button
          style={{ color: this.state.themeColor }}
          onClick={() => this.handleSwitchColor('blue')}
        >
          Blue
        </button>
      </div>
    );
  }
}

export default ThemeSwitch;