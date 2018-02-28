import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Content from './Content';

import Provider from './Provider';

function createStore(reducer) {
  let state = null;
  const listeners = [];
  const subscribe = listener => listeners.push(listener);
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };
  dispatch({});
  return { getState, dispatch, subscribe };
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

export default App;
