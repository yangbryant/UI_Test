import { connect } from 'react-redux';
import ThemeSwitch from '../components/ThemeSwitch';

/* eslint-disable no-class-assign */
const mapStateToProps = state => ({
  themeColor: state.themeColor,
});

const mapDispatchToProps = dispatch => ({
  onSwitchColor: (color) => {
    dispatch({ type: 'CHANGE_COLOR', themeColor: color });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);
