import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavSearch = (props) => {
    return (
        <div className="input-and-button">
            <input
                onChange={props.handleChange}
                className="nav-input"
                type="text"
                name="searchCriteria"
                value={props.searchCriteria}
                placeholder="Search..."
            />
            <div className="call-to-action-buttons">
                <div className="button-nav" onClick={props.searchHandler}>
                    <Link to={`/search/?q=${props.searchCriteria}`}>{<i className="fas fa-search"></i>}</Link>
                </div>
            </div>
        </div>
    );
};

export default NavSearch;