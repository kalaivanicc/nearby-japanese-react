import React from 'react';
import Inputs from '../Inputs/Inputs'
import Sorting from '../Sorting/Sorting'
import Results from '../Search/Results'
import Map from '../Search/Map'
import './Main.css'
import { Route } from 'react-router-dom';


const Search = (props) => {

  return (
    <main>
      <Inputs
      getCoords={props.getCoords}
      setDistance={props.setDistance}/>
      <Sorting
      setSort={props.setSort}/>
    <Route exact path='/search'
      render={() =>
      <Results
        data={props.data}
        api={props.api}/>}
    />
    <Route path='/search/map'
      render={() =>
      <Map
        data={props.data}
        api={props.api}/>}
    />
    </main>
  );
}

export default Search;
