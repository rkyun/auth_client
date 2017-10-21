import React, { Component } from 'react';

import * as actions from '../actions';

import { connect } from 'react-redux';

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }
  render() {
    return (
      <div>{this.props.messege}</div>
    );
  }
}
function mapStateToProps(state) {
  return { messege: state.auth.messege };
}
export default connect(mapStateToProps, actions)(Feature)

