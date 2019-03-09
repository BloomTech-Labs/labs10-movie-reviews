import React, { Component, Fragment } from 'react';
import axios from 'axios';

import { currentUser } from '../../services/userURLs';

export default class RenderDropdown extends Component {
  state = { isLoggedIn: false };

  componentDidMount = async () => {
    const res = await axios.get(currentUser, {
      withCredentials: true
    });
    if (res.data) {
      this.setState({ isLoggedIn: !this.state.isLoggedIn });
    }
  };

  render() {
    if (this.state.isLoggedIn) {
      return <Fragment>{this.props.children}</Fragment>;
    } else {
      return null;
    }
  }
}
