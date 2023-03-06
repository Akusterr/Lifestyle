import React, {useContext, useState, useEffect} from "react";
import "./styles/HomePage.css";
import { Link } from "react-router-dom"
import { Button, Header, Image, Modal, Input, Dropdown, DropdownItem, DropdownMenu } from 'semantic-ui-react'
import {DarkModeContext} from '../context/DarkModeContext'
import HomePageList from "./HomePageList"


const config = {
  apiUrl: 'https://type.fit/api/quotes',

}


function HomePage() {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const [quotes, setQuotes] = useState([])

    const handleDarkModeClick = () => {
        toggleDarkMode();
    }

    useEffect(() => {
        fetch(config.apiUrl)
            .then(resp => resp.json())
            .then(Q => quoteItems(Q))
    }, [])

    const quoteItems = (Q) => {
        setQuotes(Q)
    }


    return (
        <div>
            <div className={darkMode ? `dark` : `light`} >
                <div className="hp-wrapper">
                    <div>
                        <Button onClick ={handleDarkModeClick}>{darkMode ? "Light" : "Dark"} Mode</Button>
                        <br />
                        <br />
                        <h1>
                            Ready to create your ideal <strong>Lifestyle</strong>? Find your daily <Link exact to='/dailyHabitPage'>checklist</Link>
                        </h1>
                        <h1>***SCIENCE info about how long it takes to create a habit***</h1>
                    </div>
                </div>
                <div>
                    <br />
                    <br />
                    <br />
                  <HomePageList quotes={quotes}/>
                </div>
            </div>
        </div>
        
    );
}

export default HomePage;