import React from 'react'
import CompA from './CompA'

const CompC = (props) => {
    let a=50
  return (
    <div>
        <h4>Component C</h4>
        <CompA two={a} />
    </div>
  )
}

export default CompC
