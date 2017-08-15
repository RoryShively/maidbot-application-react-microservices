import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import { Container, Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

import * as action from './containers/Login/action';
import HomeContainer from './containers/Home';
import LoginContainer from './containers/Login';
import NoMatch from './containers/NoMatch';


class Root extends Component {

  render() {
    const userInfo = this.props.userInfo;

    return (
      <HashRouter>
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
                  <NavLink
                    tag={Link}
                    to='/login/'
                    onClick={() => this.props.logoutUser()}
                  >
                    {userInfo.data ? 'Logout' : 'Login'}
                  </NavLink>
                </NavItem>
              </Nav>
            </Navbar>
          </header>
          <Container fluid style={{ padding: 15 }}>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route
                path="/login/"
                render={() => (
                  userInfo.data ? (
                    <Redirect to="/" />
                  ) : (
                    <LoginContainer />
                  )
                )} />
              <Route component={NoMatch}/>
            </Switch>
          </Container>
        </div>
      </HashRouter>
    )
  }
}

export default connect(
  ({ userInfo }) => ({ userInfo }),
  (dispatch) => ({
    logoutUser: () =>
      dispatch(action.logout()),
  }),
)(Root);
