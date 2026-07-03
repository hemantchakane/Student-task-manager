const studentModel = require('../models/studentModel');

function getStudents(req, res) {
  const students = studentModel.getAllStudents();

  res.json({
    message: 'Students fetched successfully',
    data: students
  });
}

function getStudent(req, res) {
  const studentId = Number(req.params.id);
  const student = studentModel.getStudentById(studentId);

  if (!student) {
    return res.status(404).json({
      message: 'Student not found'
    });
  }

  res.json({
    message: 'Student fetched successfully',
    data: student
  });
}

function createStudent(req, res) {
  const { name, email, course } = req.body;

  if (!name || !email || !course) {
    return res.status(400).json({
      message: 'name, email, and course are required'
    });
  }

  const student = studentModel.createStudent({ name, email, course });

  res.status(201).json({
    message: 'Student created successfully',
    data: student
  });
}

function updateStudent(req, res) {
  const studentId = Number(req.params.id);
  const { name, email, course } = req.body;

  if (!name || !email || !course) {
    return res.status(400).json({
      message: 'name, email, and course are required'
    });
  }

  const student = studentModel.updateStudent(studentId, {
    name,
    email,
    course
  });

  if (!student) {
    return res.status(404).json({
      message: 'Student not found'
    });
  }

  res.json({
    message: 'Student updated successfully',
    data: student
  });
}

function deleteStudent(req, res) {
  const studentId = Number(req.params.id);
  const isDeleted = studentModel.deleteStudent(studentId);

  if (!isDeleted) {
    return res.status(404).json({
      message: 'Student not found'
    });
  }

  res.json({
    message: 'Student deleted successfully'
  });
}

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent
};

