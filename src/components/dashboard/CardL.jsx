import React, { useContext } from 'react'
import DashboardButton from './DashboardButton'
import { Settings } from '@mui/icons-material'
import "../../css/Dashboard/card.css";
import { ThemeContext } from '../../utils/context/ThemeContext';

function CardL(props) {
    const {theme, setTheme} = useContext(ThemeContext)
  return (
    <>
        <div className={"cardL-container-"+theme}>
            <div className={"cardL-header-"+theme}>
                <div className="sunlight">
                    {props.icon}
                </div>
                    <div className="cardL-header-right">
                        <div className="cardL-header-time">
                            {props.time}
                        </div>
                            <div className="cardL-header-right-text">
                                {props.belowText}
                            </div>
                    </div>
            </div>
                <div className={"cardL-date-"+ theme}>
                <div>{props.dateText}</div>
                    <div>{props.date}</div>
                </div>
                    <DashboardButton 
                    icon={<Settings  fontSize='small' />}
                    buttonText="Advanced Configuration" />
        </div>
    </>
  )
}

export default CardL