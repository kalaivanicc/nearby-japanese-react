import React from 'react';
import './Result.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

const Result = (props) => {

  const getRating = (rating) => {
    let stars = []
    if (Number.isInteger(rating)) {
      for (let i = 0; i < rating; i+=1) {
        stars.push(i) }
    } else {
      for (let i = 0; i < Math.floor(rating); i+=1) {
        stars.push(i) }
      stars.push('half')
    }
    return renderRating(stars)
  }

  const renderRating = (stars) => {
    if(stars.indexOf('half') === -1) {
      const starsArr = stars.map((d,i) => {
        return <FontAwesomeIcon key={i} icon={faStar} color={'orange'}/>})
    return starsArr
    } else {
      stars.pop()
      const starsArr = stars.map((d,i) => {
        return <FontAwesomeIcon key={i} icon={faStar} color={'orange'}/> })
      starsArr.push(<FontAwesomeIcon key={5} icon={faStarHalf} color={'orange'} />)
      return starsArr
      }
  }

  const metersAway = (distance) => {
    return Math.floor(distance)
  }

  const directionsUrl = () => {
    let source = `https://www.google.com/maps/dir/?api=1`
    let currentCoords = `&origin=${props.api.lat},${props.api.lon}`
    let destLat = props.data.coordinates.latitude
    let destLon = props.data.coordinates.longitude
    let url = `${source}${currentCoords}&destination=${destLat},${destLon}`
    return url
  }

  return (
    <div className='result'
      style={{backgroundImage: `url(${props.data.image_url})`}}>
      <div className='result-info'>
        <span className='name'>{props.data.name}</span>
        <div className='rating'>
          {getRating(props.data.rating)}
        </div>
        <span className='reviews'>
        {props.data.review_count} Reviews</span>
        <span className='distance'>
        {metersAway(props.data.distance)} Meters Away</span>
        <div className='links-box'>
          <a className='result-link' target="_blank" href={props.data.url}>
            <span className='yelp-link'
            >View Yelp Profile</span>
          </a>
          <a className='result-link' target="_blank" href={directionsUrl()}>
            <button className='directions'
            >Directions</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Result
