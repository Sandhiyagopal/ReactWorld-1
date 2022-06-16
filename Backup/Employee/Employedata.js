import React from "react";
import { Empdata } from "./Empdata";
class Employedata extends React.Component{
    render(){
        return (
            <div className="container" mt-5>
                <div className="row">
                    <div className="col-md-6">
                        <table className="table table-hover">
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th>Id</th> 
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Empdata.map((emp,i)=>{
                                        return <tr>
                                            <td>{emp.id}</td>
                                            <td>{emp.name}</td>
                                            <td>{emp.email}</td>
                                        </tr>
                                    })
                                } 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default Employedata;