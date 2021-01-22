import React from 'react';
import { Box, Flex, Text, Image, Square, Stack } from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
export interface WalletTransactionWrapperProps {
  onClose: () => void;
  coinLogo: string;
  action: string;
  coin: string;
}
export const WalletTransactionWrapper: React.FC<WalletTransactionWrapperProps> = ({
  children,
  coinLogo,
  coin,
  action,
}): JSX.Element => {
  const { push } = useHistory();
  return (
    <Box
      className="trade"
      width={{ base: '100%', sm: '380px' }}
      height={{ base: '100%', sm: '500px' }}>
      <Flex
        align="center"
        justify="space-between"
        className="bg-secondary"
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
        px={5}
        py={4}
        pb={6}
        mb={2}>
        <Stack direction="row" align="center" px={5}>
          <Square size={'40px'} borderRadius={5} className="bg-white" mr={2}>
            <Image
              src={coinLogo}
              alt="Coin Logo"
              width="25px"
              height="auto"
              className="coin-logo-sm"
            />
          </Square>
          <Text className="color-white font-md capitalize font-weight-500">
            {action} {coin}
          </Text>
        </Stack>
        <Flex
          align="center"
          justify="center"
          as="button"
          className="border-radius-xs cancel-trade-btn"
          onClick={() => push('/dashboard/wallet')}>
          <FaTimes className="color-white" />
        </Flex>
      </Flex>
      <Flex
        direction="column"
        flex={1}
        height="full"
        borderTopLeftRadius={6}
        borderTopRightRadius={6}
        py={10}
        pb={'90px'}
        px={10}
        mt={-4}
        className="bg-white">
        {children}
      </Flex>
    </Box>
  );
};
