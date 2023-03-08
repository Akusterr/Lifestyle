import React, {useContext, useState, useEffect} from "react";
import "./styles/HomePage.css";
// import { Link } from "react-router-dom"
// import { Button, Icon, Header, Image, Modal, Input, Popup } from 'semantic-ui-react'
import {DarkModeContext} from '../context/DarkModeContext'
import HomePageList from "./HomePageList"
// import toggleSwitch from "./ToggleSwitch";


const config = {
  apiUrl: 'https://type.fit/api/quotes',

}


function HomePage({onUser}) {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const [quotes, setQuotes] = useState([])

    // const handleDarkModeClick = () => {
    //     toggleDarkMode();
    // }

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
                {/* <Icon size ="big" onClick ={handleDarkModeClick} className={darkMode ? "toggle off" : "toggle on"}></Icon> */}
                <br />
                <div className="quotes">
                        <HomePageList quotes={quotes}/>
                </div>
                <br />
                <div className="hp-wrapper">
                    <div>
                        {/* <h1><u>Welcome! {onUser.username}</u></h1> */}
                        <h2>Studies say it take <u>90 days</u> to create a new habit<br />This app was created to help you reach your goal</h2>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default HomePage;