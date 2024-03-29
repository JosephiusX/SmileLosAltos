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
          <a href="/auth/google" className={styles.button}>Request Appointment</a>
        );
      default:
        return <a href="/api/logout" className={styles.button}>Logout</a>
    }
  }

  render() {
    return (
      <div className={styles.container} >

        <div className={styles.navigation}>
            <input type="checkbox" className={styles.navigation__checkbox} id="navi-toggle"/>
            <label for="navi-toggle" className={styles.navigation__button}>
                <span className={styles.navigation__icon}>&nbsp;</span>
            </label>
            <div className={styles.navigation__background}>&nbsp;</div>
            <nav className={styles.navigation__nav}>
                <ul className={styles.navigation__list}>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}><span>01</span>About Natous</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}><span>02</span>Your benfits</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}><span>03</span>Popular tours</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}><span>04</span>Stories</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}><span>05</span>Book now</a></li>
                </ul>
            </nav>
        </div>

        <div className={styles.banner}>
          <Link
            to={this.props.auth ? '/Forms' : '/'} // if auth user > /surveys(dashboard), else > Landing page
            className={styles.upper_left_link}>
            <div className={styles.sl_pt1}>Smile</div> <br/> <div className={styles.sl_pt2}>Los Altos</div>
          </Link>

            <ul>
              <li>
                {this.renderContent()}
              </li>
            </ul>
            <h1 className={styles.title_main}>
              Los Altos Dental Care
            </h1>
            <p className={styles.title_secondary}>
              Treatment that can make all the difference in the world
            </p>
        </div>

      </div>
    )
  }
}

function mapStateToProps({ auth }) { // destructuring the auth property from statre
  return { auth };
}

export default connect(mapStateToProps)(NavHeader);