import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';

import RenderLogin from './RenderLogin';
import RenderDropdown from './RenderDropdown';
import { login, logout } from '../../services/twitterURLs';
import { ReactComponent as TwitterLogin } from '../../assets/svg/btn_twitter_1.svg';
import Search from './NavSearch';


export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
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
              <Search 
                  searchHandler={this.props.searchHandler}
                  searchCriteria={this.props.searchCriteria}
                  handleChange={this.props.handleChange}
                />
              <RenderLogin>
                <Link to={login}>
                  <TwitterLogin />
                </Link>
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
                  <DropdownItem divider />
                  <DropdownItem>
                    Become a Premium Reviewer!
                  </DropdownItem>
                  <Link to={logout}>
                      <DropdownItem>Logout</DropdownItem>
                  </Link>
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

