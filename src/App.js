import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SettingsPage from "./Pages/SetttingsPage";
import { useState, createContext } from "react";

export const AuthContext = createContext();

function App() {
  const [authState, setAuthState] = useState({
    whichAuth: "",
    isAuth: false,
  });

  const updateAuthState = (whichAuthValue, isAuthValue) => {
    setAuthState({
      whichAuth: whichAuthValue,
      isAuth: isAuthValue,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, updateAuthState }}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/Settings" Component={SettingsPage} />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
