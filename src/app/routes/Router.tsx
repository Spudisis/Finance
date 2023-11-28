import { createBrowserRouter } from 'react-router-dom';
import { routes } from '@/shared/config/routes';
import { PageAnalytics, PageBalance, PageHome, MainLayout, PageSettings } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: routes.home,
        element: <PageHome />,
      },
      {
        path: routes.balance,
        element: <PageBalance />,
      },
      {
        path: routes.analytics,
        element: <PageAnalytics />,
      },
      {
        path: routes.settings,
        element: <PageSettings />,
      },
    ],
  },
]);
