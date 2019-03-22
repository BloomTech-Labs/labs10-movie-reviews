import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { currentUser, users } from '../../services/userURLs';
import { currentUserReviews } from '../../services/reviewURLs';
import { customerPlan } from '../../services/paymentURLs';


import ReviewsList from './MyReviewsList';
import './MyReviews.css';

class MyReviews extends Component {
  state = {
    reviews: [],
    userId: null,
    movieId: null,
    reviewer: '',
    photo: '',
    email: '',
    rating: null,
    textBody: '',
    name: '',
    premium: 0,
    stripeId: '',
    currUserId: null
  };

  componentDidMount = async () => {
    const currentUserRes = await axios.get(currentUser, {
      withCredentials: true
    });
    let userRes;
    if (currentUserRes.data) {
      userRes = await axios.get(`${users}/${currentUserRes.data.id}`);
    }
    if (userRes.data) {
      // console.log('userRes.data', userRes.data);
      const { photo, stripeId, twitterId } = userRes.data;

      let newPhoto;
      if (twitterId) {
        //this code takes the photo URL from twitter - which is low resolution and takes a substring of it and concats it with the jpg to give us a higher resolution photo for myReviews dashboard.
        newPhoto =
          photo.substr(0, userRes.data.photo.length - 11) + '.jpg';
      } else {
        newPhoto = photo;
      }
      if (stripeId) {   
        axios
          .post(customerPlan, {
            stripeId
          })
          .then(planRes => {
            console.log(planRes);
            if (planRes.data.premium) {
              this.setState({
                stripeId,
                premium: 1,
                currUserId: userRes.data.id
              });
            }
            else {
              
            }
          })
          .catch(error => {
            this.setState({
              stripeId: '',
              premium: 0, 
              currUserId: userRes.data.id
            });
          });
      } else {
        this.setState({premium: 0});
      }
      this.setState({
        photo: newPhoto,
        name: userRes.data.name,
        email: userRes.data.email
      });
      this.fetchReviews(userRes.data.id);
      console.log('userData', userRes.data);
    } else {
      console.log('Unable to get current user information');
    }
  };

  // allows us to get all the reviews data from the API
  fetchReviews = userId => {
    axios
      .post(currentUserReviews, { userId })
      .then(response => {
        this.setState({ reviews: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log('MyReviews: ', this.state.reviews);
    return (
      <Container className="movieRevWrapper background-color">
        {/* start of Grid A */}
        <Row>
          <Col lg="3">
            <div className="placeholder">
              <a href="">
                <img
                  className="myreviews-avatar img-responsive mb-3 "
                  src={this.state.photo}
                  alt="avatar"
                  style={{ height: 150, width: 150 }}
                />
              </a>

              <ul className="list-group list-group-flush text-left">
                <li className="list-group-item pl-3 bg-white">
                  <span className="badge badge-light">{this.state.name}</span>
                </li>
              </ul>
            </div>
          </Col>
          {/* 12 grid B */}
          <Col lg="9" className="secondCol">
            <div className="bodyRev">
              <div className="My-Reviews">
                <header className="sidebar" />
                <div className="reviews-section text-left">
                  <ReviewsList
                    getReleaseYear={this.props.getReleaseYear}
                    reviewslist={this.state.reviews}
                    premium={this.state.premium}
                  />
                </div>
              </div>
            </div>
            {/* end of Grid B */}
          </Col>
        </Row>
        {/* end of 12 Grid A */}
      </Container>
    );
  }
}

export default MyReviews;
