import React, { useState } from 'react';
import {
  Flex,
  Image,
  Box,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import btc from '../../../../assets/bitcoin.png';
import etherum from '../../../../assets/etherum.png';
import usdt from '../../../../assets/udth.png';
import { swapOptions } from '../../../../utils';
import { swapCryptoRequest } from '../../../../redux';

export interface TradeCoinProps {
  logo: string;
  symbol: string;
}

export const TradeCoin: React.FC<TradeCoinProps> = ({
  logo,
  symbol,
}): JSX.Element => {
  return (
    <Stack
      align="center"
      flex={1}
      // maxWidth={{ base: '100%', sm: '160px', md: '270.81px' }}
      className="bg-white border-radius-sm"
      spacing={'20px'}
      p={{ base: '15px', sm: '15px 20px' }}
      direction={{ base: 'column', sm: 'row' }}>
      <Flex align="center">
        <Image
          src={logo}
          mr={{ base: '10px', sm: '20px' }}
          flex={{ base: 1, sm: 0 }}
          width={{ base: '43px', md: '53px' }}
          height={{ base: '43px', md: '53px' }}
        />
        <Box>
          <Text
            as="h3"
            className="font-md color-dark font-weight-600"
            lineHeight="20px">
            {symbol}
          </Text>
          <Text
            className="color-gray-text font-xs font-weight-400"
            lineHeight="14px"
            textOverflow="nowrap">
            Buy / Sell
          </Text>
          <Text
            className="color-gray-text font-xs font-weight-500"
            lineHeight="14px"
            textOverflow="nowrap">
            #400 / #401
          </Text>
        </Box>
      </Flex>
      <Box
        as={Link}
        _hover={{ background: '#F9F1EA' }}
        borderRadius="5px"
        p="10px 15px"
        className="color-primary font-weight-500"
        to="/dashboard/trade"
        lineHeight="20px"
        fontSize="12px">
        Buy/Sell
      </Box>
    </Stack>
  );
};

export const coinLogos: any = {
  ETH: etherum,
  BTC: btc,
  USDT: usdt,
};

export const SwapCoin: React.FC = (): JSX.Element => {
  const { push } = useHistory();
  const [swapCoin, setSwapCoin] = useState<{ from: string; to: string }>({
    from: 'USDT',
    to: 'ETH',
  });

  const { from, to } = swapCoin;
  return (
    <Stack
      align="center"
      flex={1}
      borderWidth="2px"
      borderColor="brand.100"
      borderStyle="solid"
      borderRadius="15px"
      className="bg-white"
      p={'15px 20px'}
      spacing={'20px'}
      direction={{ base: 'column', sm: 'row' }}>
      <Stack
        direction="row"
        spacing="10px"
        borderRadius={5}
        border="1px solid #BDBDBD"
        mb={{ sm: 5, md: 0 }}
        p={'6px'}
        align="center">
        <Flex align="center">
          <Image
            src={coinLogos[swapCoin.from]}
            width={{ base: 25, md: 30 }}
            height={{ base: 25, md: 30 }}
            mr={2}
          />
          <BsArrowRight className="color-gray-text" size={23} />
        </Flex>
        <Flex align="center">
          <Image
            src={coinLogos[swapCoin.to]}
            width={{ base: 25, md: 30 }}
            height={{ base: 25, md: 30 }}
            mr={2}
          />
          <Box position="relative" className="tooltip-wrapper" mt="-4px">
            <Box as="button">
              <IoIosArrowDown size={20} />
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
        </Flex>
      </Stack>
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
    </Stack>
  );
};
