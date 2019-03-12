import React from 'react';
import './Hero.css';

const HeroHeader = (props) => {
    return (
        <>
          <h1 className="app-name">{props.appName}</h1>
          <h4 className="app-subtitle">{props.appSlug}</h4>
        </>
    );
};

export default HeroHeader;