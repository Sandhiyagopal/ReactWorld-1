import React from 'react';
class CompB extends React.Component{
render(){
    return <>
    <h3>Component B</h3>
    <pre>{JSON.stringify(this.props)}</pre>
    <h5>Employee Name: {this.props.name}</h5>
    <h5>Employee Salary: {this.props.salary}</h5>
    </>
}

}
export default CompB