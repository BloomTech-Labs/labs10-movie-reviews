import React from 'react';
import './MovieRev.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import UserReview from './UserReview';
import { reviews } from '../../services/reviewURLs';
import { tmdbUrl, theMovieDbUrl } from '../../services/resourceURLs';
import { currentUser } from '../../services/userURLs';
import { customerPlan } from '../../services/paymentURLs';

export default class MovieRev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: '',
      rating: 0,
      year: '',
      overview: '',
      img: '',
      trailerKey: '',
      reviews: [],
      stripeId: '',
      premium: false
      //   loading: true
    };
  }

  componentWillMount = async () => {
    // this.fetchReviews();
    const userRes = await axios.get(currentUser, {
      withCredentials: true
    });
    if (userRes.data) {
      console.log('userRes.data', userRes.data);
      const stripeId = userRes.data.stripeId;

      if (!stripeId) {
        this.setState({
          stripeId: '',
          premium: false
        });
      } else if (stripeId) {
        axios
          .post(customerPlan, {
            stripeId
          })
          .then(planRes => {
            console.log('planRes', planRes);
            if (planRes.data.premium) {
              this.setState({
                stripeId,
                premium: planRes.data.customer.active
              });
            }
          })
          .catch(error => {
            this.setState({
              stripeId: null,
              premium: false
            });
          });
      }
    } else {
      console.log('Unable to get current user information');
    }
  };

  componentDidMount() {
    const movie_id = this.props.match.params.id;
    const promise = axios.get(
      `${theMovieDbUrl}/3/movie/${movie_id}?api_key=${
        process.env.REACT_APP_API
      }&language=en-US`
    );
    promise
      .then(response => {
        // console.log('response in movie rev: ', response);
        this.setState({
          title: response.data.title,
          year: response.data.release_date,
          overview: response.data.overview,
          img: response.data.backdrop_path,
          id: response.data.id
          //   loading: false
        });
        // console.log('movies id: ', this.state.id);
        // //sets the information retrieved onto state
        return axios.get(
          `${theMovieDbUrl}/3/movie/${this.props.match.params.id}?api_key=${
            process.env.REACT_APP_API
          }&append_to_response=videos`
        );
      })
      .then(response => {
        // console.log('Nested response: ', response);
        const result = response.data.videos.results.filter(
          word => word.type === 'Trailer'
        );
        this.setState({
          trailerKey: result[0].key
        });
        // console.log('filtered result: ', result);
        return axios.get(reviews);
      })
      .then(response => {
        // console.log('third Nested response: ', response);
        const result = response.data.filter(
          item => item.movieId === this.state.id
        );
        this.setState({
          reviews: result
          //   loading: false
        });
        // console.log('filtered result in third nested: ', result);
        // console.log('review state after third nested: ', this.state.reviews);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    // console.log('all props movie rev has: ', this.props);
    console.log('this.state', this.state);
    const data = this.state.reviews;
    // console.log('length: ', this.state.reviews.length);
    return (
      <Container className="movieRevWrapper">
        {/* start of Grid A */}
        <Row>
          <Col lg="5" className="mb-3">
            <div className="card">
              <div className="card-body text-left">
                <img
                  className="card-img-top"
                  src={`${tmdbUrl}${this.state.img}`}
                  alt="Poster of the movie"
                />
                <div className="card-body">
                  <h5 className="card-title text-left">{this.state.title}</h5>
                  {/* <div className="row">
                    <div className="col-xs-6"> */}
                  <a
                    href={`https://www.youtube.com/embed/${
                      this.state.trailerKey
                    }?rel=0&amp;autoplay=1;fs=0;autohide=0;hd=0;`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-info mr-3 mb-2"
                    id="trailer"
                  >
                    Watch Trailer
                  </a>
                  {/* </div>
                    <div className="col-xs-6"> */}

                  {this.state.premium ? (
                    <Link
                      to={{
                        pathname: `/reviewform/${this.state.id}`,
                        state: {
                          id: this.state.id,
                          title: this.state.title,
                          year: this.state.year,
                          overview: this.state.overview,
                          img: this.state.img
                        }
                      }}
                    >
                      <button className="btn btn-info mr-3 mb-2" id="submit">
                        Write Review
                      </button>
                    </Link>
                  ) : (
                    <Link to={{ pathname: '/premium' }}>
                      <button className="btn btn-info mr-3 mb-2" id="submit">
                        Go Premium
                      </button>
                    </Link>
                  )}
                  {/* </div> */}
                  {/* </div> */}
                  <p />
                  <p className="card-text">{this.state.overview}</p>
                </div>
              </div>
            </div>
            {/* </div> */}
          </Col>

          {/* 12 grid B */}
          <Col lg="7" className="secondCol text-left">
            {this.state.reviews.length ? (
              this.state.premium ? (
                data.map(item => {
                  return <UserReview key={item.id} item={item} />;
                })
              ) : (
                <>
                  <h4 className="text-center mb-3">
                    Go Premium and Write Reviews!
                  </h4>
                  {data.map(item => {
                    return <UserReview key={item.id} item={item} />;
                  })}
                </>
              )
            ) : this.state.premium ? (
              <h4 className="text-center mb-3">
                Be the first to leave a review!
              </h4>
            ) : (
              <h4 className="text-center mb-3">
                Go Premium, and be the first to leave a review!
              </h4>
            )}
          </Col>
        </Row>
        {/* end of 12 Grid A */}
      </Container>
    );
  }
}
// ReactStrap Grid Documentation https://reactstrap.github.io/components/layout/
