import React from 'react';
import './Hero.css';

const HeroInput = (props) => {
    return (
        <>
        <label className="landing-label">{props.label}</label>
        <input
            onChange={props.handleChange}
            className="landing-input"
            type="text"
            placeholder={props.randomTitle}
        />
        </>
    );
};

export default HeroInput;