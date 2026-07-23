export type Student = {
  id: number;
  name: string;
  email: string;
  course: string;
};

export type TaskStatus = 'Completed' | 'In Progress' | 'Pending';

export type Task = {
  id: number;
  title: string;
  studentName: string;
  status: TaskStatus;
};

export const students: Student[] = [
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

export const tasks: Task[] = [
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

export function getDashboardCounts(studentList: Student[], taskList: Task[]) {
  return {
    studentCount: studentList.length,
    taskCount: taskList.length
  };
}
