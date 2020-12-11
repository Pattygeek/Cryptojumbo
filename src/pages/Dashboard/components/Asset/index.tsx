import React from 'react';
import { Flex, Image, Box, Text } from '@chakra-ui/react';

export interface AssetProps {
  logo: string;
  currency: string;
  balance: string;
  symbol: string;
}

export const Asset: React.FC<AssetProps> = ({
  logo,
  currency,
  balance,
  symbol,
}): JSX.Element => {
  return (
    <Flex
      flex={1}
      mr={2}
      mb={2}
      p="15px 20px"
      flexDirection="column"
      className="slim-border-right">
      <Flex flex={1} mb={5}>
        <Image src={logo} mr={2} maxWidth={'30px'} />
        <Box>
          <Text className="font-xs color-gray-text">{currency}</Text>
          <Text
            as="span"
            className="color-gray-text font-weight-500 font-xs uppercase">
            <Text as="span" className="color-dark" mr={2}>
              {balance}
            </Text>
            {symbol}
          </Text>
        </Box>
      </Flex>
      <Flex className="border-radius-sm bg-white">
        <Box
          as="button"
          type="button"
          flex={1}
          className="slim-border-right color-primary font-sm btn">
          Deposit
        </Box>
        <Box
          as="button"
          type="button"
          flex={1}
          className="color-primary font-sm btn">
          Withdraw
        </Box>
      </Flex>
    </Flex>
  );
};
