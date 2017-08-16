import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import * as action from './action';
import LoginForm from './components/LoginForm'


class LoginContainer extends Component {

  getLoginError() {
    if (this.props.userInfo.loginStatus === 'ERROR') {
      return <strong>{this.props.userInfo.loginError}</strong>
    }
    return null;
  }

  getLoadingScreen() {
    if (
      this.props.userInfo &&
      this.props.userInfo.loginStatus &&
      this.props.userInfo.loginStatus === 'PENDING') {
      return (
        <div className="loading-screen">
          <h3 className="loading-title">
            <span className="thin">Loading</span> Application...
          </h3>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <section>
        <Row>
          <Col sm={{size: 6, offset: 3}} className="login-component">
            <h1><span className="thin">Log</span>In</h1>
            <LoginForm
              login={(e) => { this.props.loginUser(e.username, e.password); }}
            />
            {this.getLoginError()}
          </Col>
        </Row>
        {this.getLoadingScreen()}
      </section>
    );
  }
}

export default connect(
  ({ userInfo }: Reducer) => ({ userInfo }),
  (dispatch) => ({
    loginUser: (username, password) =>
      dispatch(action.login(username, password)),
  }),
)(LoginContainer);
