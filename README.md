<h2 align="center">Concert World</h2>

![React](https://img.shields.io/badge/react.js-16.3.2-brightgreen.svg)
![Rails](https://img.shields.io/badge/Rails-5.1.6-red.svg)


## Overview
An interactive story book for kids. Written and illustrated by Frank Harvey McManus.

<p align="center"><img width=95% src="https://drive.google.com/uc?id=1aZ-0_unZWVAa8t0RRxzFpXn4CxzPzcmt"></p>

## Fetch request
This app populates state with JSON data from the Rails API through this fetch request in App.js.

```javascript
componentDidMount(){
  fetch('http://localhost:3000/api/v1/pages/index')
    .then(resp => resp.json())
    .then(data =>
      this.setState({
        pages: data.filter((page) => page.book_id === 1),
        currentPage: data.find((page) => page.book_id === 1)
      }))
}
```
<br>

<p align="center"><img width=95% src="https://drive.google.com/uc?id=1nF55B3ivr018UvrpfUd56pdb0YK0I4Fb"></p>

## Install
This app requires React. And Ruby on Rails.

<br>

https://www.npmjs.com/package/react  

https://www.npmjs.com/package/react-dom    

https://guides.rubyonrails.org/getting_started.html  

<br>

After installing dependencies, run a Concert World local server. From the app directory...
```javascript
rails s  //for the backend local server
npm start //for the fronend local server, type y and hit enter to use a different port from the backend
```

<br>

## Enter
Click the moth and flame logo on the home page to enter the site.

<br>

## Profile Page
The profile page is automatically populated with a randomly generated Member ID and profile picture to ensure young users' online privacy, safety, and anonymity.
<p align="center"><img width=95% src="https://drive.google.com/uc?id=1CAIPup4cAsDLw5eL2Gup3fU8gc6SegQX"></p>
Pick a book by clicking one of the book icons in the library of the user profile card.
<br>

## The Book
Flip through the book using the forward(right) and back(left) arrows
<p align="center"><img width=95% src="https://drive.google.com/uc?id=1IbG5G1iXDcnwqeVHxbN43yLuhIh3r-Z6"></p>

<br>

## Acknowledgements  

All illustrations and writing belong to Frank Harvey McManus

<br>

## License
BSD-3-Clause

<br>
