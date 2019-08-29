import React, { useState } from 'react';
import './Results.css';
import ReactMapGL, { Marker, Popup, GeolocateControl, NavigationControl }  from 'react-map-gl';
import Result from '../Result/Result';
import 'mapbox-gl/dist/mapbox-gl.css';


const Map = (props) => {

  const [viewport, setViewport] = useState({
    width: 550,
    height: 400,
    latitude: 40.7401021,
    longitude: -73.9897215,
    zoom: 15,
  })

  const [selected, setSelected] = useState({
    latitude: null,
    longitude: null,
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

  let markers = props.data.map((marker,id) => {
    return <Marker
    key={id}
    latitude={marker.coordinates.latitude}
    longitude={marker.coordinates.longitude}>
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
    </Marker>
  })

  let popups = props.data.map((popup,id) => {
    return selected.showPopup &&
      <Popup
        className='popup'
        key={id}
        latitude={selected.latitude}
        longitude={selected.longitude}
        closeButton={true}
        closeOnClick={false}
        onClose={() => setSelected({showPopup: false})}
        dynamicPosition={true}>
        <Result key={id} data={popup} api={props.api}/>
      </Popup>
  })

  return (
    <div className='results'>
      <div className='sorry-container'>
        <h4 className='sorry'>Map view is not available on a screen this small. View this page on a larger screen for map functionality</h4>
      </div>
      <div className='map'>
        <ReactMapGL
          mapStyle={'mapbox://styles/jadizzedin/cjzwutlh915w11co0zu42t3dg'}
          mapboxApiAccessToken={process.env.REACT_APP_M_KEY}
          {...viewport}
          onViewportChange={(viewport) => {
            setViewport(viewport) }}
        >
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
          {markers}
          {popups}
        </ReactMapGL>
      </div>
    </div>
  );
}


export default Map;
