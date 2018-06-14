import React, { Component } from 'react';
import { Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'

class Dashboard extends Component {
  state = {
    id: '',
    books: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/users/generate_id')
    .then(resp => resp.json())
    .then(data =>
    this.setState({
      id: data.member_id
    }, () => {
      fetch("http://localhost:3000/api/v1/books/index")
      .then(resp => resp.json())
      .then(data =>
      this.setState({
        books: data
      }))
    }))
}

  render() {
    return (
      <div className="Dashboard">
          <h1>Dashboard page!</h1>
          <h2>Member Number: {this.state.id}</h2>
          <h2>Which book will you read today?</h2>
          <div>
            {this.state.books.map((book) => {return (<Link to='/book'><img src={book.image_url}></img></Link>)})}
          </div>
      </div>
    );
  }
}

export default Dashboard;
// http://localhost:3000/api/v1/books/index
