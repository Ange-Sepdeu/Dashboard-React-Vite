import React from 'react'
import { LocalPhone, MoreVert, Search } from '@mui/icons-material'
import "../../css/header.css"


function Header({image, name, lastSeen}) {
  return (
    <>
        <div className="header-main">
            <div className="header-left">
                <img src={image} alt="Current User"/>
                 <div className="top-header-left">
                    <div className='top-header-name'>{name}</div>
                  <div className="last-seen">{lastSeen}</div>
                 </div>
            </div>
                <div className="header-right">
                     <Search/>
                     <LocalPhone/>
                    <MoreVert/>
                </div>
        </div>
    </>
  )
}

export default Header