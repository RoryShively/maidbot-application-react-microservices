import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { FormGroup, Input, FormFeedback, Label } from 'reactstrap';

class TextField extends PureComponent {
  render() {
    const {
      input,
      placeholder,
      type,
      displayName,
      disabled,
      hidden,
      meta: {
        touched,
        error,
      },
    } = this.props;

    const classes = classNames({
      success: touched && !error,
      danger: touched && error,
    });

    return (
      <FormGroup color={classes} hidden={hidden}>
        <Label>{displayName}</Label>
        <Input
          {...input}
          type={type}
          placeholder={placeholder}
          state={classes}
          disabled={disabled}
          hidden={hidden}
        />
        {touched && error && <FormFeedback style={{ fontSize: 12 }}>{error}</FormFeedback>}
      </FormGroup>
    );
  }
}

export default TextField;
