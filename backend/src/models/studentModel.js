let students = [
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
  }
];

let nextStudentId = 3;

function getAllStudents() {
  return students;
}

function getStudentById(id) {
  return students.find((student) => student.id === id);
}

function createStudent(studentData) {
  const newStudent = {
    id: nextStudentId,
    name: studentData.name,
    email: studentData.email,
    course: studentData.course
  };

  nextStudentId += 1;
  students.push(newStudent);

  return newStudent;
}

function updateStudent(id, studentData) {
  const student = getStudentById(id);

  if (!student) {
    return null;
  }

  student.name = studentData.name;
  student.email = studentData.email;
  student.course = studentData.course;

  return student;
}

function deleteStudent(id) {
  const studentExists = students.some((student) => student.id === id);

  if (!studentExists) {
    return false;
  }

  students = students.filter((student) => student.id !== id);
  return true;
}

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};

