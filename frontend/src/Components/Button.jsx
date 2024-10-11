import React from 'react'

function Button({id,content,disabled,dirty}) {
  return (
    <div>
       <button type='submit' disabled={!disabled || !dirty}  id={id}>{content}</button>
    </div>
  )
}

export default Button
