import React, { useState } from "react";
import "./styles/NewHabitFormPage.css";
import { Link } from "react-router-dom"


function NewHabitFormPage() {
    const [goal, setGoal] = useState("")
    const [frequency, setFrequency] = useState([])
    const [category, setCategory] = useState([])
    const [startDate, setStartDate] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        let goalInfo = {
            goal: goal,
            frequency_num: frequency,
            category_id: category,
            start_date: startDate
        }

        fetch("/goals", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(goalInfo)
        })

        .then(resp => resp.json())
        .then(console.log)

    }




    return (
        <div className="nhfp-wrapper">
            <form onSubmit={handleSubmit}>
                <h3>Create Your Account</h3>
                <input type="text" name="goal" placeholder="New Habit Goal" value={goal} onChange={(e) => setGoal(e.target.value)} />
                <input type="number" name="frequency" placeholder="Times Daily" value={frequency} onChange={(e) => setFrequency(e.target.value)} />
                <input type="text" name="category" placeholder="Goal Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                <input type="date" name="start date" placeholder="" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          
                <button type="submit">Create A New Habit!</button>
            </form>
            <br />

            <div>
                <h1>
                    <Link exact to='/weeklyHabitStatsPage'>Tracker your progress</Link>
                </h1>
            </div>
        </div>
    );
}

export default NewHabitFormPage;