import React from "react";
import "./styles/Navbar.css";
import { Outlet, Link } from "react-router-dom";


function Navbar() {



    return (
        <div className="nav">
            <nav>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/dailyHabitPage">Daily Habits List</Link>
                </div>
                <div>
                    <Link to="/habitCalendarPage">Calendar</Link>
                </div>
                <div>
                    <Link to="/newHabitFormPage">Create a Habit</Link>
                </div>
                <div>
                    <Link to="/weeklyHabitStatsPage">Stats</Link>
                </div>
            </nav>

            <Outlet />
        </div>
    );
}

export default Navbar;