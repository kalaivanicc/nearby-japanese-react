import React from 'react';
import './App.css';
import yelpApi from './yelpApi.js'

class App extends React.Component {
  state = {
    yelpData: {}
  }

getData = async () => {
    let data = await yelpApi();
    console.log(data);
    return data
    }


  componentDidMount = () => {
    this.getData();
  }

  render() {

    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
