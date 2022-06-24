import React from "react";

class Form3 extends React.Component{
    state={
        email:"",
        passwoird:""
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
        <div className="container mt-3">
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header bg-success text-white">Form...</div>
                        <div className="card-body">
                            <form onSubmit={this.submitHandler}>
                                <label>Email..</label>
                                <input type="text" placeholder="Email Id" 
                                onChange={this.updateHandler} name="email"/>
                                <br />
                                <label>Password...</label>
                                <input type="text" placeholder="Please Enter Password"
                                onChange={this.updateHandler} name="password"/>
                                <br />
                                <input type="submit" value="Login"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
}
export default Form3