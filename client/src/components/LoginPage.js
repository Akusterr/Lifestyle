import React, {useState, useContext} from "react";
import "./styles/LoginPage.css";
import { Link } from "react-router-dom"
import {DarkModeContext} from '../context/DarkModeContext'
import {Button, Grid, Form, Divider, Segment} from 'semantic-ui-react';


function LoginPage() {
    const [login, setLogin] = useState(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

    const handleSubmit = (e)=> {
        e.preventDefault()
        let userLogin = {
            email: email,
            password: password
        }

        fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(userLogin)
    })

        .then((resp) => resp.json())
        .then((data) => {
            if(data.error) {
                setError(data.error)
            } else {
                setLogin(data)
                window.location.href = 'http://localhost:4000/homePage'
            }
        })
      
    }


    return (
        <div className={darkMode ? `dark` : `light`}>
            <div className="lp-wrapper">
                <Form unstackable onSubmit={handleSubmit} className="loginForm">
                    <h1>Login</h1>
                    <Form.Input type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Form.Input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <br />
                    <div>
                    <p>{error ? <div>{error} <br /> Please try again</div> : null}</p>
                    </div>
                    <Button type="submit">submit</Button>
                </Form>
                <div>
                    <h2>
                        <Link exact to='/registrationPage'><u>Still need to sign up?</u></Link>
                    </h2>
                </div>
                <br />
                <h1><u>LIFESTYLE</u><br /></h1>
                <div className="title-text">
                    <p>Helps you build new habits</p>
                </div>
            </div>
        </div>
    );
} 

export default LoginPage;