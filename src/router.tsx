import ROUTES from './constants/routes';
import { createBrowserRouter } from 'react-router-dom';

import { Home, Detail } from 'pages';

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    Component: Home,
    children: [
      {
        path: ROUTES.detail,
        Component: Detail,
      },
    ],
  },
]);
