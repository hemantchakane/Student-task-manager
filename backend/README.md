# Backend

This folder contains the Node.js and Express.js backend.

## Current Features

### Monday to Wednesday

- Express server
- `GET /health`

### Thursday

Student REST APIs using an in-memory array:

- `GET /students`
- `GET /students/:id`
- `POST /students`
- `PUT /students/:id`
- `DELETE /students/:id`

## Folder Structure

```text
backend/
  src/
    config/
    controllers/
    middleware/
    models/
    routes/
    services/
    app.js
    server.js
```

## Run Backend

```bash
npm install
npm run dev
```

Server runs on:

```text
http://localhost:5000
```

## Example Student JSON

```json
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "course": "Backend Engineering"
}
```

## Future Work

- Connect PostgreSQL
- Add task APIs
- Add MongoDB activity logs
- Add validation middleware
- Add error handling middleware

