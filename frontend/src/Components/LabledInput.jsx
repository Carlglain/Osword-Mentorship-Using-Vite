import React from 'react'

function LabledInput({id,name,type,placeholder, label}) {
  return (
    <div>
       <label htmlFor={id}>{label}</label> <br />
       <input id={id} name={name} type={type} placeholder={placeholder}/> <br />
    </div>
  )
}

export default LabledInput
