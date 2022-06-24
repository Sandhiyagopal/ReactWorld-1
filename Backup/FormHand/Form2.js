import React from "react";
class Form2 extends React.Component{
constructor(props){
    super(props);
    this.state={
        maxlimit:100,
        count:100
    }
}
updateCount=(event)=>{
    this.setState({count:this.state.maxlimit-event.target.value.length})
}
render(){
    return(
        <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                        <p className="h4">SMS Application</p>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <textarea onChange={this.updateCount} maxLength={this.state.maxlimit}
                                     rows="4" className="form-control" placeholder="Your Message Here" />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <p className="h4">Characters Remaining:
                            <span className="font-weight-bold">{this.state.count}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
}
export default Form2