import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import API from "./services/api";

import TopNavbar from "./components/TopNavbar";
import Dashboard from "./components/Dashboard";
import FilterBar from "./components/FilterBar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  const fetchTasks = async () => {
    try {
      const res = await API.get("/");
      setTasks(res.data);
    } catch (err) {
      toast.error("Unable to fetch tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleEdit = (task) => {
    setEditingTask(task);
    toast.info("✏️ Editing task. Update the details in the form.", {
      position: "top-center",
      autoClose: 3000,
      style: { width: "400px" },
    });
  };

  const addTask = async (task) => {
    try {
      const res = await API.post("/", task);

      setTasks((prev) => [res.data, ...prev]);

      toast.success("Task Added");
    } catch (err) {
      toast.error("Unable to add task");
    }
  };

  const updateTask = async (id, task) => {
    try {
      const res = await API.put(`/${id}`, task);

      setTasks((prev) => prev.map((t) => (t._id === id ? res.data : t)));

      setEditingTask(null);

      toast.success("Task Updated");
    } catch (err) {
      toast.error("Unable to update");
    }
  };

  const deleteTask = async (id) => {
    if (!window.confirm("Delete Task?")) return;

    try {
      await API.delete(`/${id}`);

      setTasks((prev) => prev.filter((task) => task._id !== id));

      toast.success("Task Deleted");
    } catch (err) {
      toast.error("Unable to delete");
    }
  };

  const filteredTasks = tasks
    .filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesPriority =
        priorityFilter === "All" || task.priority === priorityFilter;

      const matchesStatus =
        statusFilter === "All" || task.status === statusFilter;

      return matchesSearch && matchesPriority && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "Newest":
          return new Date(b.createdAt) - new Date(a.createdAt);

        case "Oldest":
          return new Date(a.createdAt) - new Date(b.createdAt);

        case "Priority":
          const order = {
            High: 3,
            Medium: 2,
            Low: 1,
          };

          return order[b.priority] - order[a.priority];

        default:
          return 0;
      }
    });

  return (
    <div className="h-full bg-[#f2efff81]">
      <main className="flex-1 lg:px-10 md:px-8">
        <TopNavbar search={search} setSearch={setSearch} />

        <div className="p-6 lg:px-8 lg:mx-8 md:px-10">
          <Dashboard tasks={tasks} />

          <div className="grid lg:grid-cols-3 gap-6 mt-6 md:px-6">
            <TaskForm
              addTask={addTask}
              editingTask={editingTask}
              updateTask={updateTask}
            />

            <div className="lg:col-span-2">
              <FilterBar
                priorityFilter={priorityFilter}
                setPriorityFilter={setPriorityFilter}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />

              <TaskList
                tasks={filteredTasks}
                deleteTask={deleteTask}
                setEditingTask={handleEdit}
              />
            </div>
          </div>
        </div>
      </main>

      <ToastContainer />
    </div>
  );
}

export default App;
