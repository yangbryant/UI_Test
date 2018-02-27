import React, { Component } from 'react';
import PropTypes from 'prop-types';

const connect = mapStateToProps => (WrappedComponent) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object,
    };

    constructor() {
      super();
      this.state = { allProps: {} };
    }

    componentWillMount() {
      const { store } = this.context;
      this.updateProps();
      store.subscribe(() => this.updateProps());
    }

    updateProps() {
      const { store } = this.context;
      const stateProps = mapStateToProps(store.getState(), this.props);
      this.setState({
        allProps: {
          ...stateProps,
          ...this.props,
        },
      });
    }

    render() {
      return (
        <WrappedComponent {...this.state.allProps} />
      );
    }
  }

  return Connect;
};

export default connect;
