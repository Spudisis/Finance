import { Button, ButtonProps, Flex, Stack } from '@mantine/core';

import { useTranslation } from 'react-i18next';

import { memo } from 'react';
import s from './navigation.module.css';
import { NavLinks } from '@/entities';
import { Logout } from '@/features';
import { ColorSchemeToggleMemo } from '@/shared/ui/color-scheme-toggle';
import { LanguageSelectMemo } from '@/shared/ui/language-select';

export const Navigation = memo(() => {
  const { t } = useTranslation();

  return (
    <nav className={s.navbar}>
      <Stack justify="space-between" className={s.stack}>
        <NavLinks />
        <Stack>
          <Flex gap="sm" justify="space-between">
            <LanguageSelectMemo />
            <ColorSchemeToggleMemo />
          </Flex>
          <Logout />
        </Stack>
      </Stack>
    </nav>
  );
});
