import ROUTES from './constants/routes';
import { RouteObject, createBrowserRouter } from 'react-router-dom';

// import { Home, Detail } from './pages';
import { lazy } from 'react';

export const protectedRoutes: RouteObject[] = [
  {
    path: ROUTES.home,
    Component: lazy(() => import('./pages/Home')),
  },
];

export const router = createBrowserRouter([
  {
    children: protectedRoutes,
  },
]);
