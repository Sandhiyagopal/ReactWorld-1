import React from "react";

class Form extends React.Component{
    state={
        email:"",
        password:""
    }
    emailHandler=(event)=>{
        this.setState({email:event.target.value})
    }
    passwordHandler=(event)=>{
        this.setState({password:event.target.value})
    }
    render(){
        return(
            <>
            <form>
                <label>Email: </label>
                <input type="text" placeholder="Email Id" onChange={this.emailHandler} />
                <br />
                <label>Password: </label>
                <input type="text" placeholder="Please Enter password Id" onChange={this.passwordHandler} />
                <br />
                <input type="submit" value="Login" />
            </form>
            <hr />
            <pre>{JSON.stringify(this.state)}</pre>
            </>
        )
    }
}
export default Form