import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css';

const Footer = () => {

  return (
    <footer>
      <Link className='footerLinks' to="/">Link</Link>
    </footer>
  );
}

export default Footer;
