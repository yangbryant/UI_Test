import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Connect from './Connect';

class Header extends Component {
  static propTypes = {
    themeColor: PropTypes.string.isRequired,
  };

  render() {
    return (
      <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
    );
  }
}

/* eslint-disable no-class-assign */
const mapStateToProps = state => ({
  themeColor: state.themeColor,
});

Header = Connect(mapStateToProps)(Header);

export default Header;
