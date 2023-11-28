import { MantineColorsTuple, createTheme } from '@mantine/core';

const myColorLight: MantineColorsTuple = [
  '#e0fbff',
  '#cbf2ff',
  '#9ae2ff',
  '#64d2ff',
  '#3cc5fe',
  '#23bcfe',
  '#09b8ff',
  '#00a1e4',
  '#0090cd',
  '#007cb5',
];

const myColorError: MantineColorsTuple = [
  '#ffe9e9',
  '#ffd1d1',
  '#fba0a1',
  '#f76d6d',
  '#f34141',
  '#f22625',
  '#f21616',
  '#d8070b',
  '#c10008',
  '#a90003',
];

export const theme = createTheme({
  /** Put your mantine theme override here */
  defaultRadius: 'md',
  primaryColor: 'primary',
  fontFamily: 'Noto Sans',
  colors: {
    primary: myColorLight,
    error: myColorError,
  },
});
