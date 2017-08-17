import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import ReactChatView from 'react-chatview';
import cx from 'classnames';

import * as action from './action';
import MessageForm from './components/MessageForm'


class HomeContainer extends Component {

  componentDidMount() {
    this.props.fetchMessages(this.props.userInfo.token);
  }

  loadMoreHistory () {
    return new Promise((resolve, reject) => {
      let more = _.range(20).map(v=>'yo');
      this.setState({ messages: this.state.messages.concat(more)});
      resolve();
    });
  }

  render() {
    const { messages, userInfo } = this.props;
    const getMessages = () => {
      if (messages.data) {
        return messages.data.map((message) => (
          <div
            className={cx('message', {'user-message': message.user === userInfo.data.username })}>
            <span className="name">{message.user}</span>
            <span className="content">{message.message}</span>
          </div>
        ));
      }
    };

    return (
      <section className="message-page">
        <Row>
          <Col sm={12} md={{size: 5, offset: 0}} lg={{size: 4, offset: 1}}>
            <ReactChatView
              className="messages"
              flipped={true}
              scrollLoadThreshold={50}
              onInfiniteLoad={this.loadMoreHistory.bind(this)}
            >
            &nbsp;
            {getMessages()}
            </ReactChatView>
          </Col>
          <Col sm={12} md={{size: 5, offset: 2}} lg={{size: 4, offset: 2}}>
            <h1><span className="thin">message</span>room</h1>
            <MessageForm
              postMessage={(e) => { this.props.postMessage({ user:this.props.userInfo.data.username, message: e.message }, this.props.userInfo.token); }}
            />
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
    postMessage: (data, token) =>
      dispatch(action.postMessage(data, token)),
  }),
)(HomeContainer);
