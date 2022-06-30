import React from 'react'
import { useState,useEffect } from 'react'
import Axios from 'axios'

const CC1 = () => {

    const [info,setInfo]=useState([])
    const [from,setFrom]=useState("usd")
    const [to,setTo]=useState("inr")
    const[option,setOption]=useState([])
    const [input,setInput]=useState(0)
    const [output,setOutput]=useState(0)

useEffect(()=>{
    Axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
         .then((response)=>{
            setInfo(response.data[from])
         })
},[from])

useEffect(()=>{
    setOption(Object.keys(info))
    convert();
},[info])

function convert(){
    var rate = info[to];
    setOutput(input * rate);
}

  return (
    <div className="app">
        <div className="container">
           <div className="row">
            <div className="col-md-8 mx-auto pt-5">
                <div className="card">
                    <div className="card-header bg-success">
                    <h4>Currency Converter</h4>
                    </div>
                    <div className="card-body">
                        <div className="mb-4">
                        <h3>Amount:</h3>
                        <input type="text" placeholder="Enter the amount"
                        onChange={(e)=>setInput(e.target.value)}/>
                    </div>
                    <div className="mb-4">
                        <label>From: </label>
                        <select option={option} onChange={(e)=>{setFrom(e.value)}}>value={from}</select>
                    </div>
                    <div className="mb-3">
                        <label className="text-bold">To:</label>
                        <select option={option} 
                    onChange={(e) =>{setTo(e.value)}}>usd</select>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary" onClick={()=>{convert()}}>Convert</button>
                    </div>
                    <div>
                        <h4>Converted Amount:</h4>
                        <p>{input+" "+from+" = "+output.toFixed(2) + " " + to}</p>
                    </div>
                    </div>
                    <div className="card-fooder bg-success">
                        <h5>...</h5>
                    </div>
                </div>
            </div>
           </div>  
        </div>
    </div>
  )
}
export default CC1
