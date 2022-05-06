
const App = () => {
  return (
    <div className="container">
      <DashboardPage />
      <Button />
      <footer className="footer">
        <AddProject />
      </footer>
    </div>
  );
};

import { Route, Routes } from "react-router-dom";
//import "./App.css";
import ExpensesPage from "./Pages/Expenses";
import LoginPage from "./Pages/LoginPage";
import Button from "./Pages/Button";
import DashboardPage from "./Pages/DashboardPage";
import AddProject from "./Pages/AddProject";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>

    </div>
  );
}

export default App;
