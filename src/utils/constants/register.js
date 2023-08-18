import { validateMTN, validateOrange } from "../validation/validatePhoneNumber";

export const registerFormInfo = [
    {
        label: "Name",
        type: "text",
        name: "name",
        placeholder: "exx. john doe",
        validationRules: {
            required: {
                value: true,
                message: "* Required"
            }, 
            pattern: {
               value: /^[A-Za-z\s]+$/i,
               message: "Invalid name"
            }
        }
    },
    {
        label: "Email",
        type: "email",
        name: "email",
        placeholder: "exx. john@doe@gmail.com",
        validationRules: {
            required: {
                value: true,
                message: "* Required"
            }, 
            pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Enter a valid email address"
            }
        }
    },
    {
        label: "Password",
        type: "password",
        name: "password",
        placeholder: "*******",
        validationRules:  {
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
    },
    {
        label: "Phone Number",
        type: "text",
        name: "tel",
        placeholder: "+237 *** *** ***",
        validationRules: {
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
              validateNumber:tel => (validateMTN(tel) && validateOrange(tel)) == false || "Enter either MTN or ORANGE"
            }
        }
    }
]