import { FaTasks, FaClock, FaSpinner, FaCheckCircle } from "react-icons/fa";

function Dashboard({ tasks }) {
  const total = tasks.length;

  const pending = tasks.filter((task) => task.status === "Pending").length;

  const inProgress = tasks.filter(
    (task) => task.status === "In Progress",
  ).length;

  const completed = tasks.filter((task) => task.status === "Completed").length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-[#141545] rounded-xl shadow p-5 flex items-center justify-between">
        <div>
          <h3 className="text-[#68788F]">Total Tasks</h3>
          <p className="text-4xl font-bold text-[white]">
            {total.toString().padStart(2, "0")}
          </p>
        </div>
        <FaTasks className="text-4xl text-[#68788F]" />
      </div>

      <div className="bg-white rounded-xl shadow p-5 flex items-center justify-between">
        <div>
          <h3 className="text-[#2E3134]">Pending</h3>
          <p className="text-4xl font-bold text-[#020135]">
            {pending.toString().padStart(2, "0")}
          </p>
        </div>
        <FaClock className="text-4xl text-[#A0A3FF]" />
      </div>

      <div className="bg-white rounded-xl shadow p-5 flex items-center justify-between">
        <div>
          <h3 className="text-[#2E3134]">In Progress</h3>
          <p className="text-4xl font-bold text-[#020135]">
            {inProgress.toString().padStart(2, "0")}
          </p>
        </div>
        <FaSpinner className="text-4xl text-[#494BD6]" />
      </div>

      <div className="bg-white rounded-xl shadow p-5 flex items-center justify-between">
        <div>
          <h3 className="text-[#2E3134]">Completed</h3>
          <p className="text-4xl font-bold text-[#020135]">
            {completed.toString().padStart(2, "0")}
          </p>
        </div>
        <FaCheckCircle className="text-4xl text-[#2F2EBE]" />
      </div>
    </div>
  );
}

export default Dashboard;
