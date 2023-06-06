import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' Component={HomePage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
