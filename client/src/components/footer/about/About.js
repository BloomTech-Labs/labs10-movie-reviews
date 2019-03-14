import React from 'react';
import { ReactComponent as TMDBLogo } from '../../../assets/svg/PoweredByTMDB_green.svg';
import "./About.css";

const About = (props) => {
    return (
        <>
            <div className="about-wrapper">
                <div className="about-text">
                    <h3>What is CineView?</h3>
                    <p>
                    CineView is a web application for film consumers and their movie recommendations. Our main goal is to help people find movies they will love! Premium users have the added ability to share their personal review on a film.</p>
                    <br />
                    <br />
                    <p>A few of the things that CineView lets you do:</p>
                        <ul>
                            <li>Read reviews from a community of film consumers to see if a movie is a good fit for you.</li>
                            <li>Write reviews on any movie from A Trip To The Moon to your box office favorite.</li>
                            <li>Rate each film on a five-star scale to record and share your reaction</li>
                            <li>Keep a diary of the films you have seen and share your thoughts on them with others in the CineView community!</li>
                            <li>See current list of popular movies so you know what's fresh and exciting.</li>
                        </ul>
                        <p>Our goal is to help you make your next movie pick and give you the ability to share your reaction.</p><br/>

                        <h6>Real People.</h6>
                        <h6>Real Reviews. </h6>
                        <h6>CineView. </h6>
                    </div>
                <div className="about-text">
                    <h4>Film data</h4>
                    <p>All film-related metadata used in CineView, including synopses, release dates, trailers and poster art is supplied by TMDb.</p>
                    <div className="tmdb-terms-block">
                        <TMDBLogo 
                        width="100px"/>
                        <p>CineView uses the TMDb API but is not endorsed or certified by TMDb.</p>
                    </div>
                
                    <p>To add missing films or correct inaccuracies for existing films, please use TMDb’s interface (you’ll need to create an account there too). Changes to film data on TMDb will be visible in CineView within 30 hours.</p>

                </div>
                
            </div>
            
        </>
    );
};

export default About;