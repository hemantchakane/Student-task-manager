# Frontend

This folder contains the React and Vite frontend.

## Current Features

- Navbar
- Dashboard summary
- Student list using dummy data
- Task list using dummy data
- TypeScript practice file for typed student and task data

The frontend does not call the backend yet. This is intentional for the Monday to Wednesday learning stage.

## TypeScript Practice

The file `src/typescript.ts` contains:

- `Student` type
- `Task` type
- typed dummy data
- `getDashboardCounts()` helper function

`App.jsx` imports this TypeScript file and uses its data in the UI.

## Run Frontend

```bash
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## Future Work

- Fetch students from backend API
- Add student form
- Add task form
- Add loading and error states
