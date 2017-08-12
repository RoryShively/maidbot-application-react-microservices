import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

const getMessage = (token) => {
  axios.get('http://localhost:5002', {
    headers: {
      Authorization: token,
    },
  })
    .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        console.log('error',err);
      });
}

axios.get('http://localhost:5001')
  .then((res) => {
      const token = res.data;
      getMessage(token);
      console.log('res', res);
    })
    .catch((err) => {
      console.log('error',err);
    });


class MyContainer extends React.Component {

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

export default connect()(MyContainer);
