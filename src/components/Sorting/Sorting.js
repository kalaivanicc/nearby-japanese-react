import React from 'react';
import './Sorting.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const Sorting = (props) => {

  return (
    <div className='sorting'>
    <span className='sort'>Sort by <FontAwesomeIcon className='arrow' icon={faLongArrowAltRight}/></span>   
      <button className='param'
      onClick={() => props.setSort('distance')}
      >Distance</button>
      <button className='param'
      onClick={() => props.setSort('rating')}
      >Rating</button>
      <button className='param'
      onClick={() => props.setSort('review_count')}
      >Reviews</button>
    </div>
  );
}

export default Sorting;
