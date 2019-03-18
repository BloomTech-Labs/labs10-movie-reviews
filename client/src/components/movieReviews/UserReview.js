import React from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { currentUser } from '../../services/userURLs';
import { users } from '../../services/userURLs';
import './UserReview.css';
import StarRatingComponent from 'react-star-rating-component';

export default class UserReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewer: '',
      photo: '',
      name: '',
      users: '',
      id: '',
      photo1: '',
      name1: ''
    };
  }

  componentDidMount = async () => {
    this.fetchReviews();
  };
  fetchReviews = () => {
    axios
      .get(users)
      .then(response => {
        console.log('response auth - Users: ', response);
        const user = response.data.filter(i => i.id === this.props.item.userId);
        console.log('user: ', user[0]);
        this.setState({
          photo1: user[0].photo,
          name1: user[0].name
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log('props in reviews: ', this.props);
    console.log('this. props id: ', this.props.item.userId);

    return (
      <div className="container card mb-3 pt-2 bg-white">
        <Row>
          <Col lg="4" sm="12">
            <div className="pt-0">
              <div className="col">
                <div className="placeholder">
                  <Link to={`/myreviews`}>
                    <img
                      className="movie-profile-avatar"
                      src={this.state.photo1}
                      alt="placeholder"
                    />
                  </Link>

                  <ul className="list-group list-group-flush text-left">
                    <li className="bg-white">
                      <span className="small badge badge-light mr-1">
                        Name:{' '}
                      </span>
                      <span className="badge badge-light">
                        {this.state.name1}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="8" sm="12">
            <div className="goFlex mb-1">
              <div className="marginLeft">
                <StarRatingComponent
                  name="rate2"
                  editing={false}
                  renderStarIcon={() => <span className="smallStar">★</span>}
                  starCount={5}
                  value={this.props.item.rating}
                />
              </div>
              <p className="spaceU"> Date: {this.props.item.created_at}</p>
            </div>
            <p className="card-text">{this.props.item.textBody}</p>
          </Col>
        </Row>
      </div>
    );
  }
}
