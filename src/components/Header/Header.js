import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';


const Header = () => {

  return (
    <nav>
      <div className="nav-item"><Link to="/">Home</Link></div>
      <img className='header-img' src={require('./../../assets/food.png')} alt='japanese food'/>
      <div className="nav-item"><Link to="/search">Search</Link></div>
    </nav>
  );
}

export default Header;
