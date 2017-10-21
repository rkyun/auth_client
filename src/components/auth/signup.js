import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {


  handleSubmitForm({email, password, confirmPassword}){
    console.log(email, password, confirmPassword);
  }
  renderField(field){
    const { meta: { touched, error }} = field;
    return (
      <fieldset className="form-group">
        <label>{field.label}</label>
        <input 
          {...field.input} 
          type={field.type}
          className="form-control"
        />
        {touched && error && <span className="error">{error}</span>}
      </fieldset>
    );
  }
  
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Field
          name="email"
          label="Email"
          component={this.renderField}
          type="text"
        />
        <Field
          name="password"
          label="Password"
          component={this.renderField}
          type="password"
        />
         <Field
          name="confirmPassword"
          label="Confirm password"
          component={this.renderField}
          type="password"
        />
        <button type="submit" className="btn btn-primary">Sign up</button>
      </form>
    );
  }
}


function validate(values) {
  const errors = {};
  const { email, password, confirmPassword } = values;
  if(!email){
    errors.email = 'Email is required';
  }
   if(!password){
    errors.password = 'Password is required';
  }
  if(!confirmPassword){
    errors.confirmPassword = 'Confirm password!';
  }

  if(confirmPassword && password && password !== confirmPassword){
    errors.confirmPassword = 'Passwords don`t match';
  }
  
  return errors;
}


export default reduxForm({
  form: 'signup',
  validate
})(Signup);