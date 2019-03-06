import React from 'react';
import './MovieRev.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, CardImg } from 'reactstrap';
import axios from 'axios';
import UserReview from './UserReview';
import { currentReviews } from '../../services/currentUserURLs';

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
      reviews: []
      //   loading: true
    };
  }
  componentDidMount() {
    const movie_id = this.props.match.params.id;
    const promise = axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${
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
          `https://api.themoviedb.org/3/movie/${
            this.props.match.params.id
          }?api_key=${process.env.REACT_APP_API}&append_to_response=videos`
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
        return axios.get(currentReviews);
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

    const data = this.state.reviews;
    console.log('length: ', this.state.reviews.length);
    return (
      <Container className="movieRevWrapper">
        {/* start of Grid A */}
        <Row>
          <Col sm="5">
            <div className="card-body text-left">
              <div className="card">
                <img
                  className="card-img-top"
                  src={`http://image.tmdb.org/t/p/original${this.state.img}`}
                  alt="Poster of the movie"
                />
                <div className="card-body">
                  <h5 className="card-title text-left">{this.state.title}</h5>
                  <a
                    href={`https://www.youtube.com/embed/${
                      this.state.trailerKey
                    }?rel=0&amp;autoplay=1;fs=0;autohide=0;hd=0;`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-info mr-3"
                  >
                    Watch Trailer
                  </a>
                  {/* <p /> */}
                  <a href="#" className="btn btn-info">
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
                      Write Review
                    </Link>
                  </a>
                  <p />
                  <p className="card-text">{this.state.overview}</p>
                </div>
              </div>
            </div>
            {/* </div> */}
          </Col>

          {/* 12 grid B */}
          <Col sm="7" className="secondCol text-left">
            {this.state.reviews.length > 0 ? (
              data.map(item => {
                return <UserReview key={item.id} item={item} />;
              })
            ) : (
              <h4>Be the first to leave a review</h4>
            )}
          </Col>
        </Row>
        {/* end of 12 Grid A */}
      </Container>
    );
  }
}
// ReactStrap Grid Documentation https://reactstrap.github.io/components/layout/
