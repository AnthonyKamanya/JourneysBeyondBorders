import { useEffect, useState } from 'react';
import TasksPage from './pages/TasksPage';
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <>
      <WelcomePage />
      <h1>Journey Beyond Borders</h1>
      <TasksPage />
    </>
  );
}

export default App;

// Todo:
// useEffect number 1 — load on startup. When the app first loads,
// read from localStorage. If there's a saved profile and progress,
//  load them into state. If there isn't, leave state as null
// (which will trigger the onboarding flow). This runs once on mount,
// so its dependency array is empty.

// useEffect number 2 — save on change. Whenever progress state changes,
// write it to localStorage. This runs every time progress updates,
// so progress is in its dependency array. It should also have a cleanup consideration
// — though for localStorage writes a cleanup function isn't strictly necessary,
// you should think about whether to skip the save on the initial empty render.
