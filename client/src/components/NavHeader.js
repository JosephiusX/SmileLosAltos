import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './styles/NavHeader.module.css';

class NavHeader extends Component { // Using Class component for orginization. 
  renderContent() { // Render correct content based on users state
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <li><a href="/auth/google">Login With Google</a></li>
        );
      default:
        return <li><a href="/api/logout">Logout</a></li>  
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'} // if auth user > /surveys(dashboard), else > Landing page
            className="left brand-logo">
            Smile Los Altos
          </Link>
            <ul>
              <li className="right">
                {this.renderContent()}
              </li>
            </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) { // destructuring the auth property from statre
  return { auth };
}

export default connect(mapStateToProps)(NavHeader);