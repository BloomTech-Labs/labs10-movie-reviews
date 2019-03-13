import React from 'react';
import './FeatureList.css';

const FeatureList = props => {
  return (
    <>
      <div className="features-boxed">
        <div className="container">
          <div className="intro">
            <h4 className="text-center">CineView let's you...</h4>
            {/* <p className="text-center">Write reviews on any movie from A Trip To The Moon to your box
                  office favorite</p> */}
          </div>
          <div className="row justify-content-center features">
            <div className="col-sm-6 col-md-5 col-lg-4 item">
              <div className="box">
                <i className="fa fa-map-marker-alt icon" />
                <h3 className="name">Review anywhere</h3>
                <p className="description">
                  Write reviews on any movie from A Trip To The Moon to your box
                  office favorite
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-5 col-lg-4 item">
              <div className="box">
                <i className="fas fa-star icon" />
                <h3 className="name">Rate any movie</h3>
                <p className="description">
                  Rate each film on a five-star scale to record and share your
                  reaction
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-5 col-lg-4 item">
              <div className="box">
                <i className="fas fa-calendar-alt icon" />
                <h3 className="name">Keep a diary </h3>
                <p className="description">
                  Keep a diary of the films you have seen and share your
                  thoughts on them with others
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-5 col-lg-4 item">
              <div className="box">
                <i className="fas fa-video icon" />
                <h3 className="name">Trending movies </h3>
                <p className="description">
                  See current list of popular movies so you know what's fresh at
                  the box office
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-5 col-lg-4 item">
              <div className="box">
                <i className="fas fa-fighter-jet icon" />
                <h3 className="name">Fast </h3>
                <p className="description">
                  Have fast access to movie reviews by real people just like you
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-5 col-lg-4 item">
              <div className="box">
                <i className="fas fa-mobile-alt icon" />
                <h3 className="name">Mobile-first</h3>
                <p className="description">
                  Access our app on any of your favorite devices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureList;
