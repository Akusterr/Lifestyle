import React, { useState, useContext } from "react";
import "./styles/RegistrationPage.css";
import {Button, Form, Message} from 'semantic-ui-react';
import { Link } from "react-router-dom"
import {DarkModeContext} from '../context/DarkModeContext'


function RegistrationPage() {
  const [userName, setUserName] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userError, setUserError] = useState("")

  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

  const handleSubmit = (e) => {
    e.preventDefault()

    let info = {
      username: userName,
      password: userPassword,
      email: userEmail
    }

    fetch("/signup", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(info)
        })

        .then(resp => resp.json())
        .then(console.log)
    }



    return (
        <div className={darkMode ? `dark` : `light`}>
            <div className="rp-wrapper">
                <div>


                    <Form warning size="large" onSubmit={handleSubmit} className="registerForm">
                        <h1>Create Your Account</h1>
                        <Form.Input type="text" name="username" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                        <Form.Input type="text" name="email" placeholder="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                        <Form.Input type="password" name="password" placeholder="Password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                        <Button type="submit">Register</Button>
                    </Form>


                </div>
                <br />
                <div>
                    <h2>
                        <Link exact to='/loginPage'>Already have an account? <u>Login here</u></Link>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;