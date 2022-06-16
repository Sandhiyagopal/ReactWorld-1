import React, { Component } from 'react'

class Exam1 extends Component {
    state={
        cityBangalore:false,
        cityChennai:false,
        cityNewyork:false,
    };
    updatePrefferedLoc=(event)=>{
        this.setState({[event.target.name]:event.target.checked,})
    }
  render() {
    return (
      <div>
        <div className="container ">
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">
                <div className="col-md-2">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" 
                        onChange={this.updatePrefferedLoc} name="cityBangalore"/>
                        <label className="form-check-label">Bangalore</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" 
                        onChange={this.updatePrefferedLoc} name="cityChennai"/>
                        <label className="form-check-label">Chennai</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" 
                        onChange={this.updatePrefferedLoc} name="cityNewyork"/>
                        <label className="form-check-label">Newyork</label>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Exam1