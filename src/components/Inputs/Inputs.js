import React from 'react';
import './Inputs.css'

const Inputs = (props) => {

  const radii = ['500','1000','3000','5000'];

  const handleSelect = (e) => {
    props.setDistance(e.target.value)
  }

  return (
    <div className='inputs'>
      <button className='coords'
        onClick={() => props.getCoords}>
        Reset Coordinates</button>
      <div className='select-container'>
      <span className='set-distance'>Set Distance:</span>
        <select
        defaultValue={radii[1]} onChange={() => handleSelect}>
          {radii.map((radius, i) => (
            <option key={i} value={radius}>
            {radius}m</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Inputs;
