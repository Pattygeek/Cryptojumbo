import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
export const SectionWrapper: React.FC<BoxProps> = ({
  children,
  as = 'section',
  ...rest
}): JSX.Element => {
  return (
    <Box as={as} px={{ base: 5, md: 20, lg: 40 }} py={15} mb={'180px'} {...rest}>
      {children}
    </Box>
  );
};
