import React, {useContext} from "react";
import "./styles/HomePage.css";
import { Link } from "react-router-dom"
import { Button, Header, Image, Modal, Input, Dropdown, DropdownItem, DropdownMenu } from 'semantic-ui-react'
import {DarkModeContext} from '../context/DarkModeContext'


function HomePage() {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

    const handleDarkModeClick = () => {
        toggleDarkMode();
    }

    return (
        <div>
            <div className={darkMode ? `dark` : `light`} >
                <div className="hp-wrapper">
                    <div>
                        <h1>
                            Ready to create your ideal <strong>Lifestyle</strong>? Find your daily <Link exact to='/dailyHabitPage'>checklist</Link>
                        </h1>
                        <Button onClick ={handleDarkModeClick}>{darkMode ? "Light" : "Dark"} Mode</Button>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default HomePage;