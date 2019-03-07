import React from 'react';
import './FeatureList.css';

const FeatureList = props => {
  return (
    <>
      <div class="features-boxed">
        <div class="container">
          <div class="intro">
            <h2 class="text-center">CineView let's you...</h2>
            {/* <p class="text-center">Write reviews on any movie from A Trip To The Moon to your box
                  office favorite</p> */}
          </div>
          <div class="row justify-content-center features">
            <div class="col-sm-6 col-md-5 col-lg-4 item">
              <div class="box">
                <i class="fa fa-map-marker icon" />
                <h3 class="name">Review anywhere</h3>
                <p class="description">
                  Write reviews on any movie from A Trip To The Moon to your box
                  office favorite
                </p>
                <a href="#" class="learn-more">
                  Learn more »
                </a>
              </div>
            </div>
            <div class="col-sm-6 col-md-5 col-lg-4 item">
              <div class="box">
                <i class="fas fa-star icon" />
                <h3 class="name">Rate any movie</h3>
                <p class="description">
                  Rate each film on a five-star scale to record and share your
                  reaction
                </p>
                <a href="#" class="learn-more">
                  Learn more »
                </a>
              </div>
            </div>
            <div class="col-sm-6 col-md-5 col-lg-4 item">
              <div class="box">
                <i class="fas fa-calendar-alt icon" />
                <h3 class="name">Keep a diary </h3>
                <p class="description">
                  Keep a diary of the films you have seen and share your
                  thoughts on them with others
                </p>
                <a href="#" class="learn-more">
                  Learn more »
                </a>
              </div>
            </div>
            <div class="col-sm-6 col-md-5 col-lg-4 item">
              <div class="box">
                <i class="fas fa-video icon" />
                <h3 class="name">Trending movies </h3>
                <p class="description">
                  See current list of popular movies so you know what's fresh at
                  the box office
                </p>
                <a href="#" class="learn-more">
                  Learn more »
                </a>
              </div>
            </div>
            <div class="col-sm-6 col-md-5 col-lg-4 item">
              <div class="box">
                <i class="fas fa-plane icon" />
                <h3 class="name">Fast </h3>
                <p class="description">
                  Fast access to movie reviews by real people just like you
                </p>
                <a href="#" class="learn-more">
                  Learn more »
                </a>
              </div>
            </div>
            <div class="col-sm-6 col-md-5 col-lg-4 item">
              <div class="box">
                <i class="fas fa-mobile-alt icon" />
                <h3 class="name">Mobile-first</h3>
                <p class="description">
                  Access our app on any of your favorite devices
                </p>
                <a href="#" class="learn-more">
                  Learn more »
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureList;
