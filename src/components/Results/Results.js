import React from 'react';
import './Results.css'
import Result from '../Result/Result'

const Results = (props) => {

  let results = props.data.map((d,i) => {
    return <Result key={i} data={d} api={props.api}/>
  })

  return (
    <div className='results'>
      <div className='results-output'>
      {results}
      </div>
    </div>
  );
}

export default Results;
