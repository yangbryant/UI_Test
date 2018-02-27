import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThemeSwitch from './ThemeSwitch';
import Connect from './Connect';

class Content extends Component {
  static propTypes = {
    themeColor: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>React.js小书</p>
        <ThemeSwitch />
      </div>
    );
  }
}

/* eslint-disable no-class-assign */
const mapStateToProps = state => ({
  themeColor: state.themeColor,
});

Content = Connect(mapStateToProps)(Content);

export default Content;
