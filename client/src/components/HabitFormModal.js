import React, {useState, useEffect} from "react";
import "./styles/HabitFormModal.css";
import { Button, Icon, Header, Image, Modal, Input, Dropdown, DropdownItem, DropdownMenu } from 'semantic-ui-react'



function HabitFormModal(props) {
    const [goal, setGoal] = useState("")
    const [frequency, setFrequency] = useState(1)
    const [category, setCategory] = useState(73)
    // const [startDate, setStartDate] = useState(null)
    const [categories, setCategories] = useState([])

    const onUser = props.onUser || {};
    const habit = props.habit || {};
    const editMode = !!habit.id;
    const {open, setOpen} = props;


    useEffect(() => {
        if(habit.id){
            setGoal(habit.goal)
            setFrequency(habit.frequency_num)
            setCategory(habit.category_id)
            // setStartDate(habit.start_date)
        }
    }, [habit])

    useEffect(()=>{
        fetch('/categories')
            .then((resp) => resp.json())
            .then((cats) => setCategories(cats))
    }, [])

    const createHabit = (goalInfo) => {
        fetch("/goals", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(goalInfo)
        })

        .then(resp => resp.json())
        .then((hab) => {
            props.fetchHabits();
            setOpen(false)
        })
    }

    const updateHabit = (goalInfo) => {
        fetch(`/habits/${goalInfo.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(goalInfo)
        })
        .then(resp => resp.json())
        .then((hab) => {
            props.fetchHabits();
            setOpen(false)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // const date = new Date(startDate);

        let goalInfo = {
            goal: goal,
            frequency_num: parseInt(frequency),
            category_id: category,
            // start_date: date.getTime(),
            user_id: onUser.id
        }

        if(editMode) {
            goalInfo.id = habit.id
            updateHabit(goalInfo)
        } else {
            createHabit(goalInfo)
        }

    }

    return (
        <div className="modalWrapper">
            <Modal 
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button>Add a new Habit</Button>} 
            >
                
                <Modal.Content>
                    <form onSubmit={handleSubmit} className="habitForm">
                        <h3>{editMode ? 'Update Habit' : 'Create a New Habit' }</h3>
                        <Input type="text" name="goal" placeholder="New Habit Goal" value={goal} onChange={(e) => setGoal(e.target.value)} />
                        <Input type="number" name="frequency" placeholder="Times Daily" value={frequency} onChange={(e) => setFrequency(e.target.value)} />
                        <select className="whoNeedsSemantic" onChange={(e) => setCategory(e.target.value)}>
                            {categories.map((cat) => <option value={cat.id}>{cat.name}</option>)}
                        </select>
                        {/* <Input type="date" name="start date" placeholder="" value={startDate} onChange={(e) => setStartDate(e.target.value)} /> */}
                        <Button type="submit">{editMode ? 'Update Habit' : 'Create a New Habit' }</Button>
                    </form>
                </Modal.Content>
            </Modal>
        </div>
        
    );
}

export default HabitFormModal;