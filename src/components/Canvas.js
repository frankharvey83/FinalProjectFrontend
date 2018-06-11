import React, { Component } from 'react';
import Nav from './Nav'

//here will have state of current page, previous page, next page, book
class Canvas extends Component {
  render() {
    return (
      <div className="Canvas">
          <h1>This will be a Canvas page</h1>
          <Nav />
      </div>
    );
  }
}

export default Canvas;
