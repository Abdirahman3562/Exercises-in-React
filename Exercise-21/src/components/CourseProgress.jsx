const courses = [
  {
    title: "React Fundamentals",
    progress: 75,
    next: "Components & Props",
    teacher: "Sarah Wilson",
  },
  {
    title: "JavaScript Advanced",
    progress: 45,
    next: "Async/Await",
    teacher: "Mike Johnson",
  },
  {
    title: "UI/UX Design",
    progress: 90,
    next: "Color Theory",
    teacher: "Emily Chen",
  },
];

const CourseProgress = () => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-5 text-sm font-bold text-gray-900">
        Course Progress
      </h2>

      <div className="space-y-6">
        {courses.map((course) => (
          <div key={course.title}>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-semibold text-gray-800">
                {course.title}
              </p>

              <span className="text-[11px] text-gray-500">
                {course.progress}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-gray-800"
                style={{ width: `${course.progress}%` }}
              />
            </div>

            <div className="mt-2 flex items-center justify-between text-[10px] text-gray-500">
              <span>Next: {course.next}</span>
              <span>{course.teacher}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseProgress;