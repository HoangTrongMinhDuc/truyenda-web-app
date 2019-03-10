import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
            <ul>
                <li><a href="#" id="logo">LOGO</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
      </div>
    )
  }
}
