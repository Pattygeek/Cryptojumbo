import React from 'react';
import { Flex, Image, Box, Text, Stack, StackDivider } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { CryptoWalletProps, CurrencySymbols } from '../../../../redux';
export interface AssetProps extends CryptoWalletProps {
  logo: string;
  currencyName: string;
  action1?: 'deposit' | 'send';
  action2?: 'withdraw' | 'receive';
  maxWidth?: string;
}

export const Asset: React.FC<AssetProps> = ({
  logo,
  currencyName,
  currency,
  available_balance,
  action1,
  action2,
  maxWidth = '24%',
}): JSX.Element => {
  const { push } = useHistory();
  console.log('cryptos', {
    currencyName,
    currency,
    available_balance,
    action1,
    action2,
  });
  return (
    <Flex
      flex={1}
      width={{ base: '100%', sm: '48%', md: maxWidth }}
      maxWidth={{ base: '100%', sm: '48%', md: maxWidth }}
      mb={2}
      p="20px 15px 10px"
      flexDirection="column"
      className="asset-container">
      <Flex flex={1} mb={5}>
        <Image
          src={logo}
          mr={2}
          width={{ base: '33px', md: '43px' }}
          height={{ base: '33px', md: '43px' }}
        />
        <Box>
          <Text className="font-sm color-gray-text">{currencyName}</Text>
          <Text
            as="span"
            className="color-gray-text font-weight-500 font-sm uppercase">
            <Text as="span" className="color-gray-text color-dark" mr={2}>
              {currency !== CurrencySymbols.NGN
                ? parseFloat(available_balance).toFixed(8)
                : available_balance}
            </Text>
            {currency}
          </Text>
        </Box>
      </Flex>
      <Stack
        spacing={2}
        divider={<StackDivider borderColor="gray.500" />}
        direction="row"
        borderRadius="12px"
        bg="#FFFDFA">
        <Box
          onClick={() =>
            push('/dashboard/wallet/transact', {
              coinSymbol: currency.toUpperCase(),
              transactionType: action1,
            })
          }
          as="button"
          type="button"
          flex={1}
          p="12px 15px"
          className="color-primary capitalize font-sm font-weight-500"
          lineHeight="20px">
          {action1}
        </Box>
        <Box
          onClick={() =>
            push('/dashboard/wallet/transact', {
              coinSymbol: currency.toUpperCase(),
              transactionType: action2,
            })
          }
          as="button"
          type="button"
          flex={1}
          p="12px 15px"
          className="color-primary capitalize font-sm font-weight-500"
          lineHeight="20px">
          {action2}
        </Box>
      </Stack>
    </Flex>
  );
};
