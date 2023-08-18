import { Info, MenuBook, MenuOutlined, NearMe, Search } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import SearchInput from "../inputs/Dashboardnputs/SearchInput";
import "../../css/Dashboard/navbar.css";
import Modal from '../modal/Modal';
import { links } from '../../utils/constants/modal';
import {FormControlLabel, FormGroup, Switch} from "@mui/material"
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context/ThemeContext';


function NavBar() {
const [isOpened, setIsOpened] = useState(false)
const handleOpen = () => {
    setIsOpened(true)
} 
const {theme, setTheme} = useContext(ThemeContext)
const handleChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme)
}
  return (
    <>
      {isOpened && <Modal links={links} /> }
        <div className={"navbar-container-"+theme}>
            <div className={"navbar-title-"+theme}>
                <div>
                Dashboard <NearMe
                    style={{color: "#0043FF"}}
                />
                </div>
                <FormGroup>
                    <FormControlLabel control={
                    <Switch 
                    style={{color: theme === "light" ? "black" : "white"}}
                     onChange = {() => handleChange()}
                    />} 
                    label={theme === "light" ? "Dark Mode" : "Light Mode"}
                    style={{color: theme === "light" ? "black" : "white"}}
                    />    
                </FormGroup>            
            </div>
            
            <div className='menu-icon'>
                         <MenuOutlined 
                         onClick = {handleOpen}
                         style={{fontSize: "24px"}} 
                         />
                     </div>
                <div className="navbar-middle-content">
                    <div className="search-container">
                        <SearchInput 
                        type="text" 
                        name="top-search" 
                        placeholder="Quick Search"
                        position="top"
                        />
                    </div>
                        <div className="navbar-right-icon">
                            <Info />
                        </div>
                </div>
                    <div className="navbar-profile-container">
                            <div className="navbar-profile-pic">
                                <img src="../../../src/assets/alk.jpg" alt="Admin Profile Pic" />
                            </div>
                                <div className="navbar-profile-info">
                                    <div className="navbar-profile-name">
                                        Admin
                                    </div>
                                        <div className="navbar-profile-email">
                                            admin@domain.com
                                        </div>
                                </div>
                    </div>
        </div>
    </>
  )
}

export default NavBar