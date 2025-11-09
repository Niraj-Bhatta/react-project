import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
       <Router> 
         Navbar and Alert should be outside Routes 
        <Navbar title="Niraj-Bhatta" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
            <TextForm/>
        <div className="container my-3 mx-3">
          <Routes>
             {/* <Route path="/about" element={<About />} />  */}
            <Route path="/home" element={<TextForm heading="Enter the text to analyze" />} />
          </Routes> 
        </div>
      </Router> 
    </>
  );
}

export default App;
