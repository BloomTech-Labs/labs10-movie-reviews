import React, { Fragment } from 'react';
import {
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import axios from "axios";
axios.defaults.withCredentials = true;

export default class DummyUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/users')
      .then(response => {
        console.log(response)
        this.setState({
          users: response.data
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <ListGroup>
        {this.state.users.map(user => 
          <Fragment>
            <ListGroupItem>username: {user.username}</ListGroupItem>
            <ListGroupItem>name: {user.name}</ListGroupItem>
            <ListGroupItem>email: {user.email}</ListGroupItem>
          </Fragment>
        )}
      </ListGroup>
    );
  }
}