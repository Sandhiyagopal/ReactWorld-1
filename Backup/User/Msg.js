import React, { Component } from 'react'

class Msg extends Component {
    message = "Hello"
    gmHandle = () => {
        console.log(this.message)
        this.message = "Hello,GM Sandy"
        console.log(this.message)
        this.forceUpdate()
    }
    render() {
        return (
            <div>
                <h3>Wish Message: {this.message}</h3>
                <button onClick={this.gmHandle}>GM</button>

            </div >
        )
    }
}

export default Msg