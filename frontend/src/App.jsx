import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import StudentList from './components/StudentList.jsx';
import TaskList from './components/TaskList.jsx';
import { getDashboardCounts, students, tasks } from './typescript.ts';

function App() {
  const { studentCount, taskCount } = getDashboardCounts(students, tasks);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-6">
        <Dashboard studentCount={studentCount} taskCount={taskCount} />
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <StudentList students={students} />
          <TaskList tasks={tasks} />
        </div>
      </main>
    </div>
  );
}

export default App;
