import React, {useState} from "react";

const Hook1 = () => {
    let message="hello"
    let [variable, setVariable] = useState("Hello")
    let gmHandler=()=>{
        setVariable("Hello,Sandy")
    }

return(
<div>
    <h2>Wish message:{variable}</h2>
    <h4>message:{message}</h4>
    <button onClick={gmHandler}>GM</button>
    <button onClick={()=>{
        setVariable("Hello, Arun")
    }}>GN</button>
</div>
)
}
export default Hook1