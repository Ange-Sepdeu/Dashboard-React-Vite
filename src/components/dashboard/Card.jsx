import React, { useContext } from 'react'
import "../../css/Dashboard/card.css";
import { ThemeContext } from '../../utils/context/ThemeContext';

function Card(props) {
    const {theme, setTheme} = useContext(ThemeContext)
  return (
    <>
        <div className={"card-container-"+theme}>
            <div className="card-header">
                <div className="number">{props.number}</div>
                <div className={"icon-"+theme}>{props.icon}</div>
            </div>
                <div className={"middle-text-"+theme}>
                    {props.middleText}
                </div>
                    <div className="footer">
                        <div className={props.className}>
                            {props.footerIcon}
                        </div>
                        <div className={"footer-text-"+theme}>
                            {props.footerText}
                        </div>
                    </div>
        </div>
    </>
  )
}

export default Card