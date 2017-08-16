import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Row, Col, Button } from 'reactstrap';

import TextField from '../../../../components/TextField';

const MessageForm = props => {
  const { handleSubmit, pristine, reset, submitting, postMessage } = props
  return (
    <form onSubmit={handleSubmit(postMessage)}>
      <Row>
        <Col sm="12">
          <Field
            name="message"
            component={TextField}
            type="text"
            placeholder="Start typing..."
          />
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Button
            color="primary"
            type="submit" disabled={pristine || submitting}
          >
            Send
          </Button>
        </Col>
      </Row>
    </form>
  )
}

export default reduxForm({
  form: 'message' // a unique identifier for this form
})(MessageForm)
