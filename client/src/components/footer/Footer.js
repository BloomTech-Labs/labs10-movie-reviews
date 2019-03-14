import React from 'react';
import { Link } from 'react-router-dom';
import { theMovieDbUrl } from '../../services/resourceURLs';
import './Footer.css';

const Footer = props => {
  return (
    <div className="footer">
      <nav className="footer-nav">
        <div className="links">
          <Link to="/about"><h5>About</h5></Link>
          <Link to="/contact"><h5>Contact</h5></Link>
        </div>
        <p className="footer-text mobile-hidden">
          <Link to="/" className="home">{`© CineView. `}</Link>{`Made by fans in the United States.  `}
          <Link className="footer-link" to="/about">{`Film data `}</Link>
          {`from `}
          <a href={`${theMovieDbUrl}`} className="footer-link">
          {`TMDb`}
          </a>
          .
        </p>
        <div className="links">
          <Link to="/privacy"><h5>Privacy</h5></Link>
          <Link to="/terms"><h5>Terms</h5></Link>
        </div>
      </nav>
      <p className="mobile-display hidden-desktop">
        <Link 
          to="/" 
          className="mobile-home">
          {`© CineView. `}
        </Link>
        <Link 
          className="footer-link-mobile" 
          to="/about">
          {`Film data `}
        </Link>
        {`from `}
        <a 
          href={`${theMovieDbUrl}`} className="footer-link-mobile">
          {`TMDb`}
        </a>
      .</p>
    </div>
  );
};

export default Footer;
