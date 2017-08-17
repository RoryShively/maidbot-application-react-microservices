import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Row, Col, Button } from 'reactstrap';

import TextField from '../../../../components/TextField';

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting, login , errMessage} = props
  return (
    <form onSubmit={handleSubmit(login)}>
      <Row>
        <Col sm="12">
          <Field
            name="username"
            component={TextField}
            type="text"
            placeholder="Username"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Field
            name="password"
            component={TextField}
            type="password"
            placeholder="Password"
          />
        </Col>
      </Row>
      {errMessage}
      <Row>
        <Col sm="12">
          <Button
            color="primary"
            type="submit" disabled={pristine || submitting}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </form>
  )
}

export default reduxForm({
  form: 'login' // a unique identifier for this form
})(LoginForm)
