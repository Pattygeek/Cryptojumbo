import theme from '@chakra-ui/theme';
import { extendTheme } from '@chakra-ui/react';
// import { createBreakpoints } from '@chakra-ui/theme-tools';

// const breakpoints = createBreakpoints({
//   sm: '30em',
//   md: '48em',
//   lg: '62em',
//   xl: '80em',
// });

export const CustomTheme = extendTheme({
  ...theme,
  fontFamily: {
    poppins: 'Poppins, sans-serif',
  },
  fontSizes: {
    xs: ' 0.8em',
    sm: '1em',
  },
  colors: {
    ...theme.colors,
    //overriden styles for colors come here
    //like what is seen below

    brand: {
      100: '#f77408',
    },
    gray: {
      50: '#8E94A7',
      100: '#979797',
      200: '#828282',
      300: '#ABCEF1',
      400: '#575555',
      500: '#DDE5EE',
      600: '#6E7D87',
      700: '#5A5A5A',
    },
  },
});
