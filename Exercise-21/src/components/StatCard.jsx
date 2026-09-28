const StatCard = ({ icon: Icon, title, span }) => {
  return (
    <div className="flex min-h-20 items-center gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50">
        <Icon size={20} className="text-gray-800" />
      </div>

      <div>
        <p className="text-xs text-gray-500">{title}</p>

        <span className="text-xl font-bold text-gray-900">
          {span}
        </span>
      </div>
    </div>
  );
};

export default StatCard;