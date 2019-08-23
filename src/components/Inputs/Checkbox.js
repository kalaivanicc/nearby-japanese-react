import React from 'react';
import './Inputs.css'

const Checkbox = (props) => {

  const handleClick = (value) => {
    props.handleCbClick(value)
  }

  return (
      <div>
        <input type='checkbox'
        id={props.value}
        onClick={() => handleClick(props.value)}
        ></input>
        <label for={props.value}>{props.value}m</label>
      </div>
  );
}

export default Checkbox;
