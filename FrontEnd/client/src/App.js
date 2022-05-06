import React from "react";
import "./App.css";
import Button from "./Pages/Button";
import DashboardPage from "./Pages/DashboardPage";
import AddProject from "./Pages/AddProject";

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
export default App;
