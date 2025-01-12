import { useState, useEffect } from 'react';

const AddApplicationForm = ({ onAdd, editIndex, application }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    status: 'In Progress',
    date: '',
  });

  useEffect(() => {
    if (editIndex !== null) {
      // If in edit mode, pre-fill the form with existing data
      setFormData(application);
      setIsVisible(true);  // Show the form if editing
    } else {
      setFormData({ jobTitle: '', company: '', status: 'In Progress', date: '' });
      setIsVisible(false);  // Hide the form if adding new
    }
  }, [editIndex, application]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);  // Add or update the application
    setFormData({ jobTitle: '', company: '', status: 'In Progress', date: '' });  // Reset form
    setIsVisible(false);  // Hide the form after submit
  };

  return (
    <>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all flex items-center"
        onClick={() => setIsVisible(true)} // Show form
      >
        {editIndex === null ? 'Add Application' : 'Edit Application'}
      </button>

      {isVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-end z-10 transition-opacity">
          <div className="w-1/3 bg-white dark:bg-gray-900 p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              {editIndex === null ? 'Add New Application' : 'Edit Application'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-200">Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  value={formData.jobTitle}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-200">Company</label>
                <input
                  type="text"
                  name="company"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-200">Status</label>
                <select
                  name="status"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="In Progress">In Progress</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-200">Application Date</label>
                <input
                  type="date"
                  name="date"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
              >
                {editIndex === null ? 'Add' : 'Update'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddApplicationForm;
