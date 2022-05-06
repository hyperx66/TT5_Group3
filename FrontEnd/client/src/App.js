import { Route, Routes } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import ExpensesPage from "./Pages/Expenses";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/expenses" element={<ExpensesPage />} />
      </Routes>
    </div>
  );
=======
import LoginPage from "./Pages/LoginPage";
import { Route} from 'react-router-dom'

function App() {
  return (
  //<div className="App">Hello world</div>;
  <Route exact path="/">
  <LoginPage />
</Route>
  )
>>>>>>> b1840f476bcfb9b21fd6cbe1295f5b60d8e4902e
}

export default App;
