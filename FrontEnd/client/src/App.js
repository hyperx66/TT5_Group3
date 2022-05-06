<<<<<<< HEAD
import React from 'react'
import './App.css'
import Button from './Pages/Button'
import DashboardPage from './Pages/DashboardPage'
import AddProject from './Pages/AddProject'

const App = () => {
  return(
    <div className = 'container'>
      <DashboardPage />
      <Button /> 
      <footer className = "footer">
      <AddProject/>
      </footer>
    </div>
  )
=======
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ExpensesPage from "./Pages/Expenses";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/expenses" element={<ExpensesPage />} />
      </Routes>
    </div>
  );
>>>>>>> 88ac2663b28147829a7b435c119a4c870f81e764
}
export default App;
