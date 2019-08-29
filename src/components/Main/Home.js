import React from 'react';
import './Main.css'


const Home = (props) => {
  return (
    <main className='home'>
      <div className='info'>
        <h1>Find Nearby Japanese Food</h1>
        <p>Click the 'search' link above to load results for nearby Japanese retstaurants, based on your current location - brought to you by Yelp's API.</p>
        <p> Load different results by changing the search distance and/or sort parameters.</p>
        <p> The default will search for restaurants within 1000m and sort based on distance (closest to you). Up to 6 results are displayed based on the search paraments and all restaurant results are open.</p>
      </div>
    </main>
  );
}

export default Home;
