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
    return null
  }

  render() {
    return (
      <section>
        <Row>
          <Col sm={{size: 6, offset: 3}}>
            <h1>Log In</h1>
            <LoginForm
              login={(e) => { this.props.loginUser(e.username, e.password); }}
            />
            {this.getLoginError()}
          </Col>
        </Row>
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
