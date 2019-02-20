import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import axios from "axios";

export default class DummyUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios
      .get('https://labs10-movie-reviews.herokuapp.com/api/users')
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <ListGroup>
        {this.state.users.map(user => 
          <ListGroupItem>{user}</ListGroupItem>
        )}
      </ListGroup>
    );
  }
}