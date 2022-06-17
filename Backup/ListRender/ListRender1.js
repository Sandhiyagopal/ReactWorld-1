import React from "react";
class ListRender1 extends React.Component{
    names=["narasimha", "gautham", "sandy"]
render(){
    return(
        <div>
            {
                this.names.map((name)=>(
                    <h5>{name}</h5>
                ))
            }
        </div>
    );
}

}
export default ListRender1