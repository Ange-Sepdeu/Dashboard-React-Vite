import React from 'react'
import "../../css/inputs.css"

function MessageInput({name, type, value, onChangeHandler, sendHandler, placeholder}) {
  return (
    <>
        <input 
          className='message-input'
          type={type} 
          name={name} 
          value={value}
          onKeyPress={sendHandler}
          onChange={onChangeHandler}
          placeholder={placeholder}  
          />
    </>
  )
}

export default MessageInput