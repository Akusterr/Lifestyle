import React, { useEffect, useState } from "react";
import "./styles/NewHabitFormPage.css";


function NewHabitFormPage(props) {
    const [goal, setGoal] = useState("")
    const [frequency, setFrequency] = useState(0)
    const [category, setCategory] = useState("")
    const [startDate, setStartDate] = useState([])
    const [categories, setCategories] = useState([])


    // console.log(frequency)

    const onUser = props.onUser || {};

    useEffect(()=>{
        fetch('/categories')
        .then((resp) => resp.json())
        .then((cats) => setCategories(cats))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        const date = new Date(startDate);

        let goalInfo = {
            goal: goal,
            frequency_num: parseInt(frequency),
            category_id: category,
            start_date: date.getTime(),
            user_id: onUser.id
        }

        console.log(goalInfo)

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
                <input type="number" name="frequency" placeholder="Times Daily" value={frequency} onChange={(e) => setFrequency(parseInt(e.target.value))} />
                <select onChange={(e) =>  setCategory(e.target.value)}>
                    {categories.map((cat) => <option value={cat.id}>{cat.name}</option>)}
                </select>
                <input type="date" name="start date" placeholder="" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                <button type="submit">Create A New Habit</button>
            </form>
            
        </div>
    );
}

export default NewHabitFormPage;