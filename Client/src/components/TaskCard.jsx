import { FaEdit, FaTrash } from "react-icons/fa";

function TaskCard({ task, deleteTask, setEditingTask }) {
  const priorityColor = {
    Low: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    High: "bg-red-100 text-red-700",
  };

  const statusColor = {
    Pending: "bg-gray-100 text-gray-700",
    "In Progress": "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dueDate = new Date(task.dueDate);
  dueDate.setHours(0, 0, 0, 0);

  const isOverdue = task.status !== "Completed" && dueDate < today;

  return (
    <div
      className={`rounded-xl shadow transition-colors duration-300 p-5 ${
        isOverdue ? "bg-red-200" : "bg-white"
      } `}
    >
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">{task.title}</h2>

        <div className="space-x-3">
          <button onClick={() => setEditingTask(task)}>
            <FaEdit className="text-blue-600 text-xl" />
          </button>

          <button onClick={() => deleteTask(task._id)}>
            <FaTrash className="text-red-600 text-xl" />
          </button>
        </div>
      </div>

      <p className="text-gray-600 mt-3">{task.description}</p>

      <div className="flex gap-2 mt-4">
        <span
          className={`px-3 py-1 rounded-full text-sm ${priorityColor[task.priority]}`}
        >
          {task.priority}
        </span>

        <span
          className={`px-3 py-1 rounded-full text-sm ${statusColor[task.status]}`}
        >
          {task.status}
        </span>

        {isOverdue && (
          <span className="px-2 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold">
            Overdue
          </span>
        )}
      </div>

      {task.dueDate && (
        <p
          className={`mt-4 text-sm ${isOverdue ? "text-red-600 font-semibold" : "text-gray-500"}`}
        >
          Due: {new Date(task.dueDate).toLocaleDateString("en-GB")}
        </p>
      )}
    </div>
  );
}

export default TaskCard;
