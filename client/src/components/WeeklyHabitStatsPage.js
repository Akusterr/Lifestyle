import React, {useContext, useEffect, useState} from "react";
import "./styles/WeeklyHabitStatsPage.css";
import { Icon, Grid } from 'semantic-ui-react'
import moment from 'moment';
import { Link } from "react-router-dom"
 import {DarkModeContext} from '../context/DarkModeContext'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";



function WeeklyHabitStatsPage(props) {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
     const onUser = props.onUser || {};

    const [habits, setHabits] = useState([])

    // const handleDarkModeClick = () => {
    //     toggleDarkMode();
    // }

    const fetchHabits = () => {
        fetch(`/users/${onUser.id}/habits`)
            .then(resp => resp.json())
            .then(hab => setHabits(hab))
    }

    useEffect(fetchHabits, [])


    ChartJS.register(ArcElement, Tooltip, Legend);

    const getFirstAndLastDayOfWeek = () => {
        const curr = new Date; // get current date
        // we need to shift to the left because we want our weeks to start on Mon but JS dates think they start on Sun
        const dateModifier = curr.getDay() === 0 ? 6 : curr.getDay() - 1; 

        const first = curr.getDate() - dateModifier; // First day is the day of the month - date modifier computed above
        const last = first + 6; // last day is the first day + 6

        const firstday = new Date(curr.setDate(first))
        const lastday = new Date(curr.setDate(last))
        return {firstday, lastday}
    }


    const renderDate = () => {
        const {firstday, lastday} = getFirstAndLastDayOfWeek()
        const formattedFirst = moment(firstday).format('dddd MMM Do YYYY');
        const formattedLast = moment(lastday).format('dddd MMM Do YYYY');
        return <h1>{formattedFirst} - {formattedLast}</h1>
    }

    return (
        <div className={darkMode ? `dark` : `light`} >
            {/* <Icon size ="big" onClick ={handleDarkModeClick} className={darkMode ? "toggle off" : "toggle on"}></Icon> */}
            <br />
            <div className="whsp-wrapper">
                <div>
                    {renderDate()}
                </div>
                <br />
                <br />
                {/* <div>
                    <h3>
                        Go back to Checklist<Link exact to='/DailyHabitPage'><Icon size="large" className="tasks"></Icon></Link>
                    </h3>
                </div>
                <br /> */}
                <div>
                    <h1>
                        <u>{onUser.username}'s Weekly Stats</u>
                    </h1>
                    <br />
                    <Grid className={'statsGrid'}>
                        {habits.map((hab) => {

                            const today = new Date();
                            const ninetyDaysAgo =  new Date(new Date().setDate(today.getDate() - 90));
                            const pastNinetyCompletions = hab.habit_completion.filter((hc) => {
                                const habitCompetionDate = new Date(hc.created_at)
                                return ninetyDaysAgo < habitCompetionDate
                            })
                            const percentCompletePastNinety = pastNinetyCompletions.length / (hab.frequency_num * 12)* 100
                            const pastNinetyGoalDonutSize = percentCompletePastNinety  > 100 ? 0 : 100 - percentCompletePastNinety;

                            const {firstday, lastday} = getFirstAndLastDayOfWeek();
                            const thisWeekCompletions = hab.habit_completion.filter((hc) => {
                                const habitCompetionDate = new Date(hc.created_at)
                                return firstday < habitCompetionDate
                            })
                            const percentCompleteThisWeek = thisWeekCompletions.length / hab.frequency_num * 100
                            const weeklyGoalDonutSize = percentCompleteThisWeek  > 100 ? 0 : 100 - percentCompleteThisWeek;


                            console.log({
                                hab,
                                percentCompletePastNinety,
                                pastNinetyGoalDonutSize,
                                percentCompleteThisWeek,
                                weeklyGoalDonutSize,
                                thisWeekCompletions,
                                pastNinetyCompletions
                            })

                            const data = {
                                labels: ['complete'],
                                datasets: [
                                    // 90 days % complete vs actual
                                    {
                                        label: '%complete past 90 days',
                                        data: [ percentCompletePastNinety, pastNinetyGoalDonutSize],
                                        backgroundColor: ['rgba(66, 245, 69, 0.6)', 'white'],
                                        borderColor: ['rgba(66, 245, 69, 1)']
                                    },
                                     // current week % complete vs actual
                                    {
                                        label: '%complete this week',
                                        data: [percentCompleteThisWeek, weeklyGoalDonutSize],
                                        backgroundColor: ['rgba(153, 102, 255, 0.6)', 'white'],
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