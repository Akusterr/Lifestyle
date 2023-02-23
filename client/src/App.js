import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import DailyHabitPage from "./components/DailyHabitPage";
import HabitCalendarPage from "./components/HabitCalendarPage"
import NewHabitFormPage from './components/NewHabitFormPage';
import WeeklyHabitStatsPage from './components/WeeklyHabitStatsPage';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dailyHabitPage" element={<DailyHabitPage />} />
        <Route path="/habitCalendarPage" element={<HabitCalendarPage />} />
        <Route path="/newHabitFormPage" element={<NewHabitFormPage />} />
        <Route path="/weeklyHabitStatsPage" element={<WeeklyHabitStatsPage />} />
      </Routes>
    </Router>
 
  );
}

export default App;
