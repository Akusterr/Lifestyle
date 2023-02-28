import React, {useState} from "react";


function DailyHabitCard( {habit} ) {
    const [update, setUpdate] = useState("")


    return (
        <div>
            <br />
            <button><strong>{habit.goal}</strong></button>
            <br />
            <div>
            <button>X</button>
            </div>
        </div>
    );
}

export default DailyHabitCard;