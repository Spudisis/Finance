import React from 'react';
import { Outlet } from 'react-router-dom';
import { Flex } from '@mantine/core';
import { Navigation } from '@/widgets';

export const MainLayout = () => (
  <Flex direction="row">
    <Navigation />
    <Outlet />
  </Flex>
);
