import React from 'react';
import { FormGroup, Label, Input} from 'reactstrap';
import './Hero.css';

const HeroInput = (props) => {
    return (
            <Input
                onChange={props.handleChange}
                className="landing-input"
                type="text"
                name="searchCriteria"
                value={props.searchCriteria}
                placeholder={props.randomTitle}
            />
    );
};

export default HeroInput;