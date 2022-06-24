import React, { Component } from 'react'
import Navbar1 from './Navbar/Navbar1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Nav/Home'
import About from './Nav/About'
import Contact from './Nav/Contact'
import Users from './User/Users'
import Hook1 from './Hook/Hook1'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar1 />
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/hook1" element={<Hook1 />} />?
        </Routes>
        </Router>
        <h2>App data</h2>
      </div>
    )
  }
}

export default App