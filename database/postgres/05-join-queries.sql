SELECT
  students.name,
  students.email,
  tasks.title,
  tasks.status
FROM students
INNER JOIN tasks
  ON students.id = tasks.student_id;

SELECT
  students.name,
  tasks.title,
  tasks.status
FROM students
LEFT JOIN tasks
  ON students.id = tasks.student_id;

SELECT
  students.name,
  COUNT(tasks.id) AS task_count
FROM students
LEFT JOIN tasks
  ON students.id = tasks.student_id
GROUP BY students.id, students.name;

SELECT
  tasks.status,
  COUNT(tasks.id) AS total_tasks
FROM tasks
GROUP BY tasks.status;

