import React from "react";
class ListRender2 extends React.Component{
names=["Sandy", "Shawn","Sandhiya"]
nameList=this.names.map((name)=><h4>{name}</h4>);
    render(){
        return(
            <div>{this.nameList}</div>
        )
    }
}
export default ListRender2