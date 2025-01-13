import React, { useState } from 'react';
import AddApplicationForm from './AddApplicationForm';
import Analytics from './Analytics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Applications = () => {
  const [applications, setApplications] = useState([
    {
      jobTitle: "Frontend Developer",
      company: "Tech Corp",
      status: "In Progress",
      date: "2024-01-15",
    },
  ]);

  const [editIndex, setEditIndex] = useState(null);

  const addApplication = (newApp) => {
    if (editIndex !== null) {
      const updatedApplications = [...applications];
      updatedApplications[editIndex] = newApp;
      setApplications(updatedApplications);
      setEditIndex(null);
    } else {
      setApplications([...applications, newApp]);
    }
  };

  const handleDelete = (index) => {
    const updatedApplications = applications.filter((_, i) => i !== index);
    setApplications(updatedApplications);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="p-6">
      <AddApplicationForm onAdd={addApplication} editIndex={editIndex} application={applications[editIndex]} />
     
      <table className="w-full mt-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="p-4 text-left">Job Title</th>
            <th className="p-4 text-left">Company</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, index) => (
            <tr key={index} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all">
              <td className="p-4">{app.jobTitle}</td>
              <td className="p-4">{app.company}</td>
              <td className="p-4">{app.status}</td>
              <td className="p-4">{app.date}</td>
              <td className="p-4">
                <button className="text-blue-500 hover:text-blue-600 transition-colors duration-300" onClick={() => handleEdit(index)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="text-red-500 hover:text-red-600 ml-2 transition-colors duration-300" onClick={() => handleDelete(index)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Applications;
