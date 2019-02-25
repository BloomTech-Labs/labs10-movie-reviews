import React from 'react';
import { Row, Col } from 'reactstrap';

export default class UserReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    console.log('props in reviews: ', this.props);
    return (
      <Row>
        <Col sm="4">
          <div className="placeholder">
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/100" alt="placeholder" />
            </a>
          </div>
          <p>
            Member Status: <br />
            {/* Location: <br /> */}
            Name: {this.props.item.twitterhandle}
            <br />
            Num of Reviews:{' '}
          </p>
        </Col>

        <Col sm="8">
          <div className="ratingStar">
            <p>
              Rating Stars: {this.props.item.rating}{' '}
              <span> Date: {this.props.item.created_at}</span>
            </p>
          </div>
          <div className="bodyRev">
            <p>{this.props.item.textBody}</p>
          </div>
        </Col>
      </Row>
    );
  }
}
