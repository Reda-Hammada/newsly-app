import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SettingsPage from './Pages/SetttingsPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/Settings' Component={SettingsPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
