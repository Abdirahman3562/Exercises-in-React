const announcements = [
  {
    title: "New Course Available",
    description: "Check out our new TypeScript course!",
    time: "2 hours ago",
  },
  {
    title: "Maintenance Notice",
    description: "Platform updates are scheduled for tonight.",
    time: "5 hours ago",
  },
];

const Announcements = () => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-sm font-bold text-gray-900">
        Announcements
      </h2>

      <div className="space-y-4">
        {announcements.map((item) => (
          <div
            key={item.title}
            className="border-l-2 border-blue-500 pl-3"
          >
            <h3 className="text-xs font-semibold text-gray-800">
              {item.title}
            </h3>

            <p className="mt-1 text-[10px] text-gray-500">
              {item.description}
            </p>

            <span className="mt-1 block text-[9px] text-gray-400">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;