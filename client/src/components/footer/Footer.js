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
        <p className="footer-text">
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
    </div>
  );
};

export default Footer;
