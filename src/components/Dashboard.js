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
      <div className="card-page">
        <div className="card">
          <div className="image">
            <img className="profile-pic" src='https://drive.google.com/uc?id=1dkuSdW5Pl7Wp5cADpv3e3kCKZ2j7BhOa'></img>
          </div>
          <div className="black-box">

          <h2>Member Number: {this.state.id}</h2>
          </div>
          <p className="since">Member since 2018</p>
          <p className="library">Choose From the Library</p>
          <div className="books">
            {this.state.books.map((book) => {
              return (
                <div className='booklist'>
                  <p>{book.title}</p>
                  <Link to='/book'><img className="book"src={book.image_url}></img></Link>
                </div>)}
                )
            }
          </div>
        </div>

      </div>
    );
  }
}

export default Dashboard;
