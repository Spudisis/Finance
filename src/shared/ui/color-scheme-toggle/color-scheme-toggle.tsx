import { Icon } from '@iconify/react';
import { Group, useMantineColorScheme } from '@mantine/core';
import clsx from 'clsx';
import { memo } from 'react';
import s from './color-scheme-toggle.module.css';
import { Button } from '../button';

const ColorSchemeToggle = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <Group justify="center">
      <Button
        className={clsx(
          colorScheme === 'light' ? s.buttonColorLight : s.buttonColorDark,
          s.buttonPadding
        )}
        onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}
        variant="outline"
      >
        {colorScheme === 'light' ? (
          <Icon icon="ph:sun" className={clsx(s.iconSize)} />
        ) : (
          <Icon icon="ph:moon" className={clsx(s.iconSize)} />
        )}
      </Button>
    </Group>
  );
};

export const ColorSchemeToggleMemo = memo(ColorSchemeToggle);
