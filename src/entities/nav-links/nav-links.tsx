import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, NavLink as NavLinkRouter } from 'react-router-dom';
import { Box, useMantineColorScheme } from '@mantine/core';
import { Icon } from '@iconify/react';

import { NAV_LINKS } from './model';
import s from './ui.module.css';
import { Button } from '@/shared/ui/button';

export const NavLinks = () => {
  const { t } = useTranslation();
  const { colorScheme } = useMantineColorScheme();
  const location = useLocation();

  return (
    <Box>
      {NAV_LINKS.map((elem) => (
        <Button
          className={s.link}
          rightSection={<Icon className={s.icon} icon={elem.icon} />}
          key={elem.value}
          to={elem.value}
          component={NavLinkRouter}
          color={colorScheme === 'dark' ? 'primary' : 'blue'}
          variant={location.pathname === elem.value ? 'filled' : 'outline'}
        >
          {t(elem.label)}
        </Button>
      ))}
    </Box>
  );
};
