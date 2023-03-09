import React, { useState, useEffect, useContext } from "react";
import "./styles/DailyHabitPage.css";
import { Link } from "react-router-dom"
import DailyHabitList from "./DailyHabitList";
import moment from 'moment';
import HabitFormModal from "./HabitFormModal";
import {Button, Icon} from 'semantic-ui-react';
import Draggable from 'react-draggable';
import {DarkModeContext} from '../context/DarkModeContext'
import { stringifyDate } from "./shared/shared";





function DailyHabitPage(props) {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

    const [detailHabit, setDetailHabit] = useState({})
    const [habits, setHabits] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const onUser = props.onUser || {};
    const selectedDateString = stringifyDate(selectedDate);

    const days= [
        {
            name:'Monday',
            idx: 1
        },
        {
            name: 'Tuesday',
            idx: 2
        },
        {
            name: 'Wednesday',
            idx: 3
        },
        {
            name: 'Thursday',
            idx: 4
        },
        {
            name: 'Friday',
            idx: 5
        },
        {
            name: 'Saturday',
            idx: 6
        },
        {
            name: 'Sunday',
            idx: 0
        }
    ]   

    const fetchHabits = () => {
        fetch(`/users/${onUser.id}/habits`)
            .then(resp => resp.json())
            .then(hab => setHabits(hab))
    }

    useEffect(() => {
        fetchHabits();
    }, [])

    const handleClickDate = (date) => {
        console.log(date)
        const selectedDayIdx = selectedDate.getDay();
        // set selectedDate = the date that was just clicked
        const multiplier = date.idx - selectedDayIdx;
        const millisToTravel = multiplier *  1000 * 60 * 60 * 24
        const newSelectedDate = new Date(selectedDate.getTime() + millisToTravel);
        console.log({selectedDate, date, newSelectedDate})
        setSelectedDate(newSelectedDate);
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

     const openModalForEdit = (habit) => {
        setDetailHabit(habit)
        setModalOpen(true)
     }

     const completeHabits = [];
     const incompleteHabits = [];
     habits.forEach(hab => {
        const habitIsComplete = !!hab.habit_completion.find((hc) => {
            // find a habit completion that happend today
            const hcDate = new Date(hc.created_at);
            const hcDateString = stringifyDate(hcDate);
            console.log(hcDateString, '---', selectedDateString)
            return hcDateString === selectedDateString;
        })

        if(habitIsComplete){
            completeHabits.push(hab)
        } else {
            incompleteHabits.push(hab)
        }
     })

    return (
        <div className={darkMode ? `dark` : `light`}>
                <br />
            <div className="dhp-wrapper" >
                <div>
                    {renderDate()}
                </div>
                <br />
                <div className="yellow">
                    {days.map((date) => {
                        return <Button onClick={()=> handleClickDate(date)} primary={selectedDate.getDay() === date.idx}>{date.name}</Button>
                    })}
                </div>
                <br />
                <HabitFormModal open={modalOpen} setOpen={setModalOpen} habit={detailHabit} fetchHabits={fetchHabits} onUser={onUser}/>
                <br />
                <h1><u>{onUser.username}'s Daily Habit Checklist:</u></h1>
                <br />
                <div className="habits" >
                    <div className="todo">
                    <br />
                    <DailyHabitList selectedDate={selectedDate} openModalForEdit={openModalForEdit} habits={incompleteHabits} fetchHabits={fetchHabits} Draggable={Draggable}/>
                    </div>
                    <div className="complete">
                    <h1>Completed for today:</h1>
                    <br />
                    <DailyHabitList selectedDate={selectedDate} openModalForEdit={openModalForEdit} habits={completeHabits} fetchHabits={fetchHabits} Draggable={Draggable}/>
                    </div>
                    <br />
                </div>
            </div>    
        </div>
    );
}

export default DailyHabitPage;