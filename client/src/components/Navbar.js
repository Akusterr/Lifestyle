import React, {useContext} from "react";
import "./styles/Navbar.css";
import { Outlet, Link } from "react-router-dom";
import {DarkModeContext} from '../context/DarkModeContext'


function Navbar({onUser, setOnUser}) {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE"
        }).then((resp => {
            if (resp.ok){
                setOnUser(null)
                window.location.href = "http://localhost:4000/loginPage"
            }
        }))

    }

    console.log(onUser)

    return (
        <div className={darkMode ? `dark` : `light`}>
        {onUser && onUser.id ? (
            <nav className="nav">        
                <div>
                    <Link to="/homePage">Home</Link>
                </div>
                <div>
                    <Link to="/dailyHabitPage">Daily Habits Checklist</Link>
                </div>
                <div>
                    <Link to="/habitCalendarPage">Calendar</Link>
                </div>
                {/* <div>
                    <Link to="/newHabitFormPage">Create a Habit</Link>
                </div> */}
                <div>
                    <Link to="/weeklyHabitStatsPage">Stats</Link>
                </div>
                <button onClick={handleLogout}>Logout</button>
            </nav>
                ) : (
            <nav className="nav">
                <div>
                    <Link to="/loginPage">Login</Link>
                </div>
                <div>
                    <Link to="/registrationPage">Register</Link>
                </div>
            </nav>)}

            <Outlet />
        </div>
    );
}

export default Navbar;