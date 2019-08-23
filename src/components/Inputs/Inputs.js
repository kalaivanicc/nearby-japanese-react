import React from 'react';
import './Inputs.css'

const Inputs = (props) => {

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition((res)=> {props.setCoords(res.coords.latitude,res.coords.longitude)})
  }

  return (
    <div className='inputs'>
      <h2>Inputs:</h2>
      <button
      onClick={handleClick}>
      Set Coordinates</button>
    </div>
  );
}

export default Inputs;
