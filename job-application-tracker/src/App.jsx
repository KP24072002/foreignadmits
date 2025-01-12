
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Applications from './components/Applications';
import Analytics from './components/Analytics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen bg-gray-100 dark:bg-gray-900 transition-all">
          {/* Header */}
          <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">JobTracker</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute top-3 right-3 text-gray-600 dark:text-gray-300"
                />
              </div>
              <FontAwesomeIcon
                icon={faUserCircle}
                className="text-3xl text-gray-900 dark:text-white cursor-pointer"
              />
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-yellow-500" />
              </button>
            </div>
          </header>

          {/* Main Content */}
          <main className="p-6">
            <Routes>
              <Route path="/applications" element={<Applications />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/calendar" element={<div className="text-gray-900 dark:text-white"><h2>Calendar Section (Coming Soon)</h2></div>} />
              <Route path="/companies" element={<div className="text-gray-900 dark:text-white"><h2>Companies Section (Coming Soon)</h2></div>} />
              <Route path="/settings" element={<div className="text-gray-900 dark:text-white"><h2>Settings Section (Coming Soon)</h2></div>} />
              <Route path="/" element={<Applications />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;

