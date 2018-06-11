import React, {Component} from 'react';
import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import Canvas from './components/Canvas'
import Dashboard from './components/Dashboard'
import moth from './mothflamelarge.png'


class App extends Component {

  state = {
    register: false,
    login: false
  }

  handleClick = (e) => {
      if (e.target.id === 'login'){
        this.setState({
        login: !this.state.login
        })
    } else {
        this.setState({
        register: !this.state.register
        })
    }
  }

  render() {
    if(!this.state.register) {
      return (
        <div className="App">
          <div className="mothy">
            <img src={moth} className="moth-logo"/>
          </div>
          // this button needs to route to the login page
            <button id='register' onClick={this.handleClick}>Register</button>
              <br></br>
            <button id='login' onClick={this.handleClick}>Login</button>
        </div>
      )
    } else if (this.state.register){
      return (
        <div>
          <Register />
        </div>
      )
    }
  }
}

export default App;
