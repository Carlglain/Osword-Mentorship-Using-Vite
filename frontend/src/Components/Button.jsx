import React from 'react'

function Button({id,content}) {
  return (
    <div>
       <button id={id}>{content}</button>
    </div>
  )
}

export default Button
