import React from 'react';
import { Flex, Box, Text, Image, Stack } from '@chakra-ui/react';
import { formatAmount } from '../../utils';
import bitcoin from '../../assets/bitcoin.png';
import ethereum from '../../assets/ethereum.png';
import usdt from '../../assets/udth.png';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux';
import { Link } from 'react-router-dom';
import { CurrencySymbols } from '../../redux';
const coinLogo: any = {
  ETH: ethereum,
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
      px={{ base: 3, md: 6 }}
      spacing={3}
      my={5}
      width={{ base: '100%', sm: '450px' }}
      borderRadius={5}
      backgroundColor="rgba(255, 255, 255, 0.7)"
      className="bg-white-opacity-0.7">
      {Object.keys(dollarEquivalent).map((symbol) => {
        if (Object.values(CurrencySymbols).includes(symbol as CurrencySymbols))
          return (
            <Stack
              direction="row"
              align={{ base: 'center', md: 'flex-start' }}
              spacing={3}
              key={symbol}
              flex={1}>
              <Image
                src={coinLogo[symbol]}
                alt="Coin Icon"
                width={{ base: '23px', md: '33px' }}
                height="auto"
              />
              <Box>
                <Text
                  fontSize={{ base: '8px', md: '9px' }}
                  lineHeight="10px"
                  className="color-gray-text font-weight-500">
                  {symbol}/USD
                </Text>
                <Text
                  fontSize={{ base: '9px', md: '14px' }}
                  lineHeight="14px"
                  className="color-dark font-weight-500">
                  {formatAmount(+dollarEquivalent[symbol])}
                </Text>
              </Box>
            </Stack>
          );
      })}
    </Stack>
  );
};

export const AvailableCoinsLargeBox: React.FC = (): JSX.Element => {
  const { dollarEquivalent, rates } = useSelector((state: AppState) => {
    const {
      currencies: { dollarEquivalent },
      rates,
    } = state.others;
    return { dollarEquivalent, rates };
  });
  return (
    <Box
      borderRadius={5}
      boxShadow="0px 5px 20px rgba(20, 102, 204, 0.15)"
      p={5}
      className="bg-white">
      <Stack direction="row" spacing={3} mb={4}>
        {Object.keys(dollarEquivalent).map((symbol) => {
          if (Object.values(CurrencySymbols).includes(symbol as CurrencySymbols))
            return (
              <Stack
                direction={{ base: 'row', sm: 'row' }}
                spacing={{ base: '10px', md: 3 }}
                p={{ base: '10px 15px', md: 5 }}
                flex={1}
                justifyContent="center"
                alignItems={{ base: 'flex-start', md: 'center' }}
                key={symbol}
                backgroundColor="#F6F7FB"
                borderRadius={5}>
                <Image
                  src={coinLogo[symbol]}
                  alt="Coin Icon"
                  width={{ base: 25, md: 35 }}
                  height={{ base: 25, md: 35 }}
                />
                <Box>
                  <Text
                    fontSize={{ base: '9px', md: '18px' }}
                    lineHeight={{ base: '15px', md: '20px' }}
                    className="font-weight-600 color-dark">
                    {symbol}
                  </Text>
                  {rates[symbol] && (
                    <Box>
                      <Text className="color-gray-text font-xs font-weight-500">
                        Buy{' '}
                        <Text
                          as="span"
                          className="color-primary font-xs font-weight-500">
                          {formatAmount(+rates[symbol].buy, 'NGN')}
                        </Text>
                      </Text>
                      <Text className="color-gray-text font-xs font-weight-500">
                        Sell{' '}
                        <Text
                          as="span"
                          className="color-primary font-xs font-weight-500">
                          {formatAmount(+rates[symbol].sell, 'NGN')}
                        </Text>
                      </Text>
                    </Box>
                  )}
                </Box>
              </Stack>
            );
        })}
      </Stack>
      <Flex justifyContent="center" alignItems="center" pt={{ base: 0, md: 2 }}>
        <Box
          as={Link}
          to="/dashboard/trade"
          borderRadius={5}
          className="bg-primary color-white font-md font-weight-500"
          px={{ base: '50px', sm: 10, md: 20 }}
          fontSize={{ base: '12px', md: '18px' }}
          lineHeight={{ base: '18px', md: '27px' }}
          py={3}>
          Begin trade
        </Box>
      </Flex>
    </Box>
  );
};
