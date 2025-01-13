import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faHourglassHalf, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Analytics = ({ applications = [] }) => {
  const total = applications.length;
  const inProgress = applications.filter((app) => app.status === 'In Progress').length;
  const accepted = applications.filter((app) => app.status === 'Accepted').length;
  const rejected = applications.filter((app) => app.status === 'Rejected').length;

  const analyticsData = [
    { count: total, label: 'Total Applications', icon: faTasks, color: 'blue' },
    { count: inProgress, label: 'In Progress', icon: faHourglassHalf, color: 'yellow' },
    { count: accepted, label: 'Accepted', icon: faCheckCircle, color: 'green' },
    { count: rejected, label: 'Rejected', icon: faTimesCircle, color: 'red' },
  ];

  return (
    
    <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Analytics Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {analyticsData.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className={`text-${item.color}-500 text-3xl sm:text-4xl mr-4 transition-colors duration-300 hover:text-${item.color}-600`}
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {item.count}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
