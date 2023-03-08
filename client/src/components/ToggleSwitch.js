
import React, {useContext} from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { Icon } from 'semantic-ui-react'
import HomePage from "./HomePage"

function toggleSwitch() {
    // const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    // const handleClick = () => {
    //     toggleDarkMode()
    // }


    return(
        <div>
            <Icon> 
                {/* {darkMode ? "toggle on" : "toggle off"} onClick={handleClick} */}
            </Icon>
        </div>
    )
}

export default toggleSwitch;