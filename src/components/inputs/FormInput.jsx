import React, { useEffect, useState } from 'react'
import "../../css/inputs.css"

function FormInput({name, type, value,placeholder, errors, register, isDirty, validationRules}) {
      return (
        <>
          <div className='input-container'>
            <input 
              className= { (errors[name]) ? 'error-input':'form-input'}
              type={type} 
              {
                ...register(name, validationRules)
              }
              name={name} 
              placeholder={placeholder}
            />
            {
              Object.keys(errors).map(error => {
                if(error == name)
                {
                return (
                <div key={error.id} className='errors'>{errors[error]?.message}</div>
                )
                }
              })
            }
          </div>
        </>
      )
}

export default FormInput