import React from 'react';
import FancyBorder, { Contacts, Chat } from './FancyBorder';

function WelcomeDialog() {
  return (
    <FancyBorder color="blue" left={<Contacts />} right={<Chat />} >
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

export default WelcomeDialog;
