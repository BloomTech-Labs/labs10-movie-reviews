import React from 'react';
import './Hero.css';

const HeroHeader = (props) => {
    return (
        <>
          <h1 className="app-name">{props.appName}</h1>
          <div className="app-subtitle">{props.appSlug}</div>
        </>
    );
};

export default HeroHeader;