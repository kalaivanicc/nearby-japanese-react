import React, { useState } from 'react';
import Inputs from '../Inputs/Inputs'
import Sorting from '../Sorting/Sorting'
import Results from '../Results/Results'
import './Main.css'


const Main = () => {
  const [coords, setCoords] = useState([null,null])

  return (
    <main>
      <Inputs />
      <Sorting />
      <Results />
    </main>
  );
}

export default Main;
