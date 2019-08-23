import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import yelpApi from './yelpApi.js'

class App extends React.Component {
  state = {
    yelpData: {}
  }

getData = async () => {
    let data = await yelpApi();
    console.log(data.data.businesses);
    await this.setState(prevState => ({
    yelpData: data}));
  }

  componentDidMount = () => {
    this.getData();
  }

  render() {

    return (
      <div className="App">
      <Header />
      <Main
        data={this.state.yelpData}/>
      <Footer />
      </div>
    );
  }
}

export default App;
