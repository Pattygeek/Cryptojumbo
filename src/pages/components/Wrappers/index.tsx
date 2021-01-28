import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
export const SectionWrapper: React.FC<BoxProps> = ({
  children,
  as = 'section',
  ...rest
}): JSX.Element => {
  return (
    <Box
      as={as}
      px={{ base: 10, md: 20, lg: 40 }}
      py={15}
      mb={{ base: '60px', md: '180px' }}
      display="flex"
      justifyContent="center"
      {...rest}>
      <Box maxWidth="1500px">{children}</Box>
    </Box>
  );
};
