import React from "react";
import Person from './Person'

class ListRender3 extends React.Component{

    persons=[{id:1, name:"Sandy", email:"greet@email.com",loc:"Hyd"},
    {id:2, name:"Shawn", email:"greet@email.com",loc:"Blr"},
    {id:3, name:"Sandhiya", email:"greet@email.com",loc:"Chennai"},
    {id:4, name:"Sound", email:"greet@email.com",loc:"Sal"}];

    personList=this.persons.map((person)=><Person person={person} />)

render(){
    return (
        <div>{this.personList}</div>
    )
}
}
export default ListRender3