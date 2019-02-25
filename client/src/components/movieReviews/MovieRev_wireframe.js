import React from 'react';
import './MovieRev.css';
import { Container, Row, Col, Button } from 'reactstrap';

export default class MovieRev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      twitter: '',
      rating: 0,
      text: '',
      loading: true
    };
  }

  render() {
    console.log('all props movie rev has: ', this.props);
    return (
      <Container className="movieRevWrapper">
        {/* start of Grid A */}
        <Row>
          <Col sm="4">
            <h4>Title of the Movie</h4>
            <div className="placeholder">
              <a href="https://placeholder.com">
                <img src="https://via.placeholder.com/150" />
              </a>
            </div>
            <p />
            <Button>Watch Now</Button>
            <p />
            <Button>
              {/* <Link to={`/reviewform`}>Write Review</Link> */}
            </Button>
            <p>Year: </p>
            <p>Genre: </p>
            <p>Description: </p>
          </Col>

          {/* 12 grid B */}
          <Col sm="8" className="secondCol">
            <Row>
              <Col sm="4">
                <div className="placeholder">
                  <a href="https://placeholder.com">
                    <img src="https://via.placeholder.com/100" />
                  </a>
                </div>
                <p>
                  Member Status: <span>VIP</span>
                  <br />
                  {/* Location: <br /> */}
                  Name: <br />
                  Num of Reviews:
                </p>
              </Col>

              <Col sm="8">
                <div className="ratingStar">
                  <p>
                    Rating Stars: <span>Date: </span>
                  </p>
                </div>
                <div className="bodyRev">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </Col>
            </Row>
            {/* end of Grid B */}
          </Col>
        </Row>
        {/* end of 12 Grid A */}
      </Container>
    );
  }
}
// ReactStrap Grid Documentation https://reactstrap.github.io/components/layout/
