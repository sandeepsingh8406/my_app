import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import "./App.css";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  

  const ToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#222222";
      document.title = 'Textutils | Dark mode';
      ShowAlert("success", " Dark mode turned on");
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = 'Textutils | Light mode'
      ShowAlert("success", " Light mode turned on");
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }
  };

  const ShowAlert = (alertType, alertMessage) => {
    setAlert({
      type: alertType,
      message: alertMessage,
    });
  };

  return (
    <>
    <Router>
       <Navbar project="TextUtils" root="Home" about="About us" modeSelector={ToggleMode} mode={mode}/>
       <Alert alert={alert} />      
        <Routes>
          <Route exact path="/" element={<Textform mode={mode}/>} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
