import React from "react";

class Person extends React.Component{
    render(){
        const {person}=this.props;
        return(
            <div>
                <h5>I am {person.name} and My Loc {person.loc}</h5>
            </div>
        )
    }
}
export default Person