import React from 'react';
import { Flex, Square, Text, Box } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { TransactionProp, CurrencySymbols } from '../../../../redux';
import { formatDate, coinFaucets } from '../../../../utils';
import { statusBadge } from '../TransactionTable';

export declare interface TransactionCardProps extends TransactionProp {
  icon?: IconType;
}
export const TransactionCard: React.FC<TransactionCardProps> = ({
  status,
  currency,
  transaction_details,
  modified,
  action,
  amount,
}): JSX.Element => {
  const { color, bg, icon: Icon } = statusBadge[status.toLowerCase()];
  let element = null;
  if (currency === CurrencySymbols.ETH || currency === CurrencySymbols.USDT) {
    element = (
      <Text
        isTruncated
        width="100px"
        fontSize="12px"
        lineHeight="12px"
        textDecoration="underline"
        as="a"
        href={`${coinFaucets[currency]}/${transaction_details.hash}`}
        target="_blank"
        rel="noreferrer noopener">
        {transaction_details.hash}
      </Text>
    );
  } else if (currency === CurrencySymbols.BTC) {
    element = (
      <Text
        isTruncated
        width="100px"
        fontSize="12px"
        lineHeight="12px"
        textDecoration="underline"
        as="a"
        href={`${coinFaucets[currency]}/${transaction_details.data?.txid}`}
        target="_blank"
        rel="noreferrer noopener">
        {transaction_details.data?.txid}
      </Text>
    );
  }
  return (
    <Flex
      flex={1}
      maxWidth={{ base: '100%', sm: '49%', lg: '26%' }}
      className="bg-white"
      p={2}
      borderRadius={5}
      boxShadow="0px 5px 20px rgba(20, 102, 204, 0.15)">
      <Square mr={5} borderRadius="5px" className={`${bg}`} size="45px">
        <Icon size={25} className={`${color}`} />
      </Square>
      <Box flex={1}>
        <Flex justify="space-between">
          <Flex
            className="color-gray-text font-weight-500"
            fontSize="13px"
            lineHeight="20px"
            flex={1}>
            <Text className="uppercase" mr={'2px'}>
              {currency}
            </Text>
            <Text className="capitalize"> - {action}</Text>
          </Flex>
          {element}
        </Flex>
        <Flex justify="space-between">
          <Text className="color-gray-text font-xs" flex={1} mr={2}>
            {currency !== CurrencySymbols.NGN
              ? parseFloat(amount).toFixed(8)
              : parseFloat(amount).toFixed(2)}{' '}
            {currency} - {status}
          </Text>
          <Text className="color-gray-text font-xs" flex={0.4}>
            {formatDate(modified)}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};
