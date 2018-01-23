import React, { Component } from 'react';

/* eslint-disable react/prop-types */
/* eslint-disable react/no-multi-comp */
function FancyBorder(props) {
  return (
    <div>
      <div className={`FancyBorder FancyBorder-${props.color}`} >
        {props.children}
      </div>
      <div className="FancyBorder-left FancyBorder-left" >
        {props.left}
      </div>
      <div className="FancyBorder-right FancyBorder-right" >
        {props.right}
      </div>
    </div>
  );
}

class Contacts extends Component {
  render() {
    return (
      <div>
        <p>Contacts</p>
      </div>
    );
  }
}

class Chat extends Component {
  render() {
    return (
      <div>
        <p>Chat</p>
      </div>
    );
  }
}

export default FancyBorder;
export { Contacts, Chat };
