import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import DailyHabitPage from "./components/DailyHabitPage";
import HabitCalendarPage from "./components/HabitCalendarPage"
import NewHabitFormPage from './components/NewHabitFormPage';
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
    <Router>
      <Routes>
        <Route exact path="/" element={<Navbar onUser={onUser} setOnUser={setOnUser} />} >

        <Route path="/loginPage" element={<LoginPage onUser={onUser} setOnUser={setOnUser} />} />
        <Route path="/dailyHabitPage" element={<DailyHabitPage onUser={onUser} setOnUser={setOnUser} />} />
        <Route path="/habitCalendarPage" element={<HabitCalendarPage onUser={onUser} setOnUser={setOnUser} />} />
        <Route path="/newHabitFormPage" element={<NewHabitFormPage onUser={onUser} />}/>
        <Route path="/weeklyHabitStatsPage" element={<WeeklyHabitStatsPage onUser={onUser} setOnUser={setOnUser} />} />
        <Route path="/registrationPage" element={<RegistrationPage />} />
        <Route path="/homePage" element={<HomePage />} />

        </Route>
      </Routes>
    </Router>
    </div>
 
  );
}

export default App;
