import React, { useState, useCallback, useEffect } from 'react';
import {
  Flex,
  Box,
  Image,
  Text,
  AspectRatio,
  ButtonGroup,
  NumberInput,
  InputLeftElement,
  NumberInputField,
  FormControl,
  InputGroup,
  useDisclosure,
  Center,
} from '@chakra-ui/react';
import bitcoin from '../../../assets/bitcoin.png';
import eth from '../../../assets/ethereum.png';
import usdt from '../../../assets/udth.png';
import { SubmitButton } from '../components';
import Buy from './Buy';
import Sell from './Sell';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import { AppState, CurrencySymbols } from '../../../redux';
import { formatAmount } from '../../../utils';

declare interface Coin {
  symbol: CurrencySymbols;
  logo: string;
}

const coins: any = {
  btc: {
    symbol: CurrencySymbols.BTC,
    logo: bitcoin,
  },
  eth: {
    symbol: CurrencySymbols.ETH,
    logo: eth,
  },
  usdt: {
    symbol: CurrencySymbols.USDT,
    logo: usdt,
  },
};

const Trade: React.FC = (): JSX.Element => {
  const { dollarEquivalent, nairaEquivalent, rates } = useSelector(
    (state: AppState) => {
      const {
        currencies: { dollarEquivalent, nairaEquivalent },
        rates,
      } = state.others;
      return { dollarEquivalent, nairaEquivalent, rates };
    },
  );
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [coin, setCoin] = useState<Coin>(coins.btc);
  const [coinPrice, setCoinPrice] = useState<number>();
  const [dollar, setDollar] = useState<number>(
    (coinPrice || 0) * +dollarEquivalent[coin.symbol],
  );
  // const amountInNaira = ((coinPrice || 0) * +nairaEquivalent[coin.symbol]).toFixed(
  //   2,
  // );
  const amountInNaira = ((coinPrice || 0) * +rates[coin.symbol][tradeType]).toFixed(
    2,
  );
  const handleCoinPriceChange = useCallback(
    (value: string) => {
      setDollar(+value * +dollarEquivalent[coin.symbol]);
      setCoinPrice(+value);
    },
    [coin, dollarEquivalent],
  );
  const handleDollarChange = useCallback(
    (value: string) => {
      setCoinPrice(+value / +dollarEquivalent[coin.symbol]);
      setDollar(+value);
    },
    [coin, dollarEquivalent],
  );
  useEffect(() => {
    if (coinPrice) {
      setDollar(coinPrice * +dollarEquivalent[coin.symbol]);
    }
  }, [coin, coinPrice, dollarEquivalent]);
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      flex={1}
      height="100%"
      width="full"
      pb={{ base: 0, md: 5 }}>
      {!isOpen && (
        <Flex
          className="trade card-shadow"
          borderRadius="0px 6px 6px 0px"
          width={{ base: '100%', sm: '421px' }}
          height={{ base: 'auto', sm: '449px' }}
          boxShadow="8px 8px 16px 4px rgba(137, 143, 150, 0.04)">
          <Flex
            direction="column"
            maxWidth={{ base: '79px', sm: '95px' }}
            className="trade-sidebar"
            borderRadius="0px 6px 6px 0px">
            {Object.keys(coins).map((el) => (
              <Flex
                key={el}
                as="button"
                onClick={() => setCoin(coins[el])}
                className={`${coins[el].symbol === coin.symbol ? 'bg-white' : ''}`}
                transition="0.2s background"
                direction="column"
                justify="center"
                align="center"
                borderRadius={`0px 0px 0px 6px`}
                py={'2px'}
                px={2}
                flex={1}>
                <Box
                  bg={coins[el].symbol === coin.symbol ? 'brand.200' : 'inherit'}
                  transition="0.2s background"
                  p={4}
                  borderRadius={10}>
                  <Image
                    src={coins[el].logo}
                    width={{ base: '25px', md: '45px' }}
                    height={{ base: '25px', md: '45px' }}
                    mb={2}
                    objectFit="cover"
                  />
                  <Text
                    className={`font-md font-weight-500 ${
                      coins[el].symbol === coin.symbol
                        ? 'color-dark'
                        : 'color-gray-text'
                    } `}>
                    {coins[el].symbol}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Flex>
          <Box flex={1} px={10} py={5} className="bg-white">
            <Flex
              direction="column"
              justify="center"
              align="center"
              flex={1}
              width="full"
              height="100%">
              <Center flexDirection="column" mb={10} width="full">
                <ButtonGroup
                  p={'5px'}
                  className="trade-type-btn-group border-radius-sm"
                  mb={5}>
                  <Box
                    as="button"
                    px={'25px'}
                    py="5x"
                    bg={`${tradeType === 'buy' ? 'brand.100' : 'transparent'}`}
                    color={`${tradeType === 'buy' ? 'white' : 'brand.150'}`}
                    onClick={() => setTradeType('buy')}
                    className={`border-radius-sm font-weight-500`}>
                    Buy
                  </Box>
                  <Box
                    as="button"
                    px={'25px'}
                    py={'5px'}
                    bg={`${tradeType === 'sell' ? 'brand.100' : 'transparent'}`}
                    color={`${tradeType === 'sell' ? 'white' : 'brand.150'}`}
                    onClick={() => setTradeType('sell')}
                    className={`border-radius-sm font-weight-500`}>
                    Sell
                  </Box>
                </ButtonGroup>
                <Text className="color-gray-text font-sm">
                  Buy{' '}
                  <Text as="span" className="color-dark">
                    {formatAmount(+rates[coin.symbol].buy, 'NGN')}
                  </Text>
                </Text>
                <Text className="color-gray-text font-sm">
                  Sell{' '}
                  <Text as="span" className="color-dark">
                    {formatAmount(+rates[coin.symbol].sell, 'NGN')}
                  </Text>
                </Text>
              </Center>
              <Box mb={5} width="full">
                <FormControl mb={4} width="full">
                  <Text className="font-weight-500 color-dark font-sm">
                    {coin.symbol}
                  </Text>
                  <InputGroup>
                    <InputLeftElement width={50} ml={-2}>
                      <Image
                        src={coin.logo}
                        width="18px"
                        height="auto"
                        alt="Coin logo"
                      />
                    </InputLeftElement>
                    <NumberInput
                      value={coinPrice}
                      onChange={handleCoinPriceChange}
                      focusBorderColor="brand.100"
                      width="full"
                      mb={1}>
                      <NumberInputField
                        value={coinPrice}
                        onChange={(e) => handleCoinPriceChange(e.target.value)}
                        pl={'30px'}
                      />
                    </NumberInput>
                  </InputGroup>
                </FormControl>
                <Box>
                  <Text
                    fontSize={{ base: '14px', md: '16px' }}
                    lineHeight="18px"
                    className="font-weight-500 color-gray-text">
                    USD
                  </Text>
                  <NumberInput
                    mb={1}
                    value={dollar}
                    onChange={handleDollarChange}
                    focusInputOnChange={false}
                    flex={0.7}
                    backgroundColor="gray.300"
                    border="0px"
                    focusBorderColor="transparent">
                    <NumberInputField
                      value={dollar}
                      onChange={(e) => handleDollarChange(e.target.value)}
                      border="0px"
                      px={2}
                      className="borderless-input"
                    />
                  </NumberInput>
                  <Flex justify="flex-end">
                    <Box
                      display="inline-block"
                      p={2}
                      borderRadius={4}
                      className="bg-gray">
                      <Text
                        textAlign="right"
                        className="font-sm color-gray-text font-weight-400">
                        {formatAmount(+amountInNaira, 'NGN')}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>
              <Flex
                direction="column"
                justify="flex-end"
                flex={1}
                width="full"
                mb={'25px'}>
                <SubmitButton disabled={!coinPrice} action={onOpen}>
                  {tradeType.toUpperCase()} {coin.symbol}
                </SubmitButton>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      )}
      {isOpen && tradeType === 'buy' && (
        <Buy
          coinValue={`${coinPrice}`}
          coin={coin.symbol}
          heading={`${tradeType}ing ${coinPrice}${coin.symbol} @ ${formatAmount(
            +amountInNaira,
            'NGN',
          )}`}
          amount={amountInNaira}
          onClose={onClose}
        />
      )}
      {isOpen && tradeType === 'sell' && (
        <Sell
          coinValue={`${coinPrice}`}
          coin={coin.symbol}
          heading={`${tradeType}ing ${coinPrice}${coin.symbol} @ ${formatAmount(
            +amountInNaira,
            'NGN',
          )}`}
          amount={amountInNaira}
          onClose={onClose}
        />
      )}
    </Flex>
  );
};

export default Trade;
