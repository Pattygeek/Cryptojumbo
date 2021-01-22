import React from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { formatAmount } from '../../utils';
import bitcoin from '../../assets/bitcoin.png';
import etherum from '../../assets/etherum.png';
import udth from '../../assets/udth.png';
declare interface CoinProp {
  logo: string;
  dollarEquivalent: string;
  symbol: string;
}
const coins: CoinProp[] = [
  {
    logo: bitcoin,
    dollarEquivalent: '1490.3',
    symbol: 'BTC',
  },
  {
    logo: etherum,
    dollarEquivalent: '1490.3',
    symbol: 'ETH',
  },
  {
    logo: udth,
    dollarEquivalent: '1490.3',
    symbol: 'UDTH',
  },
];
export const AvailableCoinsSmallBox: React.FC = (): JSX.Element => {
  return (
    <Flex
      px={5}
      py={2}
      my={4}
      borderRadius={5}
      backgroundColor="rgba(255, 255, 255, 0.7)"
      className="bg-white-opacity-0.7">
      {coins.map((coin) => (
        <Flex key={coin.symbol} flex={1}>
          <Image src={coin.logo} alt="Coin Icon" width={35} height={35} mr={3} />
          <Box>
            <Text className="color-gray-text font-xs font-weight-500">
              {coin.symbol}/USD
            </Text>
            <Text className="color-dark font-sm font-weight-500">
              {formatAmount(+coin.dollarEquivalent)}
            </Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export const AvailableCoinsLargeBox: React.FC = (): JSX.Element => {
  return (
    <Box
      borderRadius={5}
      boxShadow="0px 5px 20px rgba(20, 102, 204, 0.15)"
      p={5}
      className="bg-white">
      <Flex mb={4}>
        {coins.map((coin) => (
          <Flex
            p={5}
            flex={1}
            justifyContent="center"
            alignItems="center"
            key={coin.symbol}
            backgroundColor="#F6F7FB"
            mr={4}>
            <Image src={coin.logo} alt="Coin Icon" width={37} height={37} mr={3} />
            <Box>
              <Text className="font-md font-weight-600 color-dark">
                {coin.symbol}
              </Text>
              <Text className="color-gray-text font-xs font-weight-500">
                Buy / Sell
              </Text>
              <Text className="color-primary font-xs font-weight-500">#410/401</Text>
            </Box>
          </Flex>
        ))}
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Box
          as="button"
          borderRadius={5}
          className="bg-primary color-white font-md font-weight-500"
          px={20}
          py={3}>
          Begin trade
        </Box>
      </Flex>
    </Box>
  );
};
