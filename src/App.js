import React from 'react';
import './App.css';
import api from './api.js'

class App extends React.Component {

  runAPI = async () => {
    let data = await api();
    console.log(data);
    return data
    }


  componentDidMount = () => {
    this.runAPI();
  }

  render() {

    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
