// import React from "react";
// import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
// import Applications from "./components/Applications";
// import Analytics from "./components/Analytics";


// const App = () => {
//   return (
//     <Router>
//       <div className="min-h-screen flex bg-gray-50">
//         {/* Sidebar */}
//         <div className="w-64 bg-white shadow-lg p-4">
//           {/* Application Name */}
//           <h2 className="text-2xl font-bold mb-8">JobTracker</h2>
//           <nav>
//             <ul className="space-y-4">
//               <li>
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     `flex items-center p-3 rounded-lg hover:bg-gray-200 transition-all ${isActive ? "bg-gray-200 font-semibold" : ""}`
//                   }
//                 >
//                   <span className="material-icons mr-3 text-blue-500">dashboard</span> Applications
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/analytics"
//                   className={({ isActive }) =>
//                     `flex items-center p-3 rounded-lg hover:bg-gray-200 transition-all ${isActive ? "bg-gray-200 font-semibold" : ""}`
//                   }
//                 >
//                   <span className="material-icons mr-3 text-green-500">analytics</span> Analytics
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/calendar"
//                   className={({ isActive }) =>
//                     `flex items-center p-3 rounded-lg hover:bg-gray-200 transition-all ${isActive ? "bg-gray-200 font-semibold" : ""}`
//                   }
//                 >
//                   <span className="material-icons mr-3 text-yellow-500">calendar_today</span> Calendar
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/companies"
//                   className={({ isActive }) =>
//                     `flex items-center p-3 rounded-lg hover:bg-gray-200 transition-all ${isActive ? "bg-gray-200 font-semibold" : ""}`
//                   }
//                 >
//                   <span className="material-icons mr-3 text-purple-500">business</span> Companies
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/settings"
//                   className={({ isActive }) =>
//                     `flex items-center p-3 rounded-lg hover:bg-gray-200 transition-all ${isActive ? "bg-gray-200 font-semibold" : ""}`
//                   }
//                 >
//                   <span className="material-icons mr-3 text-gray-500">settings</span> Settings
//                 </NavLink>
//               </li>
//             </ul>
//           </nav>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 p-8">
//           {/* Top Bar */}
//           <div className="flex justify-between items-center mb-8">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="border border-gray-300 rounded-lg p-2 pl-10 focus:ring focus:ring-blue-400 focus:outline-none transition-all"
//               />
//               <span className="material-icons absolute left-2 top-2 text-gray-400">search</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <span className="material-icons text-gray-600">notifications</span>
//               <span className="material-icons text-gray-600">account_circle</span>
//             </div>
//           </div>

//           {/* Routes */}
//           <Routes>
//             <Route path="/" element={<Applications />} />
//             <Route path="/analytics" element={<Analytics />} />
//             <Route path="/calendar" element={<div className="text-2xl">Calendar Page (Coming Soon)</div>} />
//             <Route path="/companies" element={<div className="text-2xl">Companies Page (Coming Soon)</div>} />
//             <Route path="/settings" element={<div className="text-2xl">Settings Page (Coming Soon)</div>} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

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

