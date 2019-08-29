import React, { useState } from 'react';
import './Results.css';
import ReactMapGL, { Marker, Popup, GeolocateControl, NavigationControl }  from 'react-map-gl';
<<<<<<< HEAD
import Result from '../Result/Result';
import 'mapbox-gl/dist/mapbox-gl.css';
=======
>>>>>>> 70b64e58c7697f6249f72b717924d8b691ee0c40


const Map = (props) => {

  const [viewport, setViewport] = useState({
<<<<<<< HEAD
    width: 550,
    height: 400,
    latitude: 40.7401021,
    longitude: -73.9897215,
    zoom: 15,
=======
    width: 450,
    height: 400,
    latitude: 40.7401285,
    longitude: -73.9898506,
    zoom: 14
  })

  const [showPopup, setShowPopup] = useState({
    showPopup: true
>>>>>>> 70b64e58c7697f6249f72b717924d8b691ee0c40
  })

  const [selected, setSelected] = useState({
    latitude: null,
    longitude: null,
<<<<<<< HEAD
    showPopup: null,
  })

  const handleGeolocation = (newViewport) => {
    setSelected({
      latitude: newViewport.latitude,
      longitude: newViewport.longitude,
      showPopup: true
    });
    setViewport(newViewport)
  }

=======
    showPopup: null
  })

>>>>>>> 70b64e58c7697f6249f72b717924d8b691ee0c40
  let markers = props.data.map((marker,id) => {
    return <Marker
    key={id}
    latitude={marker.coordinates.latitude}
    longitude={marker.coordinates.longitude}>
<<<<<<< HEAD
    <img className='button-svg'
    src={require('./../../assets/sushi.svg')}
    onClick={(e) => {
      setSelected({
        latitude: marker.coordinates.latitude,
        longitude: marker.coordinates.longitude,
        showPopup: true,
      })
      }}
    />
=======
    <button className='marker'
    onClick={(e) => {
      e.preventDefault();
      setSelected({
        latitude: marker.coordinates.latitude,
        longitude: marker.coordinates.longitude,
        showPopup: true
      })
    }}></button>
>>>>>>> 70b64e58c7697f6249f72b717924d8b691ee0c40
    </Marker>
  })

  let popups = props.data.map((popup,id) => {
    return selected.showPopup &&
      <Popup
<<<<<<< HEAD
        className='popup'
=======
>>>>>>> 70b64e58c7697f6249f72b717924d8b691ee0c40
        key={id}
        latitude={selected.latitude}
        longitude={selected.longitude}
        closeButton={true}
        closeOnClick={false}
<<<<<<< HEAD
        onClose={() => setSelected({showPopup: false})}
        dynamicPosition={true}>
        <Result key={id} data={popup} api={props.api}/>
=======
        onClose={() => setShowPopup({showPopup: false})}
        anchor="top">
        <h5>SUP</h5>
>>>>>>> 70b64e58c7697f6249f72b717924d8b691ee0c40
      </Popup>
  })

  return (
    <div className='results'>
<<<<<<< HEAD
      <div className='sorry-container'>
        <h4 className='sorry'>Map view is not available on a screen this small. View this page on a larger screen for map functionality</h4>
      </div>
      <div className='map'>
        <ReactMapGL
          mapStyle={'mapbox://styles/jadizzedin/cjzwutlh915w11co0zu42t3dg'}
          mapboxApiAccessToken={process.env.REACT_APP_M_KEY}
=======
      <div className='map'>
        <ReactMapGL
          mapboxApiAccessToken={'pk.eyJ1IjoiamFkaXp6ZWRpbiIsImEiOiJjanp2ZWo4ZWEwcTlwM2xvZTV6bHpsbGd2In0.UK1Q11H28dTkvbtOcp38vA'}
>>>>>>> 70b64e58c7697f6249f72b717924d8b691ee0c40
          {...viewport}
          onViewportChange={(viewport) => {
            setViewport(viewport) }}
        >
<<<<<<< HEAD
          <div style={{position: 'absolute', left: 0}}>
            <GeolocateControl
              className = 'geolocate-control'
              positionOptions={{enableHighAccuracy: true}}
              trackUserLocation={true}
              onViewportChange={(viewport) => {
                handleGeolocation(viewport)
              }}
            />
          </div>
          <div style={{position: 'absolute', left: 0, top: '50px'}}>
            <NavigationControl />
          </div>
=======

>>>>>>> 70b64e58c7697f6249f72b717924d8b691ee0c40
          {markers}
          {popups}
        </ReactMapGL>
      </div>
    </div>
  );
}


export default Map;
