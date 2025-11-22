import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Graduation from './components/Graduation';
import PageToggle from './components/PageToggle';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !darkMode ? 'dark' : 'light';
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Router>
      <div className="App">
        <PageToggle />
        <Routes>
          <Route 
            path="/" 
            element={<Portfolio darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} 
          />
          <Route 
            path="/graduation" 
            element={<Graduation />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
