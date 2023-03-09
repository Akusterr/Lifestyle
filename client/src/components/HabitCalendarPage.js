import React, {useState, useEffect, useContext} from "react";
import "./styles/HabitCalendarPage.css";
import 'react-calendar/dist/Calendar.css';
import { Button, Header, Icon, Image, Modal, Input, Dropdown, DropdownItem, DropdownMenu } from 'semantic-ui-react'
import Calendar from 'react-calendar'
import { Link } from "react-router-dom"
import {DarkModeContext} from '../context/DarkModeContext'
import {stringifyDate} from './shared/shared';



function HabitCalendarPage(props) {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    // const [fitness, setFitness] = useState("")
    // const [diet, setDiet] = useState("")
    // const [personalHealth, setPersonalHealth] = useState("")
    // const [budget, setBudget] = useState("")
    // const [relationships, setRelationships] = useState("")
    const [categories, setCategories] = useState([])
    const [habits, setHabits] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [value, onChange] = useState(new Date());
    const [selectedHabits, setSelectedHabits] = useState([]);
    const [selectedHabit, setSelectedHabit] = useState(null);
    
    const handleClick = (e) => {
        setSelectedCategory(e.target.value)
    }

    // const handleDarkModeClick = () => {
    //     toggleDarkMode();
    // }

    const onUser = props.onUser || {};

    useEffect(()=>{
        fetch('/categories')
        .then((resp) => resp.json())
        .then((cats) => setCategories(cats))
    }, [])

    useEffect(() => {
        fetch(`/users/${onUser.id}/habits`)
        .then(resp => resp.json())
        .then(hab => setHabits(hab))
    }, [])

    useEffect(() => {
        const selected = selectedCategory === 'ALL' ? habits : habits.filter(h =>{
            console.log({habitCat: h.category_id, selectedCat: selectedCategory})
            return  h.category_id === parseInt(selectedCategory)
        });
        setSelectedHabits(selected)
    }, [selectedCategory, habits])





    const tileClasses = ({date, view}) => {
        const selectedHabitWasCompletedToday = selectedHabit && !!selectedHabit.habit_completion.find((hc) => {
            // find a habit completion that happend today
            const hcDate = new Date(hc.created_at);
            // Helperize ME!!!!!!
            const hcDateString = stringifyDate(hcDate);
            const dateString = stringifyDate(date);
            if(hcDateString === dateString){
                console.log(hc)
                console.log(hcDateString, '---', dateString)
            }
        
            return hcDateString === dateString;
        })
        if(selectedHabitWasCompletedToday){
            return 'green'
        }
    }

    console.log({selectedHabits, habits, selectedCategory,
         filtered: habits.filter((h) => h.category_id === parseInt(selectedCategory))},
         selectedCategory === 'ALL'
    )

    return (
        <div className="top">
            <div className={darkMode ? `dark` : `light`} >
                    <br />
                <div className="hcp-wrapper">
                    <div>
                        <h1><u>{onUser.username}'s Calendar</u></h1>
                        <h3>Select a category:</h3>
                        <br />
                        {categories.map((cat) => <Button value={cat.id} onClick={handleClick}>{cat.name}</Button>)}
                        <Button value={'ALL'} onClick={handleClick}>All</Button>
                    </div>
                    <br />
                    <br />
                    <div className="Sample__container">
                        <main className="Sample__container__content">
                        <Calendar
                            tileClassName={tileClasses}
                            onChange={onChange}
                            showWeekNumbers value={value} />
                        </main>
                    </div>
                    <br />
                    <div className="cal-habs">
                        <h1><u>Selected Habits:</u></h1>
                        <br />
                        {
                            selectedHabits.map((habit) => <Button onClick={() => setSelectedHabit(habit)}>{habit.goal}</Button>)
                        }
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HabitCalendarPage;