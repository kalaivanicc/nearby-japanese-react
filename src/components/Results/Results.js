import React from 'react';
import './Results.css'
import Result from '../Result/Result'

const Results = () => {

  let numReviews = [1,2,3,4,5,6]
  let results = numReviews.map((d,i) => {
    return <Result key={i} data={d}/>
  })

  return (
    <div className='results'>
      <h1>Results</h1>
      <div className='results-output'>
      {results}
      </div>
    </div>
  );
}

export default Results;
