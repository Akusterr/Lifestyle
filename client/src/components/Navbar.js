import React from "react";
import "./styles/Navbar.css";
import { Outlet, Link } from "react-router-dom";


function Navbar({onUser, setOnUser}) {

    // const handleLogout = () => {
    //     fetch("/logout", {
    //         method: "DELETE"
    //     }).then((resp => {
    //         if (resp.ok){
    //             setOnUser(null)
    //             window.location.href = "http://localhost:4000/home"
    //         }
    //     }))

    // }



    return (
        <div >
            <nav className="nav">
                <div>
                    <Link to="/">Login</Link>
                </div>
                <div>
                    <Link to="/registrationPage">Register</Link>
                </div>
                <div>
                    <Link to="/homePage">Home</Link>
                </div>
                <div>
                    <Link to="/dailyHabitPage">Daily Habits Checklist</Link>
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
                {/* <button onClick={handleLogout}>Logout</button> */}
            </nav>

            <Outlet />
        </div>
    );
}

export default Navbar;