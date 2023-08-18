import React, { useContext } from 'react'
import "../../css/Dashboard/sidebar.css";
import { Addchart, AdminPanelSettings, 
  AdminPanelSettingsOutlined, Assignment, 
  Book, BookOnline, Bookmark, ChatBubble, 
  DashboardCustomizeOutlined, DateRange, 
  DateRangeOutlined, DockOutlined, 
  DriveFileMoveOutlined, DriveFileRenameOutline, GraphicEqRounded, Lan, Language,
   LanguageTwoTone, LibraryBooks, Logout, 
   MenuOpen, MessageRounded, Notifications, 
   NotificationsOutlined, Person, 
   Person2Outlined, PersonOutlined, Route, 
   SafetyCheck, SafetyDivider, SaveAlt, 
   SaveSharp, ScheduleOutlined, ScheduleSend, 
   Security, Settings, SignLanguage, 
   StackedBarChart, StackedBarChartOutlined, 
   Timeline, ViewAgendaOutlined, Window} from '@mui/icons-material';
import { ThemeContext } from '../../utils/context/ThemeContext';

function Sidebar() {
  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <>
        <div className={"sidebar-main-"+theme}>
            <div className="top-icons">
                
                <NotificationsOutlined fontSize="small"/>
                <DriveFileMoveOutlined fontSize="small" />
            </div>
                <div className="middle-icons">
                    <Window fontSize="small" />
                    <Timeline fontSize="small" />
                    <div className='person1'>
                        <PersonOutlined fontSize="small"  />
                        <div className='person'></div>
                    </div>
                    <Lan fontSize="small" />
                     <Addchart fontSize="small" />
                    <DateRangeOutlined fontSize="small" />

                </div>
                  <div className="third-container-icons">
                        <Settings fontSize="small" />
                        <Security fontSize="small" />

                  </div>
                  <div className="logout">
                   <Logout fontSize="small" />
                   </div>
        </div>
    </>
  )
}

export default Sidebar