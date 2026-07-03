// Use this file in MongoDB Compass or mongosh.
// Database name suggestion: student_task_manager
// Collection name: activity_logs

db.activity_logs.insertOne({
  studentId: 1,
  action: 'Student Created',
  timestamp: new Date()
});

db.activity_logs.insertMany([
  {
    studentId: 1,
    action: 'Task Created',
    timestamp: new Date()
  },
  {
    studentId: 2,
    action: 'Student Created',
    timestamp: new Date()
  }
]);

db.activity_logs.find();

db.activity_logs.find({
  action: 'Student Created'
});

db.activity_logs.updateOne(
  { studentId: 1, action: 'Task Created' },
  { $set: { action: 'Task Added' } }
);

db.activity_logs.deleteOne({
  studentId: 2,
  action: 'Student Created'
});

