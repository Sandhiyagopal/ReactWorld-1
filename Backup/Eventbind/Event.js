import React from 'react';

class Event extends React.Component{
    state={
        salary:40000
    }
    eventHandler=(hike)=>{
        this.setState({salary:this.state.salary+hike})
    }
    render(){
        return <>
        <h4>Sandy Salary:{this.state.salary}</h4>
        <button onClick={this.eventHandler.bind(this,4000)}>10%</button>
        <button onClick={this.eventHandler.bind(this,8000)}>20%</button>
        <button onClick={this.eventHandler.bind(this,20000)}>50%</button>
        <button onClick={this.eventHandler.bind(this,40000)}>100%</button>
        </>
    }

}
export default Event