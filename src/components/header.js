import React,{Component} from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router';

class Header extends Component {
  renderMenuItems(){
    if( this.props.isAuthenticated ){
      return [
        
          <li className="nav-item" key={1}>
            <Link to='/features' >Features</Link>
          </li>,
          <li className="nav-item" key={2}>
            <Link to='/signout' >Sign Out</Link>
          </li>
      ];
    } else {
      return [
       
          <li className="nav-item" key={1}>
            <Link to='/signin' >Sign In</Link>
          </li>,
          <li className="nav-item" key={2}>
            <Link to='/signup' >Sign Up</Link>
          </li>
        
      ];
    }
  }
  render(){
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          {this.renderMenuItems()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state){
  return { isAuthenticated: state.auth.authenticated}
}

export default connect(mapStateToProps, null)(Header)
