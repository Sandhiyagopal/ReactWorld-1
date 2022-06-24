import React, { Component } from 'react'

class Psa extends Component {
    constructor(props){
        super(props);
        this.state={
            Login:false
        };
    }
  render() {
    let message;
    if(this.state.Login){
        message=<div>Welcome to PSA</div>
    } else{
        message=<div>Welcome to Bangalore</div>
    }
    return (
      <div>{message}</div>
    )
  }
}

export default Psa