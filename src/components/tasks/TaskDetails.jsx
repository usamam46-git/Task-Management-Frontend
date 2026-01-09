/* eslint-disable no-unused-vars */
import { useState } from 'react';
import AddSubTaskForm from './AddSubTaskForm';
import { taskService } from '../../services/tasks';

const TaskDetails = ({ task }) => {
  const [showSubTaskForm, setShowSubTaskForm] = useState(false);
  const [subTasks, setSubTasks] = useState(task.subTasks || []);

  const handleSubTaskAdded = (newSubTask) => {
    setSubTasks((prev) => [...prev, newSubTask]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">{task.title}</h1>
      <button
        onClick={() => setShowSubTaskForm(true)}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Add Subtask
      </button>

      {showSubTaskForm && (
        <AddSubTaskForm
          task={task}
          onClose={() => setShowSubTaskForm(false)}
          onAdded={handleSubTaskAdded}
        />
      )}

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Subtasks</h2>
        {subTasks.length === 0 ? (
          <p>No subtasks yet</p>
        ) : (
          <ul className="space-y-2">
            {subTasks.map((st, idx) => (
              <li key={idx} className="p-2 border rounded">
                <p><strong>Date:</strong> {new Date(st.date).toLocaleDateString()}</p>
                <p><strong>Description:</strong> {st.description}</p>
                <p><strong>Status:</strong> {st.status}</p>
                <p><strong>Hours:</strong> {st.hoursSpent}</p>
                <p><strong>Remarks:</strong> {st.remarks}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskDetails;
