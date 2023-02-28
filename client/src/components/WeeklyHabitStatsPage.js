import React from "react";
import "./styles/WeeklyHabitStatsPage.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";



function WeeklyHabitStatsPage() {


    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <div className="whsp-wrapper">
            {/* <Doughnut data={[]} /> */}
            <h1>
                Weekly Stats
            </h1>
            <h2>
                Mon Feb 20th-Sun Feb 26th
            </h2>
        </div>
    );
}

export default WeeklyHabitStatsPage;