import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import RenderLogin from './RenderLogin';
import RenderDropdown from './RenderDropdown';
import { googleLogin, logout } from '../../services/authURLs';
// import { ReactComponent as TwitterLogin } from '../../assets/svg/btn_twitter_1.svg';
import GoogleLogin from '../../assets/svg/btn_google_1.png';
import Search from './NavSearch';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import { currentUser } from '../../services/currentUserURLs';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false, 
      name: '',
      photo:''

    };
    this.toggle = this.toggle.bind(this);

  }

  componentDidMount = async () => {
    const res = await axios.get(currentUser, {
      withCredentials: true
    });
    if(res.data) {
      this.setState({name: res.data.name, photo: res.data.photo});
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link to="/">CineView</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <RenderLogin>
                <a href={googleLogin}>
                  <img src={GoogleLogin} alt="Google Login" />
                </a>
              </RenderLogin>
              <RenderDropdown>
              <img className="avatar" src={this.state.photo} alt="avatar"/>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownItem>
                      <Link to="/myreviews">My Reviews</Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem><Link to="/premium">Become a Premium Reviewer!</Link></DropdownItem>
                    <a href={logout}>
                      <DropdownItem>Logout</DropdownItem>
                    </a>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </RenderDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
