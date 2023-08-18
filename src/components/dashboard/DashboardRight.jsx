import React, { useContext } from 'react'
import CardL from './CardL'
import { AccessTime, Dataset, Filter, FilterAltSharp, LightModeOutlined, SignalCellular2Bar, SignalCellular4Bar, TuneOutlined } from '@mui/icons-material'
import { Add, CloudCircle, DateRange, GroupOutlined, ModeNight, PeopleOutlined, PlusOne, TimeToLeave, Timelapse } from "@mui/icons-material";
import SearchInput from "../inputs/Dashboardnputs/SearchInput";
import "../../css/Dashboard/right.css";
// import { cardData } from '../../utils/scripts/card';
import Card from './Card';
import DashboardButton from './DashboardButton';
import DataTable from './DataTable';
import { Data } from '../../utils/constants/Data';
import {Bar, Line} from "react-chartjs-2"
import Chart from "chart.js/auto"
import {CategoryScale} from "chart.js";
import { barData, lineData } from '../../utils/constants/chartData';
import { Badge } from '@mui/material';
import { ThemeContext } from '../../utils/context/ThemeContext';

Chart.register(CategoryScale)

function DashboardRight() {
    const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div className='right-container'>
        <div className={"header-"+theme}>
            <div>
                Dashboard 
                <SignalCellular4Bar 
                 style={{fontSize: "10px", textAlign: "center"}}
                />
            </div>
            <div className='current'>
                Attendance Insights
                <SignalCellular4Bar 
                  style={{fontSize: "10px", textAlign: "center"}}/>
            </div>
        </div>
            <div className="cards-container">
                <div className="left-card-container">
                    <CardL 
                    time="8:02:09 AM"
                    belowText="Realtime Insight"
                    dateText="Today:"
                    date="2nd August 2023"
                    icon={
                    <LightModeOutlined
                     style={{
                        fontSize: "40px"
                     }}
                    />
                    }
                     />
                </div>
                    <div className="right-card-container">
                        {/* <div className="right-card-container-division"> */}
                        <Card 
                        number= "452"
                        className="green"
                        icon={<GroupOutlined
                         style={{fontSize: "30px", fontWeight:500}}
                        />}
                        middleText="Total Employees"
                        footerIcon= {<Add 
                            style={{
                                fontSize: "15px",
                                color: "#43900C"
                             }}
                        />}
                        footerText="2 new employees added"
                        />
                        <Card 
                        number= "360"
                    className="green"

                        icon={<Timelapse
                            style={{fontSize: "30px", fontWeight:500}}
                        />}
                        middleText="On Time"
                        footerIcon= {<Add 
                         style={{
                            color: "#43900C",
                            fontSize: "15px"
                         }}
                        />}
                        footerText="-10% Less than yesterday"
                        />
                        <Card 
                        number= "30"
                        icon={<CloudCircle
                            style={{fontSize: "30px", fontWeight:500}}
                        
                        />}
                        middleText="Absent"
                    className="red"
                        footerIcon= {<Add 
                            style={{
                                fontSize: "15px",
                                color: "#900C0C"
                             }}
                        />}
                        footerText="+3% Increase than yesterday"
                        />
                        {/* </div>
                        <div className="right-card-container-division"> */}
                        <Card 
                        number= "62"
                        icon={<AccessTime
                            style={{fontSize: "30px", fontWeight:500}}
                        
                        />}
                        middleText="Late Arrival"
                    className="red"
                        footerIcon= {<Add 
                            style={{
                                fontSize: "15px",
                                color: "#900C0C"
                             }}
                        />}
                        footerText="+3% Less than yesterday"
                        />
                        <Card 
                        number= "6"
                    className="green"

                        icon={<ModeNight
                            style={{fontSize: "30px", fontWeight:500}}
                        
                        />}
                        middleText="Early Departures"
                        footerIcon= {<Add 
                            style={{
                                fontSize: "15px",
                                color: "#43900C"
                                
                             }}
                        />}
                        footerText="-10% Less than yesterday"
                        />
                        <Card 
                        number= "42"
                      className="blue"

                        icon={<DateRange
                            style={{fontSize: "30px", fontWeight:500}}
                        
                        />}
                        middleText="Time Off"
                        footerIcon= {<Add 
                            style={{
                                fontSize: "15px",
                                color: "#0054E8"
                             }}
                        />}
                        footerText="-2% Less than yesterday"
                        />
                        {/* </div> */}
                    </div>
                    </div>
                    <div className="charts-container">
                        <div className={"linechart-"+theme}>
                             <div className="linechart-head">
                                <div className="linechart-title">Attendance Comparison Chart</div>
                                <div className="duration">
                                    <div className="day-active"> 
                                    <Badge color='primary' style={{backgroundColor: "blue", width: "12px", height:"12px",borderRadius:"50%"}}></Badge> 
                                    <div> Daily 
                                    </div>
                                    </div>
                                    <div className="day-inactive"> 
                                    <Badge color='primary' style={{width: "12px", border: "1px solid",height:"12px",borderRadius:"50%"}}></Badge> 
                                    <div> Weekly 
                                    </div>
                                    </div>
                                    <div className="day-inactive"> 
                                    <Badge color='primary' style={{width: "12px", border: "1px solid" ,height:"12px",borderRadius:"50%"}}></Badge> 
                                    <div> Monthly 
                                    </div>
                                    </div>
                                </div>
                                 <TuneOutlined />
                             </div>
                            <Line 
                             style={{height: "30vh", width: "85%", margin: "0 auto"}}                             
                             data={lineData}
                             options={{
                                plugins: {
                                  title: {
                                    display: true,
                                    text: ""
                                  },
                                  legend: {
                                    display: false
                                  },
                                  
                                },
                                lineTension: 0.5
                              }}
                            />
                        </div>
                        <div className={"barchart-"+theme}>
                            <div className="chart-head">
                            <div>Weekly Attendance</div>
                             <TuneOutlined />
                                </div>
                            <Bar
                            className='bar'
                            style={{height: "30vh"}}
                            data={barData}
                              options={{
                                plugins: {
                                  title: {
                                    display: true,
                                    text: ""
                                  },
                                  legend: {
                                    display: false
                                  }
                                }
                              }}
                            />
                        </div>
                    </div>

                    <div className={"attendance-table-"+ theme}>
                        <div className={"attendance-header-"+theme}>
                            <div className="attendance-title">Attendance Overview</div>
                            <SearchInput 
                             position="bottom"
                             placeholder="Quick Search"
                            />
                            <div className={"attendance-date-"+theme}>
                                <div className="date-icon">
                                    <DateRange 
                                     style={{fontSize: "18px"}}
                                    />
                                </div>
                                <div>29 July 2023</div>
                            </div>
                            <div className="advanced-filters">
                                <DashboardButton 
                                 icon={<TuneOutlined />}
                                 buttonText = "Advanced Filters"
                                />
                            </div>
                        </div>
                            <DataTable 
                             headers={Data}
                            />
                    </div>
                             
    </div>
  )
}

export default DashboardRight