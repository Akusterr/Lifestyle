import React, { useState, useEffect } from "react";
import "./styles/DailyHabitPage.css";
import { Link } from "react-router-dom"
import DailyHabitList from "./DailyHabitList";
import moment from 'moment';


function DailyHabitPage(props) {
    console.log(props)
    const [habits, setHabits] = useState([])
    const onUser = props.onUser || {};

    useEffect(() => {
        fetch(`/users/${onUser.id}/habits`)
        .then(resp => resp.json())
        .then(hab => setHabits(hab))
    }, [])

    const handleClick = (e) => {
        e.preventDefault()

    }

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
        <div className="dhp-wrapper">
            <div>
                {renderDate()}
            </div>
             <div>
                <button>
                    <Link exact to='/habitCalendarPage'>Calendar</Link>
                </button>
            </div>
            <br />
            <div>
                <button onClick={handleClick} >Monday</button>
                <button onClick={handleClick} >Tuesday</button>
                <button onClick={handleClick} >Wednesday</button>
                <button onClick={handleClick} >Thursday</button>
                <button onClick={handleClick} >Friday</button>
                <button onClick={handleClick} >Saturday</button>
                <button onClick={handleClick} >Sunday</button>
            </div>
            <br />
                <DailyHabitList habits={habits}/>
            <br />
            <div>
                <button>
                    <Link exact to='/newHabitFormPage'>Start a new habit today</Link>
                </button>
            </div>
        </div>
    );
}

export default DailyHabitPage;