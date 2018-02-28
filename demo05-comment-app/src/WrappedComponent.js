import React, { Component } from 'react';

export default (WrappedComponent, name) => {
  class LocalStorageActions extends Component {
    constructor(props) {
      super(props);
      this.state = { data: null };
    }

    componentWillMount() {
      const data = localStorage.getItem(name);
      try {
        this.setState({ data: JSON.parse(data) });
      } catch (e) {
        this.setState({ data });
      }
    }

    saveData = (data) => {
      try {
        localStorage.setItem(name, JSON.stringify(data));
      } catch (e) {
        localStorage.setItem(name, `${data}`);
      }
    }

    render() {
      return (
        <WrappedComponent
          data={this.state.data}
          saveData={this.saveData}
          {...this.props}
        />
      );
    }
  }
  return LocalStorageActions;
};
