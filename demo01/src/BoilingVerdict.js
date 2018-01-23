import React from 'react';

/* eslint-disable react/prop-types */
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>水会烧开</p>;
  }
  return <p>水不会烧开</p>;
}

export default BoilingVerdict;
