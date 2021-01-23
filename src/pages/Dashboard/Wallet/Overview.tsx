import React, { useState } from 'react';
import {
  Stack,
  Box,
  Flex,
  Text,
  Center,
  Image,
  StackDivider,
} from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { Asset, TransactionTable, coinLogos } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AppState, CurrencySymbols } from '../../../redux';
import btc from '../../../assets/bitcoin.png';
import ethereum from '../../../assets/ethereum.png';
import usdt from '../../../assets/udth.png';
import naira from '../../../assets/naira.png';
import { swapOptions } from '../../../utils';

const Overview: React.FC = (): JSX.Element => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} spacing={10}>
      <Assets />
      <TransactionTable />
    </Stack>
  );
};

const Assets: React.FC = (): JSX.Element => {
  const { cryptos } = useSelector((state: AppState) => {
    const { cryptos } = state.wallet;
    return { cryptos };
  });
  return (
    <Box flex={0.25}>
      <Flex align="center" mb={3} p="10px 15px">
        <Text className="font-weight-500 color-dark font-md" mr={4}>
          Your assets
        </Text>
        <Box flex={1} height="2px" bg="#E1E1E1" />
      </Flex>
      <Stack
        direction="column"
        divider={<StackDivider borderColor="gray.500" />}
        className="bg-white border-radius-sm"
        boxShadow="8px 8px 16px 4px rgba(137, 143, 150, 0.04)"
        // p={5}
        mb={'20px'}>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          spacing={2}
          py={1}
          divider={<StackDivider borderColor="gray.500" />}>
          <Asset
            {...cryptos[CurrencySymbols.NGN]}
            logo={naira}
            currencyName="Naira"
            action1="deposit"
            action2="withdraw"
            maxWidth="48%"
          />
          <Asset
            {...cryptos[CurrencySymbols.BTC]}
            logo={btc}
            currencyName="Bitcoin"
            action1="send"
            action2="receive"
            maxWidth="48%"
          />
        </Stack>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          divider={<StackDivider borderColor="gray.500" />}
          py={1}
          spacing={2}>
          <Asset
            {...cryptos[CurrencySymbols.ETH]}
            logo={ethereum}
            currencyName="Ethereum"
            action1="send"
            action2="receive"
            maxWidth="48%"
          />
          <Asset
            {...cryptos[CurrencySymbols.USDT]}
            logo={usdt}
            currencyName="Tether"
            action1="send"
            action2="receive"
            maxWidth="48%"
          />
        </Stack>
      </Stack>
      <Swap />
    </Box>
  );
};

const Swap: React.FC = (): JSX.Element => {
  const { push } = useHistory();
  const [swapCoin, setSwapCoin] = useState<{ from: string; to: string }>({
    from: 'ETH',
    to: 'BTC',
  });
  const { from, to } = swapCoin;

  return (
    <Box flex={0.3} mb={5}>
      <Flex align="center" mb={'6px'} p="10px 15px">
        <Text className="font-weight-500 color-dark font-md" mr={4}>
          Swap assets
        </Text>
        <Box flex={1} height="2px" bg="#E1E1E1" />
      </Flex>
      <Box className="border-radius-sm bg-white" p={5}>
        <Stack direction="row" spacing={5}>
          <Stack
            direction="row"
            align="center"
            spacing={'10px'}
            border="1px solid #BDBDBD"
            px={'2px'}
            py={'4px'}
            borderRadius={5}>
            <Flex mr={1} align="center">
              <Image
                src={coinLogos[swapCoin.from]}
                alt="Coin logo"
                width="35px"
                height="auto"
                mr={1}
              />
              <Text className="font-weight-500 color-dark font-sm">
                {swapCoin.from}
              </Text>
            </Flex>
            <Box>
              <BsArrowRight size={23} className="color-dark" />
            </Box>
            <Flex mr={1} align="center">
              <Image
                src={coinLogos[swapCoin.to]}
                alt="Coin logo"
                width="35px"
                height="auto"
                mr={1}
              />
              <Text className="font-weight-500 color-dark font-sm">
                {swapCoin.to}
              </Text>
            </Flex>
            <Box position="relative" className="tooltip-wrapper">
              <Box as="button" mr={1} mt={'-3px'}>
                <Box as={IoIosArrowDown} size={20} />
              </Box>
              <Box
                mb={5}
                py={3}
                position="absolute"
                right="50%"
                transform="translateX(50%)"
                top="100%"
                className="bg-white slim-border card-shadow tooltip"
                border="none"
                minWidth="150px">
                {swapOptions.map((option, index) => (
                  <Box
                    as="button"
                    width="full"
                    onClick={() => setSwapCoin({ from: option[0], to: option[1] })}
                    key={index}
                    px={2}
                    py={3}
                    className="font-sm color-dark font-weight-500 secondary-ripple-effect">
                    {option[0]} to {option[1]}
                  </Box>
                ))}
              </Box>
            </Box>
          </Stack>
          <Center flex={1}>
            <Box
              as="button"
              onClick={() =>
                push('/dashboard/wallet/transact', {
                  swapProp: { from, to },
                  transactionType: 'swap',
                  coinSymbol: 'swap',
                })
              }
              _hover={{ background: '#F9F1EA' }}
              borderRadius="5px"
              p="10px 15px"
              className="color-primary font-weight-500"
              lineHeight="20px"
              fontSize="12px">
              Swap
            </Box>
          </Center>
        </Stack>
      </Box>
    </Box>
  );
};
export default Overview;
