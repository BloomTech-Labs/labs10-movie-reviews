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

  getReviewDate = string => {
    let regex = /(18|19|20)\d{2}-(0|1)\d{1}-(0|1|2|3)\d{1}/g;

    let found = string.match(regex);
    console.log(found);
    if (!found) {
      return '';
    } else {
      let split = found[0].split('');
      console.log(split);
      let year = split.splice(0, 4).join('');
      let month = split.splice(1, 2).join('');
      let day = split.splice(2).join('');
      console.log(year, month, day);

      return month + '-' + day + '-' + year;
    }
  };

  render() {
    console.log('props in reviews: ', this.props);
    console.log('this. props id: ', this.props.item.userId);
    const string = this.props.item.created_at;

    return (
      <div className="container card mb-3 pt-2 bg-white">
        <Row>
          <Col lg="3" sm="12">
            {/* <div className="pt-0"> */}
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
                    <span className="small badge badge-light mr-1">Name: </span>
                    <span className="badge badge-light">
                      {this.state.name1}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* </div> */}
          </Col>
          <Col lg="9" sm="12">
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
              <p className="spaceU text-right">
                {' '}
                Date: {this.getReviewDate(this.props.item.created_at)}
              </p>
            </div>
            <p className="card-text">{this.props.item.textBody}</p>
          </Col>
        </Row>
      </div>
    );
  }
}
