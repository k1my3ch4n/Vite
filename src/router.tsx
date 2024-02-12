import ROUTES from '@constants/routes';
import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { lazy } from 'react';
import Layout from '@components/Layout';

export const protectedRoutes: RouteObject[] = [
  {
    path: ROUTES.home,
    Component: lazy(() => import('./pages/Home')),
  },
  {
    Component: Layout,
    children: [
      {
        path: ROUTES.character,
        Component: lazy(() => import('./pages/Character')),
      },
      {
        path: ROUTES.union,
        Component: lazy(() => import('./pages/Union')),
      },
    ],
  },
];

export const router = createBrowserRouter([
  {
    children: protectedRoutes,
  },
]);
