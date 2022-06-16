import React from "react";
class Exam extends React.Component{
    state={
        Login:false
    }
    loginHandler=()=>{
        this.setState({Login:true, message:"Welcome to Pro Stack"})
    }
    logoutHandler=()=>{
        this.setState({Login:false, message:"All the best"})
    }
    render(){
        return(
            <div>
                <div className="container mt-5">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Login Example</div>
                            <div className="card-body">
                                {!this.state.Login ?(
                                    <>
                                    <button className="btn btn-success mr-5" onClick={this.loginHandler}>Login</button>
                                    </>
                                ):(
                                   <>
                                   <button className="btn btn-danger" onClick={this.logoutHandler}>Logout</button>
                                    </> 
                                )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Exam