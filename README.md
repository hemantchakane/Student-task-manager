# Student Task Manager

A simple backend learning project built over one week.

The goal of this repository is not to build a production application. The goal is to show a practical learning journey as a backend engineering student.

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database Practice
- PostgreSQL
- MongoDB

### API Testing
- Postman

## Project Theme

The app manages:

- Students
- Tasks

A student can have many tasks. This relationship is useful for practicing SQL foreign keys and JOIN queries.

## Weekly Learning Plan

### Monday to Wednesday: Git and GitHub

Created the initial project structure.

Frontend:
- Navbar
- Dashboard
- Student List with dummy data
- Task List with dummy data

Backend:
- Express server
- `GET /health`

No database and no CRUD in this stage.

### Thursday: REST APIs and JSON

Added REST APIs for students using an in-memory array.

Endpoints:
- `GET /students`
- `GET /students/:id`
- `POST /students`
- `PUT /students/:id`
- `DELETE /students/:id`

The backend uses:
- Express Router
- Controllers
- Simple request and response models

### Friday: SQL and Database Design

Added PostgreSQL practice files for:
- Creating tables
- Inserting data
- Updating data
- Deleting data
- Selecting data
- JOIN queries
- COUNT and GROUP BY

### Saturday: MongoDB and Aggregation

Added MongoDB learning examples for:
- Insert
- Find
- Update
- Delete
- Aggregation

The planned MongoDB collection is `activity_logs`.

## Folder Structure

```text
student-task-manager/
  frontend/
  backend/
  database/
    postgres/
    mongodb/
  docs/
  screenshots/
  README.md
```

## How To Run

Install dependencies separately inside `frontend` and `backend`.

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend URL:

```text
http://localhost:5000
```

Health check:

```text
GET http://localhost:5000/health
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

## Git Practice Ideas

This project is intentionally split into small learning stages. Good commit examples:

- `create initial project folders`
- `add basic express server`
- `add frontend dashboard with dummy data`
- `add student routes`
- `add student controller`
- `add postgres create table scripts`
- `add mongodb activity log examples`

## Future Improvements

These are only placeholders for later learning.

- Connect backend to PostgreSQL
- Add task REST APIs
- Connect MongoDB logs to Express routes
- Add frontend forms
- Add validation middleware
- Add authentication
- Add Postman collection

