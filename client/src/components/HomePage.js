import React from "react";
import "./styles/HomePage.css";
import { Link } from "react-router-dom"


function HomePage() {

    return (
        <div className="hp-wrapper">
            <div>
                <h1>
                    Ready to create your ideal <strong>Lifestyle</strong>? <Link exact to='/newHabitFormPage'>Create a habit!</Link>
                </h1>
            </div>
        </div>
        
    );
}

export default HomePage;