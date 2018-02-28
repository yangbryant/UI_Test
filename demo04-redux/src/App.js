import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import Header from './containers/Header';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Header />
          </header>
          <div>
            <Content />
          </div>
        </div>
      </Provider>
    );
  }
}

const themeReducer = (state, action) => {
  if (!state) {
    return {
      themeColor: 'red',
    };
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor };
    default:
      return state;
  }
};

const store = createStore(themeReducer);

export default App;
