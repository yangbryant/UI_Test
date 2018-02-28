import { connect } from 'react-redux';
import Header from '../components/Header';

/* eslint-disable no-class-assign */
const mapStateToProps = state => ({
  themeColor: state.themeColor,
});

export default connect(mapStateToProps)(Header);
