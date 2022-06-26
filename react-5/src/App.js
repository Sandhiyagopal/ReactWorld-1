import React, { Component } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Contactapp from './Contact/Contactapp'
import Navbar from './Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/contactapp" element={<Contactapp />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App