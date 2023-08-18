import React, { useContext } from 'react'
import NavBar from '../components/dashboard/NavBar'
import "../css/Dashboard/dashboard.css"
import DashboardRight from '../components/dashboard/DashboardRight'
import Sidebar from '../components/dashboard/Sidebar'
import Modal from '../components/modal/Modal'
import { links } from '../utils/constants/modal'
import { ThemeContext } from '../utils/context/ThemeContext'

function Dashboard() {
  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <>
       
        <div className={"main-container-"+theme}>
            <div className="main-container-sidebar">
              <Sidebar />
            </div>
                <div className="main-container-content">
                    <NavBar />
                    <DashboardRight />
                </div>
        </div>
    </>
  )
}

export default Dashboard