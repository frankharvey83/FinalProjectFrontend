import React, { Component } from 'react';
import moth from '../mothflamelarge.png'
import { Route, Link, NavLink, Switch} from 'react-router-dom'
import Register from './Register'

class Home extends Component {
  render() {
    return (
      <div className="Home">
          <header className="App-header">
            <img src={moth} className="App-logo" alt="logo"/>
              <ul className="register">
                  <NavLink activeClassName="active" to='/register'>Register</NavLink>
              </ul>
          </header>

          <Route path='/register' component={ Register }></Route>
          
      </div>
    );
  }
}

export default Home;
