import React from 'react';
import { Link } from 'react-router-dom';
import { theMovieDbUrl } from '../../services/resourceURLs';
import './Footer.css';

const Footer = props => {
  return (
    <div className="footer">
      <p className="footer-text">
        {`© CineView. Made by fans in the United States. `}
        <Link className="footer-link" to="/about">{`Film data `}</Link>
        {`from `}
        <a href={`${theMovieDbUrl}`} className="footer-link">
          {`TMDb`}
        </a>
        .
      </p>
      <nav className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
      </nav>
    </div>
  );
};

export default Footer;
