import React, {useState} from "react";
import "./styles/LoginPage.css";
import { Link } from "react-router-dom"


function LoginPage() {
    const [login, setLogin] = useState(null)
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")

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
        .then(resp => resp.json())
        .then(user => newPerson(user))

        const newPerson = (user) => {
            setLogin(user)
            window.location.href = 'http://localhost:4000/homePage'
        }
      
    }

    // const addPerson = (user) => {
    //     setLogin(user)
        // window.location.href = 'http://localhost:4000/homePage'
        // {login ? (console.log("logged in")) : (console.log("not logged in!"))}
    


    return (
        <div className="lp-wrapper">
            <form onSubmit={handleSubmit} className="loginForm">
                <h1>Login</h1>
                <input type="text" name="email" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)}/>
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          
                <button type="submit">submit</button>
            </form>
            <div>
                <h2>
                    Still need to sign up? Register <Link exact to='/registrationPage'>Here</Link>
                </h2>
            </div>
        </div>
    );
} 

export default LoginPage;