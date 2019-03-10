import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { logout } from '../../services/authURLs';
import { currentUser } from '../../services/userURLs';

import Modal from './Modal';

import './Navbar.css';
import RenderDropdown from './RenderDropdown';
import RenderLogin from './RenderLogin';
class TestNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
      photo: '',
      name: ''
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  componentDidMount = async () => {
    const res = await axios.get(currentUser, {
      withCredentials: true
    });
    console.log(res.data.photo, 'photo');
    if (res.data) {
      this.setState({ name: res.data.name, photo: res.data.photo });
    }
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          CineView
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              name="inputCriteria"
              value={this.props.inputCriteria}
              onChange={this.props.handleChange}
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={this.props.searchHandler}
              type="submit"
            >
              <Link to={`/search/?q=${this.props.inputCriteria}`}>
                {<i className="fas fa-search" />}
              </Link>
            </button>
          </form>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <RenderLogin>
                <Modal
                  buttonLabel="Log In"
                  modal={this.state.modal}
                  nestedModal={this.state.nestedModal}
                  closeAll={this.state.closeAll}
                  toggle={this.toggle}
                  toggleAll={this.toggleAll}
                  toggleNested={this.toggleNested}
                />
              </RenderLogin>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/premium">
                Premium Subscriptions
              </a>
            </li>
            <RenderDropdown>
              <a href={logout}>
                <Button color="light">Logout</Button>
              </a>
              <Link to="/myreviews">
                <img className="avatar" src={this.state.photo} alt="avatar" />
              </Link>
            </RenderDropdown>
          </ul>
        </div>
      </nav>
    );
  }
}

export default TestNavigation;
