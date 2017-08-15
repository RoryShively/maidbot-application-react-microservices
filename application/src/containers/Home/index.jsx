import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import * as action from './action';


class HomeContainer extends Component {

  componentDidMount() {
    this.props.fetchMessages(this.props.userInfo.token);
  }

  render() {
    return (
      <section>
        <Row>
          <Col sm={12}>
            <h1>Home</h1>
            <div>
              <p>Messages</p>
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

export default connect(
  ({ messages, userInfo }) => ({ messages, userInfo }),
  (dispatch) => ({
    fetchMessages: (token) =>
      dispatch(action.fetchMessages(token)),
  }),
)(HomeContainer);
