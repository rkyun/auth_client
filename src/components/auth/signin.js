import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Signin extends Component {

  renderField(field){
    const { meta: { touched, error } } = field;
    const className = `form-group`;
    return (
      <fieldset className={className}>
        <label>{field.label}</label>
        <input
         className="form-control"
         type={field.type}
         {...field.input}
         />
      </fieldset>
    )
  }
  handleFormSubmit({email, password}){
    console.log(email, password);
  }

  render() {
    const { handleSubmit, fields: {email, password }} = this.props;
    return (
    <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      
        <Field
         label="Email"
         name="email"
         type="text"
         component={this.renderField}
         />
      
        <Field
         label="Password"
         name="password"
         type="password"
         component={this.renderField}
         />
      <button className="btn btn-primary" action="submit">Sign In</button>
    </form>
    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin)