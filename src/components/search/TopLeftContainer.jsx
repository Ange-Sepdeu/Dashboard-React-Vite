import React from 'react'
import { Menu } from '@mui/icons-material'
import SearchInput from '../inputs/SearchInput'
import { SearchSharp } from '@mui/icons-material'
import "../../css/topleftcontainer.css"

function TopLeftContainer({onChange}) {
  return (
    <>
        <div className="search-container">
            <Menu className='menu'/>
                <div className="search-bar-sub">
                    <SearchSharp fontSize='24px' />
                    <SearchInput 
                    onChange={onChange}
                    name="search" 
                    type="text" 
                    placeholder="Search" 
                    />
                </div>
        </div>
    </>
  )
}

export default TopLeftContainer