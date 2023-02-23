import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import DailyHabitPage from "./components/DailyHabitPage";
import HabitCalendarPage from "./components/HabitCalendarPage"
import NewHabitFormPage from './components/NewHabitFormPage';
import WeeklyHabitStatsPage from './components/WeeklyHabitStatsPage';
import RegistrationPage from './components/RegistraionPage';
import LoginPage from './components/LoginPage';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dailyHabitPage" element={<DailyHabitPage />} />
        <Route path="/habitCalendarPage" element={<HabitCalendarPage />} />
        <Route path="/newHabitFormPage" element={<NewHabitFormPage />} />
        <Route path="/weeklyHabitStatsPage" element={<WeeklyHabitStatsPage />} />
        <Route path="/registrationPage" element={<RegistrationPage />} />
        <Route path="/homePage" element={<HomePage />} />
      </Routes>
    </Router>
 
  );
}

export default App;
