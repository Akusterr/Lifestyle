import React, {useContext} from "react";
import "./styles/Navbar.css";
import { Button, Icon, Header, Image, Modal, Input, Dropdown, DropdownItem, DropdownMenu } from 'semantic-ui-react'
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

    const handleDarkModeClick = () => {
        toggleDarkMode();
    }

    return (
            <div className={darkMode ? `dark` : `light`}>
            {onUser && onUser.id ? (
                <nav className="nav">        
                    <div>
                        <Link to="/homePage">Home</Link>
                    </div>
                    <div>
                        <Link to="/dailyHabitPage">Daily Checklist</Link>
                    </div>
                    <div>
                        <Link to="/habitCalendarPage">Calendar</Link>
                    </div>

                    <div>
                        <Link to="/weeklyHabitStatsPage">Stats</Link>
                    </div>
                    <div onClick={handleLogout}>Logout</div>
                    <Icon size ="large" onClick ={handleDarkModeClick} className={darkMode ? "toggle off" : "toggle on"}></Icon>
                </nav>
                    ) : (
                null )}

                <Outlet />
            </div>
    );
}

export default Navbar;