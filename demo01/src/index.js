import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NameForm from './Form';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import RefNameForm from './RefNameForm';
import Calculator from './Calculator';
import WelcomeDialog from './WelcomeDialog2';
import SignUpDialog from './SignUpDialog';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <App />
    <br />
    <NameForm />
    <br />
    <EssayForm />
    <br />
    <FlavorForm />
    <br />
    <Reservation />
    <br />
    <RefNameForm />
    <br />
    <Calculator />
    <br />
    <WelcomeDialog />
    <br />
    <SignUpDialog />
  </div>,
  document.getElementById('root'),
);
registerServiceWorker();
