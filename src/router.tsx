import ROUTES from '@constants/routes';
import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { lazy } from 'react';

export const protectedRoutes: RouteObject[] = [
  {
    path: ROUTES.home,
    Component: lazy(() => import('./pages/Home')),
  },
  {
    path: ROUTES.detail,
    Component: lazy(() => import('./pages/Detail')),
  },
];

export const router = createBrowserRouter([
  {
    children: protectedRoutes,
  },
]);
