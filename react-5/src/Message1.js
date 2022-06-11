import React, { Component } from 'react'

class Message1 extends Component {
    state={
        count:1
    }
    decrhandler=()=>{
        this.setState({count:this.state.count-1})
    }
    incrhandler=()=>{
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <div>
        <h3>Value={this.state.count}</h3>
        <button onClick={this.decrhandler}>DEC</button>
        <button onClick={this.incrhandler}>INC</button>
    </div>
    )
  }
}

export default Message1