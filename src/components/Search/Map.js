import React, { useState } from 'react';
import './Results.css';
import ReactMapGL, { Marker, Popup, GeolocateControl, NavigationControl }  from 'react-map-gl';


const Map = (props) => {

  const [viewport, setViewport] = useState({
    width: 450,
    height: 400,
    latitude: 40.7401285,
    longitude: -73.9898506,
    zoom: 14
  })

  const [showPopup, setShowPopup] = useState({
    showPopup: true
  })

  const [selected, setSelected] = useState({
    latitude: null,
    longitude: null,
    showPopup: null
  })

  let markers = props.data.map((marker,id) => {
    return <Marker
    key={id}
    latitude={marker.coordinates.latitude}
    longitude={marker.coordinates.longitude}>
    <button className='marker'
    onClick={(e) => {
      e.preventDefault();
      setSelected({
        latitude: marker.coordinates.latitude,
        longitude: marker.coordinates.longitude,
        showPopup: true
      })
    }}></button>
    </Marker>
  })

  let popups = props.data.map((popup,id) => {
    return selected.showPopup &&
      <Popup
        key={id}
        latitude={selected.latitude}
        longitude={selected.longitude}
        closeButton={true}
        closeOnClick={false}
        onClose={() => setShowPopup({showPopup: false})}
        anchor="top">
        <h5>SUP</h5>
      </Popup>
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
          {popups}
        </ReactMapGL>
      </div>
    </div>
  );
}


export default Map;
