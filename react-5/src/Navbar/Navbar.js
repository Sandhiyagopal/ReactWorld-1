import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a href="/home" className="navbar-brand">React Component</a>
        <div className="ml-auto">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="feature">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="price">Pricing</a>
      </li>
    </ul>
  </div>
      </nav>
    )
  }
}

export default Navbar