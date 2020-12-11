import React from 'react';
import { Flex, Square, Text, Box } from '@chakra-ui/react';
import { IconType } from 'react-icons';

export declare interface TransactionCardProps {
  icon?: IconType;
  status: 'processing' | 'failed' | 'success';
  coin: string;
  type: 'buy' | 'sell';
  transId: string;
  amount: string;
}
export const TransactionCard: React.FC<TransactionCardProps> = ({
  icon: Icon,
  status,
  coin,
  type,
  transId,
  amount,
}): JSX.Element => {
  const statusBadge: any = {
    success: {
      bg: 'bg-success-transparent',
      color: 'color-success',
    },
    processing: {
      bg: 'bg-warning-transparent',
      color: 'color-warning',
    },
    failed: {
      bg: 'bg-danger-transparent',
      color: 'color-danger',
    },
  };
  return (
    <Flex
      flex={1}
      flexBasis={{ base: '100%', sm: '48%', md: '24%' }}
      maxWidth={{ base: '100%', sm: '48%', md: '24%' }}
      className="bg-white"
      p={2}
      mr={{ base: 0, sm: '1%' }}
      mb={{ base: '2%', md: 0 }}
      borderRadius={5}
      boxShadow="0px 5px 20px rgba(20, 102, 204, 0.15)">
      <Square mr={2} className={`${statusBadge[status].bg}`} size="40px">
        {Icon && <Icon size={20} className={`${statusBadge[status].color}`} />}
      </Square>
      <Box flex={1}>
        <Flex justify="space-between">
          <Flex className="color-gray-text font-xs font-weight-500" flex={0.4}>
            <Text className="uppercase" mr={2}>
              {coin} -
            </Text>
            <Text className="capitalize">{type}</Text>
          </Flex>
          <Text className="color-gray-text font-xs text-overflow-1" flex={0.6}>
            {transId}
          </Text>
        </Flex>
        <Flex justify="space-between">
          <Text className="color-gray-text font-xs" flex={1} mr={2}>
            {amount} {coin} - {status}
          </Text>
          <Text className="color-gray-text font-xs" flex={0.4}>
            12th July
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};
