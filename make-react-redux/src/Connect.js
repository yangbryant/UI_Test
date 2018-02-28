import React, { Component } from 'react';
import PropTypes from 'prop-types';

const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
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
      const stateProps = mapStateToProps
        ? mapStateToProps(store.getState(), this.props) : {};
      const dispatchProps = mapDispatchToProps
        ? mapDispatchToProps(store.dispatch, this.props) : {};
      this.setState({
        allProps: {
          ...stateProps,
          ...dispatchProps,
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

