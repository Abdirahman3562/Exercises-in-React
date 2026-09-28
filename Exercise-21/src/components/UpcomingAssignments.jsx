const assignments = [
  {
    title: "Build a Todo App",
    course: "React Fundamentals",
    due: "2024-03-20",
    status: "pending",
  },
  {
    title: "API Integration",
    course: "JavaScript Advanced",
    due: "2024-03-18",
    status: "completed",
  },
  {
    title: "Design System",
    course: "UI/UX Design",
    due: "2024-03-25",
    status: "in-progress",
  },
];

const statusStyles = {
  pending: "bg-red-100 text-red-600",
  completed: "bg-green-100 text-green-600",
  "in-progress": "bg-yellow-100 text-yellow-700",
};

const UpcomingAssignments = () => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-sm font-bold text-gray-900">
        Upcoming Assignments
      </h2>

      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div
            key={assignment.title}
            className="flex items-start justify-between gap-3"
          >
            <div>
              <h3 className="text-xs font-semibold text-gray-800">
                {assignment.title}
              </h3>

              <p className="mt-0.5 text-[10px] text-gray-500">
                {assignment.course}
              </p>
            </div>

            <div className="text-right">
              <span
                className={`rounded-full px-2 py-1 text-[9px] font-semibold ${statusStyles[assignment.status]}`}
              >
                {assignment.status}
              </span>

              <p className="mt-1 text-[9px] text-gray-400">
                Due {assignment.due}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingAssignments;