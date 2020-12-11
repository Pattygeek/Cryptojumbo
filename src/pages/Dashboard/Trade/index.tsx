import React, { useState } from 'react';
import { Flex, Box, Image, Text, AspectRatio, ButtonGroup } from '@chakra-ui/react';
import bitcoin from '../../../assets/bitcoin.png';
import eth from '../../../assets/etherum.png';
import usdt from '../../../assets/udth.png';
const Trade: React.FC = (): JSX.Element => {
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  return (
    <Flex direction="column" justify="center" align="center" flex={1}>
      <Flex className="trade">
        <Flex direction="column" flex={2} className="trade-sidebar">
          <Flex direction="column" justify="center" align="center" flex={1}>
            <Image
              src={bitcoin}
              width={{ base: '25px', md: '43px' }}
              height={{ base: '25px', md: '43px' }}
              objectFit="cover"
            />
            <Text className="font-md color-gray-text font-weight-500">BTC</Text>
          </Flex>
          <Flex direction="column" justify="center" align="center" flex={1}>
            <Image
              src={eth}
              width={{ base: '25px', md: '43px' }}
              height={{ base: '25px', md: '43px' }}
              objectFit="cover"
            />
            <Text className="font-md color-gray-text font-weight-500">ETH</Text>
          </Flex>
          <Flex direction="column" justify="center" align="center" flex={1}>
            <Image
              src={usdt}
              width={{ base: '25px', md: '43px' }}
              height={{ base: '25px', md: '43px' }}
              objectFit="cover"
            />
            <Text className="font-md color-gray-text font-weight-500">USDT</Text>
          </Flex>
        </Flex>
        <Box flex={7} p={5} className="bg-white">
          <Flex direction="column" justify="center" align="center">
            <ButtonGroup p={2} className="trade-type-btn-group" mb={5}>
              <Box
                as="button"
                px={5}
                py="1px"
                onClick={() => setTradeType('buy')}
                className={`border-radius-xs ${
                  tradeType === 'buy' ? 'bg-primary color-white' : 'color-primary'
                }`}>
                Buy
              </Box>
              <Box
                as="button"
                px={3}
                py={2}
                onClick={() => setTradeType('sell')}
                className={`border-radius-xs ${
                  tradeType === 'sell' ? 'bg-primary color-white' : 'color-primary'
                }`}>
                Sell
              </Box>
            </ButtonGroup>
            <Text>Buy #231 | Sell #341</Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Trade;
