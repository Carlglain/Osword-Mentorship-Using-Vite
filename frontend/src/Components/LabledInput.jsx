import React from 'react'

function LabledInput({id,name,type,placeholder, label, onChange ,value}) {
  return (
    <div>
       <label htmlFor={id}>{label}</label> <br />
       <input onChange={onChange} value={value} id={id} name={name} type={type} placeholder={placeholder}/> <br />
    </div>
  )
}

export default LabledInput
