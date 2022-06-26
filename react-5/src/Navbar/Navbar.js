import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
        <>
        <nav className="navbar navbar-dark bg-primary text-white navbar-expand-lg">
            <Link to="/home" className="navbar-brand">Router</Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-item"><Link to="/contactapp" className="nav-link">contactapp</Link></li>
            </ul>
        </div>
      </nav>
      </>
    )
  }
}

export default Navbar