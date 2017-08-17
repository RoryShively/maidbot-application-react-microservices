import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Badge } from 'reactstrap';

import * as action from './action';
import LoginForm from './components/LoginForm'


class LoginContainer extends Component {

  getLoginError() {
    if (this.props.userInfo.loginStatus === 'ERROR') {
      return <h4><Badge color="danger">{this.props.userInfo.loginError}</Badge></h4>
    }
    return null;
  }

  getLoadingScreen() {
    if (
      this.props.loading &&
      this.props.loading.status == 'LOADING_APP'
    ) {
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
              errMessage={this.getLoginError()}
              login={(e) => { this.props.loginUser(e.username, e.password); }}
            />
          </Col>
        </Row>
        {this.getLoadingScreen()}
      </section>
    );
  }
}

export default connect(
  ({ userInfo, loading }: Reducer) => ({ userInfo, loading }),
  (dispatch) => ({
    loginUser: (username, password) =>
      dispatch(action.login(username, password)),
  }),
)(LoginContainer);
