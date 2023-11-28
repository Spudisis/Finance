import { Button as MantineButton, ButtonProps, createPolymorphicComponent } from '@mantine/core';

import { useColorScheme } from '@mantine/hooks';
import { forwardRef } from 'react';

interface CustomButtonProps extends ButtonProps {}

export const Button = createPolymorphicComponent<'button', CustomButtonProps>(
  forwardRef<HTMLButtonElement, CustomButtonProps>(({ children, ...rest }, ref) => {
    const theme = useColorScheme();

    return (
      <MantineButton
        ref={ref}
        color={rest.color || theme === 'dark' ? 'primary' : 'blue'}
        {...rest}
      >
        {children}
      </MantineButton>
    );
  })
);
