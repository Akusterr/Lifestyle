import React from "react";


function DailyHabitCard( {habit} ) {

    return (
        <div>
            <br />
            <button>{habit.goal}</button>
        </div>
    );
}

export default DailyHabitCard;