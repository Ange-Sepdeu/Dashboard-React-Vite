import React from 'react'
import "../../css/messageContainer.css"
import { Done, Favorite } from '@mui/icons-material'

function MessageContainerDirection({direction, message, time}) {
  return (
    <>
        <div className={direction}>
            <div className="message-header">{message}</div>
            <div className="message-footer">
            <div style={{width: "50%"}}></div>
                 <div className="footer-icons">
                <Favorite className='favorite'/>
                <span>{time}</span>
                <Done/>
                </div>
            </div>
            </div>
    </>
  )
}

export default MessageContainerDirection