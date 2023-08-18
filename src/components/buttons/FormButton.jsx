import React from 'react'
import "../../css/button.css"

function FormButton({name, type, buttonInnerHtml}) {
  return (
    <>
        <button name={name} type={type}>{buttonInnerHtml}</button>
    </>
  )
}

export default FormButton