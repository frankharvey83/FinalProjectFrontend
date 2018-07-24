import React, { Component } from 'react';
import moth from '../mothflamelarge.png'
import { Route, Link, NavLink, Switch} from 'react-router-dom'
import Dashboard from './Dashboard'

class Home extends Component {
  render() {
    return (
      <div className="Home">
          <header className="App-header">
            <p className='disclaimer'>Click below to register. You will recieve a random member number since you are a kid and all. To keep you safe, we do not want to store any data or sensitive details about you.</p>
            <Link to='/dashboard'><img src={moth} className="App-logo" alt="logo"/></Link>
          </header>

          <Route path='/dashboard' component={ Dashboard }></Route>

      </div>
    );
  }
}

export default Home;
