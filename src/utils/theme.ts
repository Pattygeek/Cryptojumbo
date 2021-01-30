import theme from '@chakra-ui/theme';
import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  xlg: '92em',
  xxlg: '110em',
});

export const CustomTheme = extendTheme({
  // ...breakpoints,
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
      150: '#FBBA84',
      200: '#FFF8F3',
      250: '#FFCF86',
      300: '#FC9303',
    },
    gray: {
      100: '#949494',
      200: '#FAFAFA',
      300: 'rgba(231, 231, 231, 0.31)',
      400: 'rgba(255, 255, 255, 0.31)',
      500: '#E7E9F0',
      600: '#FBFBFB',
      700: 'CFCFCF',
      800: '#747474',
      900: '#F3F3F3',
      950: '#424B5A',
    },
    blue: {
      100: '#273D58',
    },
    brown: {
      100: '#4D3729',
    },
  },
});
