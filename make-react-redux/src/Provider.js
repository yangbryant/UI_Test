import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/forbid-prop-types */
class Provider extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    children: PropTypes.any.isRequired,
  };
  static childContextTypes = {
    store: PropTypes.object,
  };
  getChildContext() {
    return {
      store: this.props.store,
    };
  }
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default Provider;
