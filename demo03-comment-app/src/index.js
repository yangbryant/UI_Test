import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import CommentApp from './CommentApp';

ReactDOM.render(
  <div>
    <App />
    <CommentApp />
  </div>,
  document.getElementById('root'),
);
registerServiceWorker();
