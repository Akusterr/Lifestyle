import React, {useContext} from "react";
import "./styles/WeeklyHabitStatsPage.css";
import { Button, Header, Image, Modal, Input, Dropdown, DropdownItem, DropdownMenu } from 'semantic-ui-react'
import moment from 'moment';
 import {DarkModeContext} from '../context/DarkModeContext'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";



function WeeklyHabitStatsPage() {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

    const handleDarkModeClick = () => {
        toggleDarkMode();
    }


    ChartJS.register(ArcElement, Tooltip, Legend);


    const renderDate = () => {
        const curr = new Date; // get current date
        // we need to shift to the left because we want our weeks to start on Mon but JS dates think they start on Sun
        const dateModifier = curr.getDay() === 0 ? 6 : curr.getDay() - 1; 

        const first = curr.getDate() - dateModifier; // First day is the day of the month - date modifier computed above
        const last = first + 6; // last day is the first day + 6

        const firstday = moment(new Date(curr.setDate(first))).format('dddd MMM Do YYYY');
        const lastday = moment(new Date(curr.setDate(last))).format('dddd MMM Do YYYY');

        return <h1>{firstday} - {lastday}</h1>
    }

    return (
        <div className={darkMode ? `dark` : `light`} >
            <div className="whsp-wrapper">
                <div>
                    {renderDate()}
                </div>
                <br />
                <Button onClick ={handleDarkModeClick}>{darkMode ? "Light" : "Dark"} Mode</Button>
                <br />
                <div>
                    <h1>
                        Weekly Stats
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default WeeklyHabitStatsPage;