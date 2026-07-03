SELECT * FROM students;

SELECT * FROM tasks;

SELECT name, email, course
FROM students
WHERE course = 'Backend Engineering';

SELECT title, status
FROM tasks
WHERE status = 'Pending';

SELECT *
FROM tasks
ORDER BY due_date ASC;

