import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import * as action from './action';
import LoginForm from './components/LoginForm'


class MyContainer extends React.Component {

  submitForm(e) {
    e.preventDefault;
    console.log(this.state);
  };

  render() {
    return (
      <section>
        <Row>
          <Col sm={{size: 6, offset: 3}}>
            <h1>Log In</h1>
            <LoginForm
              login={(e) => { e.preventDefault; console.log(e); this.props.login(e.username, e.password); }}
            />
          </Col>
        </Row>
      </section>
    );
  }
}

export default connect(
  null,
  (dispatch) => ({
    login: (username, password) =>
      dispatch(action.login(username, password)),
  }),
)(MyContainer);
