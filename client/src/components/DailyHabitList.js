import React from "react";
import DailyHabitCard from "./DailyHabitCard";
import Draggable from 'react-draggable';


function DailyHabitList( {habits, openModalForEdit, fetchHabits, selectedDate, Draggable} ) {

    return (
        <div >
            {habits.map(habit =>(
                <DailyHabitCard key={habit.id} selectedDate={selectedDate} habit={habit} openModalForEdit={openModalForEdit} fetchHabits={fetchHabits} Draggable={Draggable}/>
            ))}
        </div> 
    );
}

export default DailyHabitList;