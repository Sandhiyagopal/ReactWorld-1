import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Navbar1 extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark text-white navbar-expand-lg">
            <Link to="/home" className="navbar-brand">Router</Link>
            <div className="ml-auto ">
                <ul className="navbar-nav">
                    <li className="nav-item ml-3"><Link to="/hook1" className="nav-link">Hook1</Link></li>
                    <li className="nav-item ml-3"><Link to="/users" className="nav-link">Users</Link></li>
                    <li className="nav-item ml-3"><Link to="/home" className="nav-link">Home</Link></li>
                    <li className="nav-item ml-3"><Link to="/about" className="nav-link">About</Link></li>
                    <li className="nav-item ml-3"><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar1