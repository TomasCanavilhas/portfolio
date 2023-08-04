import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from "./components/Skills";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <Router>
            <div>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Routes>
                    <Route path="/" element={<Home darkMode={darkMode} />} />
                    <Route path="/about" element={<About darkMode={darkMode} />} />
                    <Route path="/skills" element={<Skills darkMode={darkMode} />} />
                    <Route path="/projects" element={<Projects darkMode={darkMode} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
