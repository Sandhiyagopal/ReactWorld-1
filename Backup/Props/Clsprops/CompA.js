import CompB from './CompB'

let CompA =(props) =>{
    let ename="Sandy"
    let salary=40000
 return <>
 <h2>Component A</h2>
 <h2>{props.two}</h2>
 
 <hr />
 <CompB one={"GM"} name={ename} salary={salary}/>
 </>

}
export default CompA