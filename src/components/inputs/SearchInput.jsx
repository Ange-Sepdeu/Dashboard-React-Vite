import React from 'react'
import "../../css/inputs.css"

function SearchInput({name, type, value, placeholder, onChange}) {
  return (
    <>
        <input 
        className='search-input'
        type={type} 
        name={name} 
        onChange={onChange}
        placeholder={placeholder}  />
        <br />
    </>
  )
}

export default SearchInput