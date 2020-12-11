import React from 'react';
import { Flex, Image, Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';

export interface TradeCoinProps {
  logo: string;
  symbol: string;
}

export const TradeCoin: React.FC<TradeCoinProps> = ({
  logo,
  symbol,
}): JSX.Element => {
  return (
    <Flex
      align="center"
      flex={1}
      flexBasis={{ base: '100%', sm: '48%', md: '24%' }}
      maxWidth={{ base: '100%', sm: '48%', md: '24%' }}
      className="bg-white border-radius-sm"
      mr={2}
      mb={2}
      p="15px"
      flexDirection={{ base: 'column', sm: 'row' }}>
      <Flex flex={1} mb={{ sm: 5, md: 0 }} align="center">
        <Image
          src={logo}
          mr={2}
          flex={{ base: 1, sm: 0 }}
          width={{ base: '25px', md: '43px' }}
          height={{ base: '25px', md: '43px' }}
          objectFit="cover"
        />
        <Box>
          <Text as="h3" className="font-md font-weight-600">
            {symbol}
          </Text>
          <Text className="color-gray-text font-xs">Buy / Sell</Text>
          <Text className="color-gray-text font-xs font-weight-500">
            # 400 / #401
          </Text>
        </Box>
      </Flex>
      <Link className="color-primary font-weight-500 font-sm" to="/dashboard/trade">
        Buy/Sell
      </Link>
    </Flex>
  );
};

export interface SwapCoinProp {
  initialCoinlogo: string;
  finalCoinLogo: string;
}
export const SwapCoin: React.FC<SwapCoinProp> = ({
  initialCoinlogo,
  finalCoinLogo,
}): JSX.Element => {
  return (
    <Flex
      align="center"
      flex={{ base: 0, sm: 1 }}
      flexBasis={{ base: '100%', sm: '48%', md: '24%' }}
      maxWidth={{ base: '100%', sm: '48%', md: '24%' }}
      className="bg-white border-radius-sm trade-coin"
      mr={2}
      mb={2}
      p={5}
      flexDirection={{ base: 'column', sm: 'row' }}>
      <Flex
        borderRadius={5}
        className="slim-border"
        mb={{ sm: 5, md: 0 }}
        p={2}
        flex={1}>
        <Flex align="center">
          <Image
            src={initialCoinlogo}
            flex={{ base: 1, sm: 0 }}
            width={{ base: '25px', md: '43px' }}
            height={{ base: '25px', md: '43px' }}
            mr={3}
          />
          <BsArrowRight className="color-gray-heading" size={25} />
        </Flex>
        <Flex align="center">
          <Image
            src={finalCoinLogo}
            flex={{ base: 1, sm: 0 }}
            width={{ base: '25px', md: '43px' }}
            height={{ base: '25px', md: '43px' }}
            mr={3}
          />
          <RiArrowDropDownLine size={25} />
        </Flex>
      </Flex>
      <Link className="color-primary font-weight-500 font-sm" to="/dashboard/trade">
        Swap
      </Link>
    </Flex>
  );
};
