import React from 'react';
import { ReactComponent as TMDBLogo } from '../../../assets/svg/PoweredByTMDB_green.svg';
import "./About.css";

const About = (props) => {
    return (
        <div className="about-wrapper">
            <h2>Film data</h2>
            <div className="about-text">
                <div>All film-related metadata used in CineView, including synopses, release dates, trailers and poster art is supplied by TMDb.</div>
                <div className="tmdb-terms-block">
                    <TMDBLogo 
                    width="100px"/>
                    <p>CineView uses the TMDb API but is not endorsed or certified by TMDb.</p>
                </div>
                
                <p>To add missing films or correct inaccuracies for existing films, please use TMDb’s interface (you’ll need to create an account there too). Changes to film data on TMDb will be visible in CineView within 30 hours.</p>
            </div>
            
            







        </div>
    );
};

export default About;