import React, { useState, useLayoutEffect } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { FaRegTimesCircle } from 'react-icons/fa';
import {
  Flex,
  Square,
  Text,
  Box,
  Stack,
  Center,
  StackDivider,
} from '@chakra-ui/react';
import { TransactionCardProps } from '../TransactionCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppState,
  TransactionProp,
  allTransactionRequest,
  CurrencySymbols,
} from '../../../../redux';
import { formatDate, coinFaucets } from '../../../../utils';
import { IconType } from 'react-icons';
import { RiHistoryLine } from 'react-icons/ri';
import { SectionSpinnerWithText } from '../../components';

export const statusBadge: any = {
  confirmed: {
    bg: 'bg-success-transparent',
    color: 'color-success',
    icon: FiCheckCircle,
  },
  pending: {
    bg: 'bg-warning-transparent',
    color: 'color-warning',
    icon: HiOutlineExclamationCircle,
  },
  failed: {
    bg: 'bg-danger-transparent',
    color: 'color-danger',
    icon: FaRegTimesCircle,
  },
};

export const TransactionTable: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const [coinType, setCoinType] = useState<string>('All');
  const coins = ['All', 'BTC', 'ETH', 'USDT', 'NGN'];
  const { token, transactions, loading } = useSelector((state: AppState) => {
    const { token } = state.auth;
    let { transactions } = state.transaction;
    if (coinType.toLowerCase() !== 'all') {
      transactions = transactions.filter(
        (transaction) => transaction.currency === coinType,
      );
    }
    const { getAllTransactions: loading } = state.loadingIndicators;
    return { token, transactions, loading };
  });
  useLayoutEffect(() => {
    if (transactions.length === 0) dispatch(allTransactionRequest({ token }));
  }, []);
  if (loading)
    return (
      <Box flex={1} className="bg-white border-radius-sm" p={5}>
        <Center height="100%">
          <SectionSpinnerWithText
            spinning={loading}
            text="Fetching Transactions..."
          />
        </Center>
      </Box>
    );
  return (
    <Box flex={1} className="bg-white border-radius-sm" p={5}>
      <Text className="color-dark font-weight-500 font-sm" mb={2}>
        Transactions
      </Text>
      <Stack
        direction="row"
        display="inline-flex"
        className="border-radius-xs"
        bg="gray.200"
        p={1}
        mb={5}>
        {coins.map((coin) => (
          <Box
            key={coin}
            p="4px 20px"
            as="button"
            onClick={() => setCoinType(coin)}
            type="button"
            className={`font-sm font-weight-500 border-radius-xs ${
              coin === coinType
                ? 'color-white bg-primary'
                : 'color-gray-text bg-transparent'
            }`}>
            {coin}
          </Box>
        ))}
      </Stack>
      <Stack
        direction="column"
        spacing={1}
        divider={<StackDivider borderColor="gray.500" />}>
        {transactions.map((e) => (
          <TransactionRow {...e} key={e.id} icon={HiOutlineExclamationCircle} />
        ))}
      </Stack>
      {transactions.length === 0 && (
        <Center flexDirection="column" size={30} height="100%">
          <RiHistoryLine size={40} className="color-gray-text" />
          <Text mt={10} className="font-md font-weight-500 color-gray-text">
            {coinType.toLowerCase() === 'all'
              ? 'No transaction history'
              : `You have no ${coinType} transaction history`}
          </Text>
        </Center>
      )}
    </Box>
  );
};

declare interface TransactionRowProps extends TransactionProp {
  icon?: IconType;
}

const TransactionRow: React.FC<TransactionRowProps> = ({
  status,
  currency,
  amount,
  action,
  transaction_details,
  modified,
}): JSX.Element => {
  const { icon: Icon, bg, color } = statusBadge[status.toLowerCase()];
  let element = null;
  if (currency === CurrencySymbols.ETH || currency === CurrencySymbols.USDT) {
    element = (
      <Text
        isTruncated
        width={{ base: '100px', md: '200px' }}
        fontSize="12px"
        lineHeight="12px"
        textDecoration="underline"
        className="color-gray-text"
        as="a"
        href={`${coinFaucets[currency]}/${transaction_details.hash}`}
        target="_blank"
        rel="noreferrer noopener">
        #{transaction_details.hash}
      </Text>
    );
  } else if (currency === CurrencySymbols.BTC) {
    element = (
      <Text
        isTruncated
        width={{ base: '100px', md: '200px' }}
        fontSize="12px"
        lineHeight="12px"
        textDecoration="underline"
        className="color-gray-text"
        as="a"
        href={`${coinFaucets[currency]}/${transaction_details.data?.txid}`}
        target="_blank"
        rel="noreferrer noopener">
        #{transaction_details.data?.txid}
      </Text>
    );
  }
  return (
    <Flex align="center" justify="space-between" py={2}>
      <Flex align="center">
        <Square mr={2} className={`${bg}`} size="30px" borderRadius="5px">
          <Icon size={15} className={`${color}`} />
        </Square>
        <Stack direction="column" spacing={1} flex={1}>
          <Flex flex={1} justify="space-between">
            <Stack direction={{ base: 'column', md: 'row' }} spacing={1}>
              <Text className="font-sm color-gray-text font-weight-500" mr={2}>
                {currency} - {action}
              </Text>
              <Text
                fontSize={{ base: '11px', md: '14px' }}
                className="color-gray-text font-weight-400"
                mr={2}>
                {parseFloat(amount).toFixed(8)} {currency}
                <Text
                  display={{ base: 'inline', md: 'none' }}
                  as="span"
                  className="color-gray-text font-weight-400"
                  ml="2px">
                  - {status}
                </Text>
              </Text>
            </Stack>
            <Flex direction="column" justify="flex-end">
              <Text
                isTruncated
                width={{ base: '100px', md: '200px' }}
                display={{ base: 'inline-block', md: 'none' }}>
                {element}
              </Text>
              <Text
                display={{ base: 'inlibe', md: 'none' }}
                className="font-xs color-gray-text font-weight-500">
                {formatDate(modified)}
              </Text>
            </Flex>
          </Flex>
          <Text
            isTruncated
            width={{ base: '100px', md: '200px' }}
            display={{ base: 'none', md: 'inline-block' }}>
            {element}
          </Text>
        </Stack>
      </Flex>
      <Text
        flex={0.4}
        display={{ base: 'none', md: 'inline' }}
        className="font-sm color-gray-text font-weight-500">
        {status}
      </Text>
      <Text
        display={{ base: 'none', md: 'inline' }}
        className="font-sm color-gray-text font-weight-500">
        {formatDate(modified)}
      </Text>
    </Flex>
  );
};
