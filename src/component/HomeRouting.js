import React from 'react'
import { useRoutes } from 'react-router-dom';
import TaskDetail from './TaskDetail';
import TaskList from './TaskList';

const HomeRouting = () => {
  const routes = useRoutes([
    { path: '/', element: <TaskList /> },
    { path: 'detail/:id', element: <TaskDetail />}
  ]);

  return routes;
}

export default HomeRouting
