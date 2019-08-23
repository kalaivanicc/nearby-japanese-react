import React, { useState } from 'react';
import './Inputs.css'
import Checkbox from './Checkbox'

const Inputs = (props) => {

  const cbValues = [250,500,1000,3000];
  const [checkbox, setCheckbox] = useState(cbValues[1])

  const handleGeoClick = () => {
    navigator.geolocation.getCurrentPosition((res)=> {props.setCoords(res.coords.latitude,res.coords.longitude)})
  }

  const handleCbClick = (value) => {
    props.setDist(value)
  }

  const checkboxes = cbValues.map((d,i) => {
    return <Checkbox
        key={i}
        value={d}
        handleCbClick={handleCbClick} />
  })

  return (
    <div className='inputs'>
      <h2>Inputs:</h2>
      <button
      onClick={handleGeoClick}>
      Set Coordinates</button>
      {checkboxes}
    </div>
  );
}

export default Inputs;
