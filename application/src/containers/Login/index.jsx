import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

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
              login={(e) => { e.preventDefault; console.log(e); }}
            />
          </Col>
        </Row>
      </section>
    );
  }
}

export default connect()(MyContainer);
