import React, {useState} from "react";
import "./styles/DailyHabitCard.css";
import { Button, Card, Image, Icon, Grid} from 'semantic-ui-react'
import Draggable from 'react-draggable';
import {HOSTNAME} from '../constants';


function DailyHabitCard( {habit, openModalForEdit, fetchHabits, isDragging, text, selectedDate, Draggable} ) {
    const [habCompletions, setHabCompletions] = useState("")

    const selectedDateString = `${selectedDate.getDay()}/${selectedDate.getMonth()}/${selectedDate.getYear()}`;
    const selectedDateCompletions = habit.habit_completion.filter((hc) => {
        // find a habit completion that happend today
        const hcDate = new Date(hc.created_at);
        const hcDateString = `${hcDate.getDay()}/${hcDate.getMonth()}/${hcDate.getYear()}`;
        console.log(hcDateString, '---', selectedDateString)
        return hcDateString === selectedDateString;
    })

    let habInfo = {
        habit_id: habit.id
    }

    const onCompleteClicked = (e) => {
        
        fetch(HOSTNAME + "/habits/:habitId/habitCompletions", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(habInfo)
        })

        .then(resp => resp.json())
        .then(fetchHabits)
    }

    const handleDeleteHabit = () => {

            fetch(`${HOSTNAME}/habits/${habit.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((resp) => resp.json())
                .then(fetchHabits);
    }

    return (
        <div className="h-card">
            <Grid.Column width={5}>
                <Draggable>     
                    <div>
                        <Card>
                            <Card.Content>
                                <Card.Header>{habit.goal}</Card.Header>
                                <p>Completed {selectedDateCompletions.length} times today</p>
                                <Icon size="large" onClick={onCompleteClicked} className="check"></Icon>
                                <Icon size="large" onClick={()=> openModalForEdit(habit)} className="edit"></Icon>
                                <Icon size="large" onClick={handleDeleteHabit} className="trash alternate outline"></Icon>
                            </Card.Content>
                        </Card>
                    </div>
                </Draggable>
            </Grid.Column>
        </div>    
            
    );
}

export default DailyHabitCard;