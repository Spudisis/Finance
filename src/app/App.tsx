import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import { RouterProvider } from 'react-router-dom';

import { theme } from '@/shared/config/theme';

import { router } from './routes/Router';
import '@/shared/config/i18n/i18n';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
