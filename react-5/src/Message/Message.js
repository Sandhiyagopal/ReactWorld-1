import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {gmAction,gnAction} from '../redux/message.action'

let Message = () => {
    let dispatch = useDispatch()
    let message=useSelector((state)=>{
        return state.message;
    })
    let msg="Hello";
    let gmHandler=()=>{
        dispatch(gmAction());
    }
    let gnHandler=()=>{
        dispatch(gnAction());
    }
  return (
    <div>
        <pre>{JSON.stringify(message)}</pre>       
        <h2>Message:{message.message}</h2>
        <button className="btn btn-success mr-2" onClick={gmHandler}>GM</button>
        <button className="btn btn-warning mr-2" onClick={gnHandler}>GN</button>
    </div>
  )
}

export default Message