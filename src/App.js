import React, {Component} from 'react';
import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import Canvas from './components/Canvas'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Book from './components/Book'
import moth from './mothflamelarge.png'
import { Route, Link, NavLink, Switch, withRouter} from 'react-router-dom'

class App extends Component {

  render() {

      return (
        <div className="App">
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path='/register' component={ Register }></Route>
            <Route path='/dashboard' component={ Dashboard }></Route>
            <Route path='/login' component={ Login }></Route>
            <Route path='/canvas' component={ Dashboard }></Route>
            <Route path='/book' component={ Book }></Route>
          </Switch>
        </div>
      )

  }
}

export default withRouter(App);
