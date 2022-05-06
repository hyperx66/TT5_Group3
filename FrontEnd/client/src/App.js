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
}

export default App;
