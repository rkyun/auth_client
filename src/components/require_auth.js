 import React, { Component } from 'react';

 import { connect } from 'react-redux';

 

 export default function(ComposedComponent){
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if(!this.props.isAuthenticated){
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.isAuthenticated){
        this.context.router.push('/');
      }
    }

    render() {
      console.log(this.context);
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { isAuthenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
 }

 