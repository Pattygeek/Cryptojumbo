import React from 'react';
import { Box, Flex, Text, Center } from '@chakra-ui/react';
import { FiCheckCircle } from 'react-icons/fi';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { FaRegTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import btc from '../../../assets/bitcoin.png';
import etherum from '../../../assets/etherum.png';
import usdt from '../../../assets/udth.png';
import naira from '../../../assets/naira.png';

import {
  TradeCoinProps,
  TradeCoin,
  SwapCoin,
  AssetProps,
  Asset,
  TransactionCardProps,
  TransactionCard,
} from '../components';

const icons: any = {
  processing: HiOutlineExclamationCircle,
  success: FiCheckCircle,
  failed: FaRegTimesCircle,
};
const Overview: React.FC = (): JSX.Element => {
  const tradableCoins: TradeCoinProps[] = [
    { logo: btc, symbol: 'BTC' },
    { logo: etherum, symbol: 'ETH' },
    { logo: usdt, symbol: 'USDT' },
  ];

  const assets: AssetProps[] = [
    { currency: 'Naira', symbol: 'NGN', balance: '235000', logo: naira },
    { currency: 'Bitcoin', symbol: 'BTC', balance: '0.0005000', logo: btc },
    { currency: 'Etherum', symbol: 'ETH', balance: '6152', logo: etherum },
    { currency: 'Tether', symbol: 'USDT', balance: '215', logo: usdt },
  ];

  const transactions: TransactionCardProps[] = [
    {
      amount: '0.0045334',
      coin: 'ETH',
      type: 'buy',
      status: 'processing',
      transId: '23456cy8u3354',
    },
    {
      amount: '0.0045334',
      coin: 'BTC',
      type: 'sell',
      status: 'success',
      transId: '23456cy8u3354',
    },
    {
      amount: '0.0045334',
      coin: 'ETH',
      type: 'buy',
      status: 'processing',
      transId: '23456cy8u3354',
    },
  ];
  return (
    <Box>
      <Flex flexWrap="wrap" mb={6}>
        {tradableCoins.map((coin) => (
          <TradeCoin key={coin.symbol} {...coin} />
        ))}
        <SwapCoin initialCoinlogo={usdt} finalCoinLogo={etherum} />
      </Flex>
      <Box mb={6}>
        <Flex align="center" mb={3}>
          <Text className="font-weight-500 font-md" mr={4}>
            Your assets
          </Text>
          <Box flex={1} height="1px" className="bg-gray" />
        </Flex>
        <Flex flexWrap="wrap">
          {assets.map((asset) => (
            <Asset key={asset.symbol} {...asset} />
          ))}
        </Flex>
      </Box>
      <Box mb={6}>
        <Flex align="center" mb={3}>
          <Text className="font-weight-500 font-md" mr={4}>
            Transactions
          </Text>
          <Box flex={1} height="1px" className="bg-gray" />
        </Flex>
        <Flex flexWrap="wrap" flexDirection={{ base: 'column', sm: 'row' }}>
          {transactions.map((asset, index) => (
            <TransactionCard key={index} {...asset} icon={icons[asset.status]} />
          ))}
          <Center flex={1}>
            <Link
              to="/dashboard/transactions"
              className="font-sm color-primary font-weight-500">
              View all
            </Link>
          </Center>
        </Flex>
      </Box>
    </Box>
  );
};

export default Overview;
