import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

import { connect } from 'react-redux';



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
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if(this.props.errorMessage){
      return(
        <div className="alert alert-danger">
          <strong>Upss!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }
  render() {
    const { handleSubmit } = this.props;
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
         {this.renderAlert()}
      <button className="btn btn-primary" action="submit">Sign In</button>
    </form>
    );
  }
}


function mapStateToProps(state){
  return { errorMessage: state.auth.error }
}

export default reduxForm({
  form: 'signin'
})(
  connect(mapStateToProps, actions)(Signin)
);