import React, {useState} from "react";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { Button, Card, Image, Icon, Grid} from 'semantic-ui-react'
import Draggable from 'react-draggable';


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
        
        fetch("/habits/:habitId/habitCompletions", {
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

            fetch(`http://localhost:4000/habits/${habit.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((resp) => resp.json())
                .then(fetchHabits);
    }

    return (
        
        <Grid.Column width={5}>
            <Draggable>     
                <div>
                    <Card>
                        <Card.Content>
                            <Card.Header>{habit.goal}</Card.Header>
                            <p>Completed {selectedDateCompletions.length} times today</p>
                            <Button onClick={onCompleteClicked}>Complete!</Button>
                            <Button onClick={handleDeleteHabit} floated="right">X</Button>
                            <Button onClick={()=> openModalForEdit(habit)}>Edit</Button>
                        </Card.Content>
                    </Card>
                </div>
            </Draggable>
        </Grid.Column>
            
    );
}

export default DailyHabitCard;