# PostgreSQL Practice

This folder contains SQL scripts for learning relational database concepts.

## Tables

- `students`
- `tasks`

## Relationship

One student can have many tasks.

The `tasks.student_id` column is a foreign key that references `students.id`.

## Recommended Order

1. Run `01-create-tables.sql`
2. Run `02-insert-data.sql`
3. Practice `03-select-queries.sql`
4. Practice `04-update-delete.sql`
5. Practice `05-join-queries.sql`

