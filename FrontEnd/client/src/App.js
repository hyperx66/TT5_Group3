import "./App.css";
import LoginPage from "./Pages/LoginPage";
import { Route} from 'react-router-dom'

function App() {
  return (
  //<div className="App">Hello world</div>;
  <Route exact path="/">
  <LoginPage />
</Route>
  )
}

export default App;
