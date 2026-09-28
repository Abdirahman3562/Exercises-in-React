import './index.css'
import {
  BarChart3,
  GraduationCap,
  AlarmClock,
  PenLine,
} from "lucide-react";

import Navbar from "./components/Navbar";
import StatCard from "./components/StatCard";
import CourseProgress from "./components/CourseProgress";
import UpcomingAssignments from "./components/UpcomingAssignments";
import Announcements from "./components/Announcements";

const App = () => {
  return (
    <div className="min-h-screen bg-[#f7f8fa] px-4 py-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">

        <Navbar />

        {/* Stats */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={BarChart3}
            title="Average Grade"
            span="88%"
          />

          <StatCard
            icon={GraduationCap}
            title="Courses"
            span="3"
          />

          <StatCard
            icon={AlarmClock}
            title="Study Hours"
            span="45h"
          />

          <StatCard
            icon={PenLine}
            title="Assignments"
            span="12"
          />
        </div>

        {/* Main Content */}
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
          
          <CourseProgress />

          <div className="space-y-4">
            <UpcomingAssignments />
            <Announcements />
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;