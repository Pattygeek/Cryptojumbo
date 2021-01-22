import React from 'react';
import { Flex, Box, Text, Image, Stack } from '@chakra-ui/react';
import { formatAmount } from '../../utils';
import bitcoin from '../../assets/bitcoin.png';
import etherum from '../../assets/etherum.png';
import usdt from '../../assets/udth.png';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux';
import { Link } from 'react-router-dom';

const coinLogo: any = {
  ETH: etherum,
  BTC: bitcoin,
  USDT: usdt,
};

export const AvailableCoinsSmallBox: React.FC = (): JSX.Element => {
  const { dollarEquivalent } = useSelector((state: AppState) => {
    const {
      currencies: { dollarEquivalent },
    } = state.others;
    return { dollarEquivalent };
  });
  return (
    <Stack
      direction="row"
      py={3}
      px={6}
      spacing={3}
      my={5}
      width={{ base: '100%', sm: '450px' }}
      borderRadius={5}
      backgroundColor="rgba(255, 255, 255, 0.7)"
      className="bg-white-opacity-0.7">
      {Object.keys(dollarEquivalent).map((symbol) => (
        <Flex key={symbol} flex={1}>
          <Image
            src={coinLogo[symbol]}
            alt="Coin Icon"
            width={{ base: 25, md: 35 }}
            height={{ base: 25, md: 35 }}
            mr={3}
          />
          <Box>
            <Text className="color-gray-text font-xs font-weight-500">
              {symbol}/USD
            </Text>
            <Text className="color-dark font-sm font-weight-500">
              {formatAmount(+dollarEquivalent[symbol])}
            </Text>
          </Box>
        </Flex>
      ))}
    </Stack>
  );
};

export const AvailableCoinsLargeBox: React.FC = (): JSX.Element => {
  const { dollarEquivalent } = useSelector((state: AppState) => {
    const {
      currencies: { dollarEquivalent },
    } = state.others;
    return { dollarEquivalent };
  });
  return (
    <Box
      borderRadius={5}
      boxShadow="0px 5px 20px rgba(20, 102, 204, 0.15)"
      p={5}
      className="bg-white">
      <Stack direction="row" spacing={3} mb={4}>
        {Object.keys(dollarEquivalent).map((symbol) => (
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            p={{ base: 3, sm: 5 }}
            flex={1}
            justifyContent="center"
            alignItems="center"
            key={symbol}
            backgroundColor="#F6F7FB">
            <Image
              src={coinLogo[symbol]}
              alt="Coin Icon"
              width={{ base: 25, md: 35 }}
              height={{ base: 25, md: 35 }}
              mr={3}
            />
            <Box>
              <Text className="font-md font-weight-600 color-dark">{symbol}</Text>
              <Text className="color-gray-text font-xs font-weight-500">
                Buy / Sell
              </Text>
              <Text className="color-primary font-xs font-weight-500">#410/401</Text>
            </Box>
          </Stack>
        ))}
      </Stack>
      <Flex justifyContent="center" alignItems="center" py={2}>
        <Box
          as={Link}
          to="/dashboard/trade"
          borderRadius={5}
          className="bg-primary color-white font-md font-weight-500"
          px={{ base: 5, sm: 10, md: 20 }}
          py={3}>
          Begin trade
        </Box>
      </Flex>
    </Box>
  );
};
