import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import StudentList from './components/StudentList.jsx';
import TaskList from './components/TaskList.jsx';

const students = [
  {
    id: 1,
    name: 'Ananya Verma',
    email: 'ananya@example.com',
    course: 'Backend Engineering'
  },
  {
    id: 2,
    name: 'Rohan Mehta',
    email: 'rohan@example.com',
    course: 'Full Stack Development'
  },
  {
    id: 3,
    name: 'Priya Nair',
    email: 'priya@example.com',
    course: 'Database Design'
  }
];

const tasks = [
  {
    id: 1,
    title: 'Practice Git commits',
    studentName: 'Ananya Verma',
    status: 'Completed'
  },
  {
    id: 2,
    title: 'Create Express health route',
    studentName: 'Rohan Mehta',
    status: 'In Progress'
  },
  {
    id: 3,
    title: 'Draw ER diagram',
    studentName: 'Priya Nair',
    status: 'Pending'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-6">
        <Dashboard studentCount={students.length} taskCount={tasks.length} />
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <StudentList students={students} />
          <TaskList tasks={tasks} />
        </div>
      </main>
    </div>
  );
}

export default App;

