import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faChartPie,
  faCalendarAlt,
  faBuilding,
  faCog,
  faSignOutAlt,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`h-screen ${isOpen ? 'w-64' : 'w-20'} bg-white dark:bg-gray-800 shadow-lg transition-all`}>
      <div className="flex items-center justify-between p-4">
        <h2 className={`${isOpen ? 'block' : 'hidden'} text-2xl font-bold text-gray-900 dark:text-white`}>
          JobTracker
        </h2>
        <button
          className="text-gray-900 dark:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <ul className="mt-8">
        {[
          { to: '/applications', icon: faBriefcase, label: 'Applications' },
          { to: '/applications', icon: faChartPie, label: 'Analytics' },
          { to: '/calendar', icon: faCalendarAlt, label: 'Calendar' },
          { to: '/companies', icon: faBuilding, label: 'Companies' },
          { to: '/settings', icon: faCog, label: 'Settings' },
        ].map((item, index) => (
          <li key={index} className="p-4">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all ${
                  isActive ? 'bg-gray-200 dark:bg-gray-600' : ''
                }`
              }
            >
              <FontAwesomeIcon icon={item.icon} className="mr-4" />
              <span className={`${isOpen ? 'block' : 'hidden'}`}>{item.label}</span>
            </NavLink>
          </li>
        ))}
        <li className="p-4">
          <button className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-4" />
            <span className={`${isOpen ? 'block' : 'hidden'}`}>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

;
