import React, { useState } from 'react';
import Inputs from '../Inputs/Inputs'
import Sorting from '../Sorting/Sorting'
import Results from '../Results/Results'
import './Main.css'


const Main = (props) => {
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)
  const [dist, setDist] = useState(500)

  const setCoords = async(lat, lon) => {
    await setLat(lat)
    await setLon(lon)
    console.log(lat,lon);
  }

  const setDistance = async(value) => {
    await setDist(value)
    console.log(value);
  }

  return (
    <main>
      <Inputs
      setCoords={setCoords}
      setDist={setDistance}/>
      <Sorting />
      <Results />
    </main>
  );
}

export default Main;
