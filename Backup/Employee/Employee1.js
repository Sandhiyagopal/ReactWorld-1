import React from "react";
import { Empdata } from "./Empdata";
class Employee1 extends React.Component{
    render(){
        return(
            <div>
                <h1>Employee1</h1>
                <pre>{JSON.stringify(Empdata)}</pre>
            </div>
        )
    }
}
export default Employee1