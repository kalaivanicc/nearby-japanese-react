import React, { useState } from 'react';
import './Inputs.css'
import Checkbox from './Checkbox'

const Inputs = (props) => {

  const cbValues = [250,500,1000,3000];

  const handleGeoClick = () => {
    navigator.geolocation.getCurrentPosition((res)=> {props.setCoords(res.coords.latitude,res.coords.longitude)})
  }

  const handleSelect = (value) => {
    props.setDist(value)
  }

  return (
    <div className='inputs'>
      <h2>Inputs:</h2>
      <button
      onClick={handleGeoClick}>
      Set Coordinates</button>
      <div className='select-container'>
        <select>
          <option>Radius</option>
          <option
          onClick={handleSelect(cbValues[0])}>
          {cbValues[0]}m</option>
          <option
          onClick={handleSelect(cbValues[1])}>
          {cbValues[1]}m</option>
          <option
          onClick={handleSelect(cbValues[2])}>
          {cbValues[2]}m</option>
          <option
          onClick={handleSelect(cbValues[3])}>
          {cbValues[3]}m</option>
        </select>
      </div>
    </div>
  );
}

export default Inputs;
