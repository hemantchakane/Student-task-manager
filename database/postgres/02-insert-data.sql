INSERT INTO students (name, email, course)
VALUES
  ('Ananya Verma', 'ananya@example.com', 'Backend Engineering'),
  ('Rohan Mehta', 'rohan@example.com', 'Full Stack Development'),
  ('Priya Nair', 'priya@example.com', 'Database Design');

INSERT INTO tasks (student_id, title, status, due_date)
VALUES
  (1, 'Practice Git commits', 'Completed', '2026-07-03'),
  (1, 'Learn Express routes', 'In Progress', '2026-07-04'),
  (2, 'Test health API in Postman', 'Pending', '2026-07-05'),
  (3, 'Draw ER diagram', 'Pending', '2026-07-06');

