import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Search from './components/Main/Search'
import Footer from './components/Footer/Footer'
import Loading from './components/Main/Loading'
import Home from './components/Main/Home'
import yelpApi from './yelpApi.js'

class App extends React.Component {
  state = {
    yelpData: null,
    apiInputs: {
      lat: null,
      lon: null,
      dist: '1000',
      sort: 'distance'
    }
  }

  setDistance = async (value) => {
    await this.setState(prevState => ({
      apiInputs: {
        ...prevState.apiInputs,
        dist: value.toString()
      }
    }))
    this.getData();
  }

  setSort = async (value) => {
    await this.setState(prevState => ({
      apiInputs: {
        ...prevState.apiInputs,
        sort: value.toString()
      }
    }))
    this.getData();
  }

  getCoords = async() => {
    navigator.geolocation.getCurrentPosition(async (res) => {
      const lat = res.coords.latitude.toString();
      const lon = res.coords.longitude.toString();
      await this.setState(prevState => ({
        apiInputs: {
          ...prevState.apiInputs,
          lat: lat,
          lon: lon
        }
      }))
      this.getData();
    })
  }

  getData = async() => {
    let response = await yelpApi(this.state.apiInputs.lat, this.state.apiInputs.lon, this.state.apiInputs.dist, this.state.apiInputs.sort);
    this.setState(prevState => ({
    yelpData: response.data.businesses}));
  }

  componentDidMount = () => {
    this.getCoords();
  }

  render() {

    console.log(this.state.apiInputs.lat, this.state.apiInputs.lon, this.state.apiInputs.dist, this.state.apiInputs.sort, this.state.yelpData);

    return (
      <div className="App">
      <Header />
      <Route exact path='/'
        render= {(props) =>
        <Home {...props}/>}
      />
      {this.state.yelpData === null ?
        <Loading /> :
        <Route path='/search'
          render={(props) =>
          <Search {...props}
            getCoords={this.getCoords}
            setDistance={this.setDistance}
            setSort={this.setSort}
            data={this.state.yelpData}
            api={this.state.apiInputs}/>}
        />
      }
      <Footer />
      </div>
    );
  }
}

export default App;
