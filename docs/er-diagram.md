# ER Diagram

## Relationship

One student can have many tasks.

```text
+------------------+        +------------------+
| students         |        | tasks            |
+------------------+        +------------------+
| id (PK)          |  1   * | id (PK)          |
| name             |--------| student_id (FK)  |
| email            |        | title            |
| course           |        | status           |
| created_at       |        | due_date         |
+------------------+        | created_at       |
                            +------------------+
```

## Primary Key

A primary key uniquely identifies each row in a table.

Example:

```sql
id SERIAL PRIMARY KEY
```

In the `students` table, each student has a unique `id`.

## Foreign Key

A foreign key connects one table to another table.

Example:

```sql
student_id INTEGER REFERENCES students(id)
```

In the `tasks` table, `student_id` tells us which student owns the task.

