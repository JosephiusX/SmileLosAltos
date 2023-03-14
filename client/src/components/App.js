import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import NavHeader from './NavHeader';
import Landing from './Landing';

const Forms = () => <h2>Forms</h2>
const FormNew = () => <h2>SurveyNew</h2>

class App extends Component {
  componentDidMount() { // Once component is visible, will be used to fetch current user. 
    this.props.fetchUser();
  }

  render() {
      return (
      <div className="container">
        <BrowserRouter>
          <div>
            <NavHeader />
            <Route path="/" exact component={Landing} />
            <Route path="/Forms" exact component={Forms} />
            <Route path="/Form/new" component={FormNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);// 1st arg is for mapstatetoprops(null), 2nd actions. Both assigned to App as props.(we can use fetchUser in App now.) 