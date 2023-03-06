import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import Draggable from 'react-draggable';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import DailyHabitPage from "./components/DailyHabitPage";
import HabitCalendarPage from "./components/HabitCalendarPage"
import WeeklyHabitStatsPage from './components/WeeklyHabitStatsPage';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';


function App() {
  const [onUser, setOnUser] = useState(null);


  useEffect(() => {
    fetch("/me")
      .then(resp => resp.json())
      .then(user => newUser(user))
  }, [])

  const newUser = (user) => {
    setOnUser(user)
  }
  


  return (
    <div>
    <DarkModeProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<Navbar onUser={onUser} setOnUser={setOnUser} />} >

        <Route path="/loginPage" element={<LoginPage onUser={onUser} setOnUser={setOnUser} />} />
        <Route path="/dailyHabitPage" element={<DailyHabitPage Draggable={Draggable} onUser={onUser} setOnUser={setOnUser} />} />
        <Route path="/habitCalendarPage" element={<HabitCalendarPage onUser={onUser} setOnUser={setOnUser} />} />
        <Route path="/weeklyHabitStatsPage" element={<WeeklyHabitStatsPage onUser={onUser} setOnUser={setOnUser} />} />
        <Route path="/registrationPage" element={<RegistrationPage />} />
        <Route path="/homePage" element={<HomePage />} />

        </Route>
      </Routes>
    </Router>
    </DarkModeProvider>
    </div>
 
  );
}

export default App;
