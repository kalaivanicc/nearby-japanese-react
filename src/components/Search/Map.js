import React, { useState } from 'react';
import './Results.css';
import ReactMapGL, { Marker, Popup, GeolocateControl, NavigationControl }  from 'react-map-gl';


const Map = (props) => {

  const [viewport, setViewport] = React.useState({
    width: 450,
    height: 400,
    latitude: 40.7401285,
    longitude: -73.9898506,
    zoom: 14.5
  })

  console.log(props.api.lat);

  let markers = props.data.map((marker,id) => {
    return <Marker
    key={id}
    latitude={marker.coordinates.latitude}
    longitude={marker.coordinates.longitude}><button></button>
    </Marker>
  })

  return (
    <div className='results'>
      <div className='map'>
        <ReactMapGL
          mapboxApiAccessToken={'pk.eyJ1IjoiamFkaXp6ZWRpbiIsImEiOiJjanp2ZWo4ZWEwcTlwM2xvZTV6bHpsbGd2In0.UK1Q11H28dTkvbtOcp38vA'}
          {...viewport}
          onViewportChange={(viewport) => {
            setViewport(viewport) }}
          >
          {markers}
        </ReactMapGL>
      </div>
    </div>
  );
}

export default Map;
