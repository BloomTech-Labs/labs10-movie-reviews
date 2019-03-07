import React from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import { currentUser } from '../../services/currentUserURLs';
import './UserReview.css';
import StarRatingComponent from 'react-star-rating-component';

export default class UserReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewer: '',
      photo: ''
    };
  }

  componentDidMount = async () => {
    const res = await axios.get(currentUser, {
      withCredentials: true
    });
    if (res.data) {
      this.setState({ reviewer: res.data.reviewer, photo: res.data.photo });
    }
  };

  render() {
    console.log('props in reviews: ', this.props);
    return (
      <Row>
        <div className="container mb-3">
          <div className="card flex-row flex-wrap">
            <div className="card-header border-0">
              <div className="placeholder">
                <a href="https://placeholder.com">
                  <img
                    className="movie-profile-avatar"
                    src={this.state.photo}
                    alt="placeholder"
                  />
                </a>
              </div>
              <p>
                Member Status: <br />
                {/* Location: <br /> */}
                Name: {this.state.reviewer}
                <br />
                Num of Reviews:{' '}
              </p>
            </div>
            <div className="card-block px-2">
              <div className="goFlex">
                <StarRatingComponent
                  name="rate2"
                  editing={false}
                  renderStarIcon={() => <span>★</span>}
                  starCount={5}
                  value={this.props.item.rating}
                />
                <p className="space"> Date: {this.props.item.created_at}</p>
              </div>
              <p className="card-text">{this.props.item.textBody}</p>
            </div>
          </div>
        </div>
      </Row>
    );
  }
}
