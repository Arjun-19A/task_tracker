import { useState, useEffect, useRef } from "react";

function TaskForm({ addTask, editingTask, updateTask }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "Pending",
    dueDate: "",
  });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title,
        description: editingTask.description,
        priority: editingTask.priority,
        status: editingTask.status,
        dueDate: editingTask.dueDate ? editingTask.dueDate.split("T")[0] : "",
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const titleRef = useRef(null);

  useEffect(() => {
    if (editingTask) {
      titleRef.current?.focus();
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Title is required");
      return;
    }

    if (editingTask) {
      updateTask(editingTask._id, formData);
    } else {
      addTask(formData);
    }

    setFormData({
      title: "",
      description: "",
      priority: "Medium",
      status: "Pending",
      dueDate: "",
    });
  };

  return (
    <div
      className={`bg-white p-6 rounded-xl shadow transition-colors duration-300 h-fit  ${
        editingTask
          ? "border-2 border-blue-500 shadow-blue-200"
          : "border border-gray-200"
      }`}
    >
      <h2 className="text-2xl font-bold mb-5">
        {editingTask ? "Update Task" : "Add New Task"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="title" className="text-[#75777B] font-medium ">
          Task Title
        </label>
        <input
          type="text"
          name="title"
          ref={titleRef}
          placeholder="What needs to be done?"
          value={formData.title}
          onChange={handleChange}
          className="border-[#75777baa] border bg-[#E5EEFF] p-3 rounded-xl w-full"
        />

        <label htmlFor="description" className="text-[#75777B] font-medium">
          Description
        </label>
        <textarea
          name="description"
          placeholder="Briefly describe your task"
          rows="5"
          value={formData.description}
          onChange={handleChange}
          className="border-[#75777baa] border bg-[#E5EEFF] p-3 rounded-xl w-full overflow-auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="priority" className="text-[#75777B] font-medium">
              Priority
            </label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full bg-[#E5EEFF] border-[#75777baa] border p-3 rounded-xl"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <div>
            <label htmlFor="status" className="text-[#75777B] font-medium">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full bg-[#E5EEFF] border border-[#75777baa] p-3 rounded-xl"
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        <label htmlFor="dueDate" className="text-[#75777B] font-medium">
          Due Date
        </label>
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="w-full border-[#75777baa] border bg-[#E5EEFF] p-3 rounded-xl cursor-pointer outline-none"
        />

        <button className="w-full bg-[#0E0F40] text-white py-3 rounded-xl">
          {editingTask ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
