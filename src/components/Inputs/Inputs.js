import React from 'react';
import './Inputs.css'
import { Link } from 'react-router-dom';

const Inputs = (props) => {

  const radii = ['500','1000','3000','5000'];

  const handleSelect = (e) => {
    props.setDistance(e.target.value)
  }

  return (
    <div className='inputs'>

    <div className='view-buttons'>
      <Link to='/search/map'>
        <button className='buttons map-button'>View Map</button>
      </Link>
      <Link to='/search'>
        <button className='buttons list-button'>View List</button>
      </Link>
    </div>

      <div className='select-container'>
      <span className='set-distance'>Set Distance:</span>
        <select
        defaultValue={radii[1]}
        onChange={handleSelect}>
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
