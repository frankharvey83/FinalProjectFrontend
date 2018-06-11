import React, { Component } from 'react';

class Dashboard extends Component {


componentDidMount(){
  fetch('http://localhost:3000/api/v1/users/index')
  .then(x => x.json())
  .then((users) => {
console.log(users)
})
}

  render() {
    return (
      <div className="Dashboard">
          <h1></h1>
      </div>
    );
  }
}

export default Dashboard;
