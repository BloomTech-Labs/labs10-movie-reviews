import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
import { login, logout } from '../../services/twitterURLs';
import { ReactComponent as TwitterLogin } from '../../assets/svg/btn_twitter_1.svg';

export default class Navigation extends Component {
  state = { isOpen: false };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link to="/">CineView</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <RenderLogin>
                <a href={login}>
                  <TwitterLogin />
                </a>
              </RenderLogin>
              <RenderDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownItem>
                      <Link to="/myreviews">My Reviews</Link>
                    </DropdownItem>
                    <DropdownItem>Saved Reviews</DropdownItem>
                    <DropdownItem>Option One</DropdownItem>
                    <DropdownItem>Option Two</DropdownItem>
                    <DropdownItem>Terms</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
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
