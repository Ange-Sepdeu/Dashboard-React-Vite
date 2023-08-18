import React from 'react'
import FormInput from '../inputs/FormInput'
import FormButton from '../buttons/FormButton'
import "../../css/form.css"
import { useForm } from 'react-hook-form'
import { validateMTN, validateOrange } from "../../utils/validation/validatePhoneNumber"
import { redirect, useNavigate } from 'react-router-dom'


function Form({title}) {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState:{errors, isDirty},
      } = useForm()
      const registerUser = (data) => {
         alert("User registered successfully")
         navigate("/chat")
      }
  return (
    <>
        <div className='form-container'>
         <form method="post" onSubmit={handleSubmit(registerUser)}>
        <h2>{title}</h2>
        <FormInput
         register={register}
         label="Name"
         validationRules={
            {
            required: {
                value: true,
                message: "* Required"
            }, 
            pattern: {
               value: /^[A-Za-z\s]+$/i,
               message: "Invalid name"
            }
            }
         }
         errors={errors}
         placeholder="exx. john doe"
         name="name"
         type="text"
        />

        <FormInput
        label="Email"
        type="email"
        name="email"
        placeholder="exx. john@doe@gmail.com"
        validationRules={
            {
            required: {
                value: true,
                message: "* Required"
            }, 
            pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Enter a valid email address"
            }
        }
        }
        errors={errors}
        register={register}
    />
        
        <FormInput
         label= "Password"
         type="password"
         name="password"
         placeholder="*******"
         errors={errors}
         register={register}
         validationRules = {
         {
             required: {
                 value: true,
                 message: "* Required"
             }, 
             minLength: {
                 value: 4,
                 message: "Short password"
             },
             pattern: {
                value: /^[A-Za-z0-9]+[`!@#$%^&()_+\-=\[\]{};':"\\|,.<>\/?~]/,
                message: "Weak password"
           }
        }
         } 
        />

        <FormInput
        label="Phone Number"
        type="text"
        name="tel"
        placeholder="+237 *** *** ***"
        errors={errors}
        register={register}
        validationRules= {
            {
            required: {
                value: true,
                message: "* Required"
            },
            minLength: {
                value: 9,
                message: "Enter a cameroonian phone number"
            },
            maxLength: {
                value: 9,
                message: "Enter a cameroonian phone number"
            },
            validate: {
              validatePhoneNumber:tel => (validateMTN(tel) && validateOrange(tel)) == false || "Enter either MTN or ORANGE number"
            }
        }
        }
        />
        
        <FormButton name="register" type="submit" buttonInnerHtml="Register"/>
        </form>
        </div>
    </>
  )
}

export default Form