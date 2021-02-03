import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';

export interface TradeWrapperProps {
  onClose: () => void;
  heading: string;
}
export const TradeWrapper: React.FC<TradeWrapperProps> = ({
  onClose,
  children,
  heading,
}): JSX.Element => {
  return (
    <Box className="trade" width={{ base: '100%', sm: '380px' }} height="auto">
      <Flex
        align="center"
        className="bg-secondary"
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
        px={5}
        py={4}
        pb={6}
        mb={2}>
        <Text
          flex={1}
          mr={2}
          className="color-white font-md font-weight-500 capitalize">
          {heading}
        </Text>
        <Flex
          align="center"
          justify="center"
          as="button"
          className="border-radius-xs cancel-trade-btn"
          onClick={onClose}>
          <FaTimes className="color-white" />
        </Flex>
      </Flex>
      <Flex
        direction="column"
        flex={1}
        height="full"
        borderTopLeftRadius={6}
        borderTopRightRadius={6}
        pt={10}
        pb={'20px'}
        px={10}
        mt={-4}
        className="bg-white">
        {children}
      </Flex>
    </Box>
  );
};
