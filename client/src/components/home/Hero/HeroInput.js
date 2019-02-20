import React from 'react';

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