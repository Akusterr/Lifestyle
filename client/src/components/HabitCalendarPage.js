import React, {useState, useEffect} from "react";
import "./styles/HabitCalendarPage.css";
import 'react-calendar/dist/Calendar.css';
import { Button, Header, Image, Modal, Input, Dropdown, DropdownItem, DropdownMenu } from 'semantic-ui-react'
import Calendar from 'react-calendar'
import { Link } from "react-router-dom"
import DailyHabitCard from "./DailyHabitCard";


function HabitCalendarPage(props) {
    // const [fitness, setFitness] = useState("")
    // const [diet, setDiet] = useState("")
    // const [personalHealth, setPersonalHealth] = useState("")
    // const [budget, setBudget] = useState("")
    // const [relationships, setRelationships] = useState("")
    const [categories, setCategories] = useState([])
    const [habits, setHabits] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [value, onChange] = useState(new Date());
    
    const handleClick = (e) => {
        setSelectedCategory(e.target.value)
    }

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

    const selectedHabits = selectedCategory === 'ALL' ? habits : habits.filter(h => h.category_id === parseInt(selectedCategory));
    // console.log({habits, selectedCategory, selectedHabits})


    const tileClasses = ({date, view}) => {
        // console.log({date, view})
        if(date.getDay() === 3){
            return 'green'
        }
    }

    

    return (
        <div className="hcp-wrapper">
            <div>
                <Header>
                    <h2>
                        Categories
                    </h2>
                    
                </Header>
                {categories.map((cat) => <Button value={cat.id} onClick={handleClick}>{cat.name}</Button>)}
                <Button value={'ALL'} onClick={handleClick}>All</Button>
            </div>

            <div className="Sample__container">
                <main className="Sample__container__content">
                <Calendar
                    tileClassName={tileClasses}
                    onChange={onChange} showWeekNumbers value={value} />
                </main>
            </div>
            <div>
                <h3>
                    Check your progress with your weekly <Link exact to='/weeklyHabitStatsPage'>Stats</Link>
                </h3>
            </div>
            <br />
            <div>
                <h1>Selected Habits:</h1>
                {
                    selectedHabits.map((habit) => <h3>{habit.goal}</h3>)
                }
            </div>
        </div>
    );
}

export default HabitCalendarPage;