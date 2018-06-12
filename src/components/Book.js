import React, { Component } from 'react';
import { Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'
import Nav from './Nav'
class Book extends Component {

  state = {
    pages: [],
    currentPage: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/pages/index')
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          pages: data.filter((page) => page.book_id === 1),
          currentPage: data.find((page) => page.book_id === 1)
        }))
  }

  handleClick = (e) => {
    e.preventDefault()
    if(e.target.id === 'next'){
      this.setState({
        currentPage: this.state.pages.find((page) => page.id === this.state.currentPage.id + 1)
      })
    } else if (e.target.id === 'previous') {
      this.setState({
        currentPage: this.state.pages.find((page) => page.id === this.state.currentPage.id - 1)
      })
    }
  }

  render(){
    console.log()
    return (
      <React.Fragment>
      <div className="Book">

        <div className="left-half">
          <img src={this.state.currentPage.image_url}></img>
        </div>
        <div className="right-half">
          <p>{this.state.currentPage.text}</p>
        </div>

      </div>

      <div className="nav">
        <div className='left-arrow'>
          <img className='flip-vertical' src='https://drive.google.com/uc?id=1ZjfBpGS93Bjdcc-Ooi23lNQ59CVswWcH' id='previous' onClick={this.handleClick}></img>
        </div>
        <div className='right-arrow'>
          <img src='https://drive.google.com/uc?id=1DP1EadpaxjGNQWEMsOpgRTsGVluR1VpX' id='next' onClick={this.handleClick}></img>
        </div>
      </div>

      </React.Fragment>
    );
  }
}
export default Book;
