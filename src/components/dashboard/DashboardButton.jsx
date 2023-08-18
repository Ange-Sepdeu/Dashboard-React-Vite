import React from 'react'
import "../../css/Dashboard/button.css";

function DashboardButton(props) {
  return (
    <>
        <div 
        className='button'
        >
         <div>{props.icon}</div>  
         <div>{props.buttonText}</div>
        </div>
    </>
  )
}

export default DashboardButton