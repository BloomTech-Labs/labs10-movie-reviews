import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'reactstrap';
import { logout } from '../../services/authURLs';
import { currentUser } from '../../services/userURLs';

import Modal from './Modal';
import RenderDropdown from './RenderDropdown';
import RenderLogin from './RenderLogin';
import './Navbar.css';


class ProductionNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      photo: '',
      name: ''
    };

    this.toggle = this.toggle.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount = async () => {
    const res = await axios.get(currentUser, {
      withCredentials: true
    });
    // console.log(res.data.photo, 'photo');
    if (res.data) {
      this.setState({ name: res.data.name, photo: res.data.photo });
    }
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleKeyUp(event){
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('nav-button').click();
        this.props.history.push(`/search/?q=${this.props.inputCriteria}`)
      }
    }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          CineView
        </Link>
        <Button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </Button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="form-inline">
            <Input
              className="form-control"
              placeholder="Search"
              type="text"
              name="inputCriteria"
              value={this.props.inputCriteria}
              onSubmit={this.props.searchHandler}
              onChange={this.props.handleChange}
              onKeyUp={this.handleKeyUp}
              id="nav-input"
            />
            <Button
              id="nav-button"
              className="btn btn-outline-success"
              onClick={this.props.searchHandler}
            >
              <Link to={`/search/?q=${this.props.inputCriteria}`}>
                {<i className="fas fa-search" />}
              </Link>
            </Button>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <RenderLogin>
                <Modal
                  buttonLabel="Log In"
                  modal={this.state.modal}
                  toggle={this.toggle}
                />
              </RenderLogin>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/premium">
                Premium Subscriptions
              </Link>
            </li>
            <RenderDropdown>
              <a href={logout}>
                <Button color="light">Logout</Button>
              </a>
              <Link to="/myreviews" className="avatar-link">
                <img className="avatar" src={this.state.photo} alt="avatar" />
                <p>{`${this.state.name}`}</p>
              </Link>
            </RenderDropdown>
          </ul>
        </div>
      </nav>
    );
  }
}

export default ProductionNavigation;
