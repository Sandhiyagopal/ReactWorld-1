import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
        <>
      <nav className="navbar navbar-dark bg-dark text-white navbar-expand-lg">
        <Link to="/home" className="navbar-brand">Currency Converter</Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-item"><Link to="/cc1" className="nav-link">Currency-Converter</Link></li>
            </ul>
        </div>
    </nav>
    </>
    )
  }
}

export default Navbar