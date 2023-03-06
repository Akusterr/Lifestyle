import React, {useContext, useEffect, useState} from "react";
import "./styles/WeeklyHabitStatsPage.css";
import { Button, Header, Image, Modal, Input, Dropdown, DropdownItem, DropdownMenu, Grid } from 'semantic-ui-react'
import moment from 'moment';
 import {DarkModeContext} from '../context/DarkModeContext'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";



function WeeklyHabitStatsPage(props) {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
     const onUser = props.onUser || {};

    const [habits, setHabits] = useState([])

    const handleDarkModeClick = () => {
        toggleDarkMode();
    }

    const fetchHabits = () => {
        fetch(`/users/${onUser.id}/habits`)
            .then(resp => resp.json())
            .then(hab => setHabits(hab))
    }

    useEffect(fetchHabits, [])


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
                    <Grid className={'statsGrid'}>
                        {habits.map((hab) => {
                            
                            const percentComplete = hab.habit_completion.length / hab.frequency_num * 100
                            const completeDonutSize = percentComplete;
                            const goalDonutSize = percentComplete > 100 ? 0 : 100 - percentComplete;
                            const data = {
                                labels: ['complete'],
                                datasets: [
                                    {
                                        label: '%complete',
                                        data: [completeDonutSize, goalDonutSize],
                                        backgroundColor: ['rgba(153, 102, 255, 0.2)', 'white'],
                                        borderColor: ['rgba(153, 102, 255, 1)']
                                    },
                                ]
                            }
                            return (
                                <Grid.Column width={5}>
                                    <h4>{hab.goal}</h4>
                                    <Doughnut data={data} />
                                </Grid.Column>
                                )
                        })}
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default WeeklyHabitStatsPage;