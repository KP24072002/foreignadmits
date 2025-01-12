import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChartPie, faCalendarAlt, faBuilding, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white dark:bg-gray-800 shadow-lg transition-all">
      <div className="flex items-center justify-center py-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">JobTracker</h2>
      </div>
      <ul className="mt-8">
        <li className="p-4">
          <NavLink
            to="/applications"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all ${
                isActive ? 'bg-gray-200 dark:bg-gray-600' : ''
              }`
            }
          >
            <FontAwesomeIcon icon={faBriefcase} className="mr-4" />
            Applications
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all ${
                isActive ? 'bg-gray-200 dark:bg-gray-600' : ''
              }`
            }
          >
            <FontAwesomeIcon icon={faChartPie} className="mr-4" />
            Analytics
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all ${
                isActive ? 'bg-gray-200 dark:bg-gray-600' : ''
              }`
            }
          >
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-4" />
            Calendar
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/companies"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all ${
                isActive ? 'bg-gray-200 dark:bg-gray-600' : ''
              }`
            }
          >
            <FontAwesomeIcon icon={faBuilding} className="mr-4" />
            Companies
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all ${
                isActive ? 'bg-gray-200 dark:bg-gray-600' : ''
              }`
            }
          >
            <FontAwesomeIcon icon={faCog} className="mr-4" />
            Settings
          </NavLink>
        </li>
        <li className="p-4">
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-4" />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;



