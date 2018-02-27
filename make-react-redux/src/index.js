import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Header from './Header';
import Content from './Content';

ReactDOM.render(
  <div>
    <Header />
    <Content />
  </div>,
  document.getElementById('root'),
);

registerServiceWorker();
