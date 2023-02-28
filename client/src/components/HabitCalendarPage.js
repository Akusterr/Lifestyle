import React, {useState, useEffect} from "react";
import "./styles/HabitCalendarPage.css";
import 'react-calendar/dist/Calendar.css';
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
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    
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
    console.log({habits, selectedCategory, selectedHabits})

    const [value, onChange] = useState(new Date());

    const tileClasses = ({date, view}) => {
        // console.log({date, view})
        if(date.getDay() === 3){
            return 'green'
        }
    }

    return (
        <div className="hcp-wrapper">
            <div>
                <header>
                    <h2>
                        Categories:
                    </h2>
                    
                </header>
                {categories.map((cat) => <button value={cat.id} onClick={handleClick}>{cat.name}</button>)}
                <button value={'ALL'} onClick={handleClick}>All</button>
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
                    Check your progress wit your weekly <Link exact to='/weeklyHabitStatsPage'>Stats</Link>
                </h3>
            </div>
            <div>
                {
                    selectedHabits.map((habit) => <DailyHabitCard habit={habit} />)
                }
            </div>
        </div>
    );
}

export default HabitCalendarPage;