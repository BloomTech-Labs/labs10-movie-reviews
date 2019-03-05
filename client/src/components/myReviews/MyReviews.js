import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import axios from 'axios';
import { currentUser } from '../../services/currentUserURLs';
import { currentReviews } from '../../services/currentUserURLs';
import { Link } from 'react-router-dom';

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
    premium: ''
  };

  componentDidMount = async () => {
    this.fetchReviews();
    const userRes = await axios.get(currentUser, {
      withCredentials: true
    });
    if (userRes.data) {
      axios
        .get(`http://localhost:5000/api/users/${userRes.data.id}`)
        .then(getRes => {
          console.log("getRes \n", getRes.data)
          const requestOptions = {
            headers: { stripeid: getRes.data.stripeId },
          }
          axios
            .get('http://localhost:5000/api/customer/premium', requestOptions)
              .then(premiumRes => {
                // console.log(premiumRes)
                this.setState({
                  id: getRes.data.id,
                  photo: getRes.data.photo,
                  email: getRes.data.email,
                  name: getRes.data.name,
                  stripeId: getRes.data.stripeId,
                  premium: premiumRes.data.premium,
                })
              })
        })    
    }
  }

  // allows us to get all the reviews data from the API
  fetchReviews = () => {
    axios
      .get(currentReviews)
      .then(response => {
        this.setState({ reviews: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container className="movieRevWrapper">
        {/* start of Grid A */}
        <Row>
          <Col md="3">
            <div className="placeholder">
                <a href="https://placeholder.com">
                  <img
                    className="myreviews-avatar img-responsive mb-3 "
                    src={this.state.photo}
                    alt="avatar"
                    style={{ 'height': 150, 'width': 150}}
                  />
                </a>

                <ul className="list-group list-group-flush text-left">
                  <li className="list-group-item pl-3 bg-white border-info"><span className="small badge badge-light mr-2">Status: </span>
                    <span>
                      {this.state.premium 
                        ? <h3 className="badge badge-info">Premium</h3>
                        : <h3 className="badge badge-info">Standard</h3>
                      }
                    </span>
                  </li>

                  <li className="list-group-item pl-3 bg-white"><span className="small badge badge-light mr-1">Name: </span>
                      <span className="badge badge-light">{this.state.name}</span>
                  </li>

                  <li className="list-group-item pl-3 bg-white"><span className="small badge badge-light mr-1"> Email: </span>
                    <span className="badge badge-light">{this.state.email}</span>
                  </li>

                  <li className="list-group-item pl-3 bg-white"><span className="small badge badge-light mr-1"> Number of Reviews:</span>
                    <span className="badge badge-light">27</span>
                  </li>
                </ul>
                
              </div>
          </Col>
          {/* 12 grid B */}
          <Col md="9" className="secondCol">
            <div className="bodyRev">
              <div className="My-Reviews">
                <header className="sidebar" />
                <div className="reviews-section">
                  <ReviewsList reviewslist={this.state.reviews} />
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
