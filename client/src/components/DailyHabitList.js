import React from "react";
import DailyHabitCard from "./DailyHabitCard";


function DailyHabitList( {habits} ) {

    return (
        <div >
            {habits.map(habit =>(
            <DailyHabitCard key={habit.id} habit={habit} />
            ))}
        </div> 
    );
}

export default DailyHabitList;