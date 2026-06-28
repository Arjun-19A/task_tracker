import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask, setEditingTask }) {
  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-5 text-center">
        <h2 className="text-2xl font-semibold">No Tasks Found</h2>

        <p className="text-gray-500 mt-2">Create your first task.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 ">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          deleteTask={deleteTask}
          setEditingTask={setEditingTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
