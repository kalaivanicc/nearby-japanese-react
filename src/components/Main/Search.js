import React from 'react';
import Inputs from '../Inputs/Inputs'
import Sorting from '../Sorting/Sorting'
import Results from '../Results/Results'
import './Main.css'


const Search = (props) => {

  return (
    <main>
      <Inputs
      getCoords={props.getCoords}
      setDistance={props.setDistance}/>
      <Sorting
      setSort={props.setSort}/>
      <Results
      data={props.data}
      api={props.api}/>
    </main>
  );
}

export default Search;
