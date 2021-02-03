import React, { useLayoutEffect } from 'react';
import { Box, Flex, Text, Center, Stack, StackDivider } from '@chakra-ui/react';
import { FiCheckCircle } from 'react-icons/fi';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { FaRegTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, CurrencySymbols, allTransactionRequest } from '../../../redux';
import btc from '../../../assets/bitcoin.png';
import ethereum from '../../../assets/ethereum.png';
import usdt from '../../../assets/udth.png';
import naira from '../../../assets/naira.png';

import {
  TradeCoinProps,
  TradeCoin,
  SwapCoin,
  Asset,
  TransactionCard,
  SectionSpinnerWithText,
} from '../components';
import { RiHistoryLine } from 'react-icons/ri';

const icons: any = {
  processing: HiOutlineExclamationCircle,
  success: FiCheckCircle,
  failed: FaRegTimesCircle,
};

const Overview: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { cryptos, transactions, loading, token } = useSelector(
    (state: AppState) => {
      const { token } = state.auth;
      const { cryptos } = state.wallet;
      let { transactions } = state.transaction;
      transactions = transactions.filter((_, index) => index <= 2);
      const { getAllTransactions: loading } = state.loadingIndicators;
      return { cryptos, transactions, loading, token };
    },
  );
  useLayoutEffect(() => {
    if (transactions.length === 0) dispatch(allTransactionRequest({ token }));
  }, []);

  const tradableCoins: TradeCoinProps[] = [
    { logo: btc, symbol: 'BTC' },
    { logo: ethereum, symbol: 'ETH' },
    { logo: usdt, symbol: 'USDT' },
  ];

  const assets: any = {
    ETH: {
      currencyName: 'Ethereum',
      logo: ethereum,
      action1: 'send',
      action2: 'receive',
    },
    NGN: {
      currencyName: 'Naira',
      logo: naira,
      action1: 'deposit',
      action2: 'withdraw',
    },
    BTC: {
      currencyName: 'Bitcoin',
      logo: btc,
      action1: 'send',
      action2: 'receive',
    },
    USDT: {
      currencyName: 'Tether',
      logo: usdt,
      action1: 'send',
      action2: 'receive',
    },
  };

  return (
    <Box>
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        spacing={'10px'}
        width="100%"
        mb={'20px'}>
        <Stack direction="row" flexWrap="wrap" spacing={'10px'} mb={6} flex={1}>
          <TradeCoin key={tradableCoins[0].symbol} {...tradableCoins[0]} />
          <TradeCoin key={tradableCoins[1].symbol} {...tradableCoins[1]} />
        </Stack>
        <Stack direction="row" flexWrap="wrap" spacing={'10px'} mb={6} flex={1}>
          <TradeCoin key={tradableCoins[2].symbol} {...tradableCoins[2]} />
          <SwapCoin />
        </Stack>
      </Stack>
      <Box mb={10} px={{ base: 5, sm: 10, md: '40px' }}>
        <Flex align="center" mb={3} px="15px">
          <Text className="font-weight-500 color-dark font-md" mr={4}>
            Your assets
          </Text>
          <Box flex={1} height="2px" bg="#E1E1E1" />
        </Flex>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          spacing={'0px'}
          align="stretch"
          divider={
            <StackDivider
              display={{ base: 'none', lg: 'block' }}
              borderColor="gray.500"
            />
          }
          flexWrap="wrap">
          {Object.keys(cryptos).map((currency) => {
            if (Object.values(CurrencySymbols).includes(currency as CurrencySymbols))
              return (
                <Asset
                  key={cryptos[currency].id}
                  {...cryptos[currency]}
                  {...assets[currency]}
                />
              );
          })}
        </Stack>
      </Box>
      <Box mb={10} px={{ base: 5, sm: 10, md: '40px' }}>
        <Box
          borderColor="white"
          borderWidth="1.5px"
          borderStyle="solid"
          borderRadius="10px"
          px="15px"
          py="15px"
          position="relative">
          <Text
            as="label"
            className="padding-horizontal-sm padding-vertical-xs font-md font-weight-500 color-dark"
            top="-20px"
            left="10px"
            position="absolute"
            bg="#f6f7fb"
            zIndex={2}>
            Transactions
          </Text>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={'20px'}
            flexWrap="wrap">
            {!loading ? (
              transactions.map((asset, index) => (
                <TransactionCard key={index} {...asset} icon={icons[asset.status]} />
              ))
            ) : (
              <Center px="15px" size="100px" flex={1}>
                <SectionSpinnerWithText
                  spinning={loading}
                  text="Fetching Transactions..."
                />
              </Center>
            )}
            {transactions.length === 0 && !loading && (
              <Stack
                flex={1}
                justify={{ base: 'flex-start', sm: 'center' }}
                align={{ base: 'center', sm: 'center' }}
                direction={{ base: 'column', sm: 'row' }}
                spacing={5}>
                <RiHistoryLine size={40} className="color-gray-text" />
                <Text className="font-md font-weight-500 color-gray-text">
                  No transaction history
                </Text>
              </Stack>
            )}
            {transactions.length > 3 && (
              <Center px="15px">
                {!loading && (
                  <Box
                    as={Link}
                    to="/dashboard/wallet"
                    color="brand.250"
                    _hover={{ color: 'brand.100' }}
                    className="font-sm font-weight-500">
                    View all
                  </Box>
                )}
              </Center>
            )}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
