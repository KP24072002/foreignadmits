import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faHourglassHalf, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Analytics = ({ applications = [] }) => {
  const total = applications.length;
  const inProgress = applications.filter((app) => app.status === 'In Progress').length;
  const accepted = applications.filter((app) => app.status === 'Accepted').length;
  const rejected = applications.filter((app) => app.status === 'Rejected').length;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Analytics Overview</h2>
      <div className="grid grid-cols-4 gap-4">
        {[
          { count: total, label: 'Total Applications', icon: faTasks, color: 'blue' },
          { count: inProgress, label: 'In Progress', icon: faHourglassHalf, color: 'yellow' },
          { count: accepted, label: 'Accepted', icon: faCheckCircle, color: 'green' },
          { count: rejected, label: 'Rejected', icon: faTimesCircle, color: 'red' },
        ].map((item, index) => (
          <div
            key={index}
            className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className={`text-${item.color}-500 text-3xl mr-4 transition-colors duration-300 hover:text-${item.color}-700`}
            />
            <div>
              <h3 className="text-xl font-bold transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-300">
                {item.count}
              </h3>
              <p className="transition-colors duration-300 hover:text-gray-600 dark:hover:text-gray-400">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
