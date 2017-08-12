import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Row, Col, Button } from 'reactstrap';

import TextField from '../TextField';

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting, login } = props
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
  form: 'simple' // a unique identifier for this form
})(SimpleForm)
