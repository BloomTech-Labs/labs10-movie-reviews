import React from 'react';
import './Hero.css';

const HeroInput = (props) => {
    return (
        <div className="hero-input">
            <label className="landing-label">{props.label}</label>
            <input
                onChange={props.handleChange}
                className="landing-input"
                type="text"
                name="searchCriteria"
                value={props.searchCriteria}
                placeholder={props.randomTitle}
            />
        </div>
    );
};

export default HeroInput;