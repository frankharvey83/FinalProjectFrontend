import React, { Component } from 'react';
import { Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'
import Dashboard from './Dashboard.js'

class Register extends Component {

  render(){
    return (
      <div className="Register">
          <h1>This will be a registration page</h1>
          <button>Register</button>

      </div>
    );
  }
}
export default Register;
