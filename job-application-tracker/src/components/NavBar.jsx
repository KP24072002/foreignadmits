import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="w-1/4 min-h-screen bg-gray-800 text-white p-4">
      <nav>
        <NavLink to="/ApplicationsTable"  className="block mb-2">Applications</NavLink>
        <NavLink to="/AnalyticsOverview"  className="block">Analytics</NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
