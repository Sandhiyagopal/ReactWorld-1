import React, { Component } from 'react'

class Message2 extends Component {
    a=10
    b=30
    msg="prostack"
    state={
      msg2:"psa"
    }
    emp={id:101, name:"sandy" , salary:40000}

    gmhandler=() =>{
      console.log("eventhandler")
      this.msg="Hello,Prostack"
      this.forceUpdate()
    }
    gnhandler=()=>{
      this.setState({msg2:"Hello,psa"})

    }
  render() {
    return (
      <div>
          <h3>Message: {this.msg}</h3>
          <button onClick={this.gmhandler}>Btn</button>
          <h3>Message:{this.state.msg2}</h3>
          <button onClick={this.gnhandler}>Btn2</button>

          <h4>value: {this.a + this.b}</h4>
          <h5>employee: {this.emp.id} and {this.emp.name} and {this.emp.salary} </h5>
          
      </div>

    )
  }
}

export default Message2