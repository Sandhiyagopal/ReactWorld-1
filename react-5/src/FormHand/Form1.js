import React from "react";
class Form1 extends React.Component{
    state={
        email:"",
        password:""
    }
updateHandler=(event)=>{
    this.setState({[event.target.name]:event.target.value})
}
submitHandler=(event)=>{
    event.preventDefault();
}
render(){
    return(
        <>
        <form onSubmit={this.submitHandler}>
            <br />
            <label>Email....</label>
            <input type="text" placeholder="Email Id" onChange={this.updateHandler} name="email"/>
            <br /> <br />
            <label>Password...</label>
            <input type="text" placeholder="Please enter password" onChange={this.updateHandler} name="password"/>
            <br /><br />
            <input type="submit" value="Login..."/>
        </form><hr />
        <pre>{JSON.stringify(this.state)}</pre>
        </>
    )
}
}
export default Form1