import React, { Component } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Message from './Message/Message'
import Navbar from './Navbar/Navbar'
import {store} from './redux/store'
import {Provider} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store} >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/message" element={<Message />} />
          </Routes>
        </Router>
        </Provider>
      </div>
    )
  }
}

export default App