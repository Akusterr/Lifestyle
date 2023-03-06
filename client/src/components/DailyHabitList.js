import React from "react";
import DailyHabitCard from "./DailyHabitCard";
import Draggable from 'react-draggable';
import {Grid} from 'semantic-ui-react';

function DailyHabitList( {habits, openModalForEdit, fetchHabits, selectedDate, Draggable} ) {

    return (
          <Grid className="statsGrid" columns={3} >
            {habits.map(habit =>(
                <DailyHabitCard key={habit.id} selectedDate={selectedDate} habit={habit} openModalForEdit={openModalForEdit} fetchHabits={fetchHabits} Draggable={Draggable}/>
            ))}
        </Grid>
    );
}

export default DailyHabitList;