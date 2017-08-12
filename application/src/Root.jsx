import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Container, Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

import MyContainer from './containers/Home';
import LoginContainer from './containers/Login';


export default class Root extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar color="faded" light toggleable>
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand tag={Link} to="/">Maidbot</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to='/'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/login'>Login</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </header>
        <Container fluid style={{ padding: 15 }}>
          <Switch style={{ padding: 15 }}>
            <Route path="/" exact component={MyContainer} />
            <Route path="/login" component={LoginContainer} />
          </Switch>
        </Container>
      </div>
    )
  }
}
