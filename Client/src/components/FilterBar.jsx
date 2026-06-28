const FilterBar = ({
  priorityFilter,
  setPriorityFilter,
  statusFilter,
  setStatusFilter,
  sortBy,
  setSortBy,
}) => {
  const clearFilters = () => {
    setPriorityFilter("All");
    setStatusFilter("All");
    setSortBy("Newest");
  };
  const hasFilters =
    priorityFilter !== "All" || statusFilter !== "All" || sortBy !== "Newest";

  return (
    <div className="py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col sm:flex-row gap-3 w-full md:flex-1">
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="w-full sm:flex-1 md:max-w-55 bg-[#EFF4FF] rounded-lg px-4 py-2 outline-none"
        >
          <option value="All">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full sm:flex-1 md:max-w-55 bg-[#EFF4FF] rounded-lg px-4 py-2 outline-none"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        {hasFilters && (
          <button
            onClick={clearFilters}
            className="text-red-500 font-medium hover:text-red-600 transition cursor-pointer"
          >
            Clear Filters
          </button>
        )}
      </div>
      <div className="flex items-center justify-around gap-2 w-full md:w-auto shrink-0">
        <span className="text-[#0E0F40] text-base md:text-lg whitespace-nowrap">
          Sorted by:
        </span>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-[#EFF4FF] rounded-lg px-4 py-2
                 font-semibold text-base md:text-lg
                 outline-none cursor-pointer min-w-35"
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
          <option value="Priority">Priority</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
