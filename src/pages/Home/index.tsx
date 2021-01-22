import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import {
  NavigationTop,
  AvailableCoinsSmallBox,
  AvailableCoinsLargeBox,
} from '../components';
import { AiOutlineStar } from 'react-icons/ai';
import secure from '../../assets/secure.svg';
import wallet from '../../assets/wallet.svg';
import payout from '../../assets/payout.svg';
import arrowDown from '../../assets/arrow-down.svg';

const Home: React.FC = (): JSX.Element => {
  return (
    <Box>
      <Box as="header" className="header" p="20px 40px">
        <NavigationTop />
        <Box mb={5}>
          <Flex direction="column" px={30} mt={40}>
            <Flex>
              <Box flex={1} mr={10}>
                <Text className="font-xlg color-dark font-weight-600">
                  Buy, Sell and swap Cryptocurrency with ease
                </Text>
                <Text className="color-white font-sm font-weight-400">
                  Fast payout | Secured Trade | Affordable rate
                </Text>
                <AvailableCoinsSmallBox />
              </Box>
              <Box flex={1}>
                <AvailableCoinsLargeBox />
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box
          borderRadius={15}
          boxShadow="0px 5px 20px rgba(20, 102, 204, 0.15)"
          className="bg-white"
          py={10}
          px={20}
          transform="translateY(40%)">
          <Text
            textAlign="center"
            mb={4}
            className="color-gray-heading font-lg font-weight-500">
            CryptoJumbo offers
          </Text>
          <Flex direction={{ sm: 'column', md: 'row' }}>
            <Flex flex={1}>
              <Flex flex={1} direction="column" align="center" justify="center">
                <Image src={secure} mb={2} />
                <Text
                  className="color-gray-text font-md font-weight-400"
                  textAlign="center">
                  Easy{' '}
                  <Text className="color-primary font-weight-600">
                    Secured transaction
                  </Text>
                </Text>
              </Flex>
              <Flex flex={1} direction="column" align="center" justify="center">
                <Image src={payout} mb={2} />
                <Text
                  className="color-primary font-md font-weight-600"
                  textAlign="center">
                  Faster payout{' '}
                  <Text className="color-gray-text font-weight-400">
                    on all transactions
                  </Text>
                </Text>
              </Flex>
            </Flex>{' '}
            <Flex flex={1}>
              <Flex flex={1} direction="column" align="center" justify="center">
                <Image src={arrowDown} mb={2} />
                <Text
                  className="color-gray-text font-md font-weight-400"
                  textAlign="center">
                  up-to-date and{' '}
                  <Text className="color-primary font-weight-600">
                    affordable rate
                  </Text>
                </Text>
              </Flex>
              <Flex flex={1} direction="column" align="center" justify="center">
                <Image src={wallet} mb={2} />
                <Text
                  className="color-primary font-md font-weight-600"
                  textAlign="center">
                  Easy{' '}
                  <Text className="color-gray-text font-weight-400">
                    Secured transaction
                  </Text>
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <HowItWorks />
    </Box>
  );
};

const HowItWorks: React.FC = (): JSX.Element => {
  return (
    <Box>
      <Text as="h2" className="uppercase color-gray-heading font-md font-weight-500">
        HOW IT WORKS
      </Text>
      <Text as="h3" className="font-weight-400 font-sm color-gray-text">
        Buying, selling and swapping cryptocurrency can be simple, easy and secure
        with Crypto Jumbo
      </Text>
      <Flex>
        <Box maxWidth={262} flex={1} p={3} className="how-it-works-step">
          <Flex maxWidth={55} className="padding-sm icon-container" borderRadius={5}>
            <AiOutlineStar className="font-sm icon margin-right-xs" />
            <AiOutlineStar className="font-sm icon margin-right-xs" />
            <AiOutlineStar className="font-sm icon margin-right-xs" />
            <AiOutlineStar className="font-sm icon margin-right-xs" />
          </Flex>
          <Text className="font-sm font-weight-400 color-white">
            Login or sign up to your trading dashboard
          </Text>
        </Box>
        <Box maxWidth={262} flex={1} p={3} className="how-it-works-step">
          <Flex maxWidth={55} className="padding-sm icon-container" borderRadius={5}>
            <AiOutlineStar className="font-sm icon margin-right-xs" />
            <AiOutlineStar className="font-sm icon margin-right-xs" />
            <AiOutlineStar className="font-sm icon margin-right-xs" />
            <AiOutlineStar className="font-sm icon margin-right-xs" />
          </Flex>
          <Text className="font-sm font-weight-400 color-white">
            Select digital currency to Buy, Sell or Swap
          </Text>
        </Box>
        <Box maxWidth={262} flex={1} p={3} className="how-it-works-step">
          <Flex maxWidth={55} className="padding-sm icon-container" borderRadius={5}>
            <AiOutlineStar className="font-sm icon margin-right-xs" />
            <AiOutlineStar className="font-sm icon margin-right-xs" />
            <AiOutlineStar className="font-sm icon margin-right-xs" />
            <AiOutlineStar className="font-sm icon margin-right-xs" />
          </Flex>
          <Text className="font-sm font-weight-400 color-white">
            Complete trading procedures
          </Text>
        </Box>
        <Box maxWidth={262} flex={1} p={3} className="how-it-works-step">
          <Flex maxWidth={55} className="padding-sm icon-container" borderRadius={5}>
            <AiOutlineStar className="font-sm icon margin-right-xs" />
            <AiOutlineStar className="font-sm icon margin-right-xs" />
            <AiOutlineStar className="font-sm icon margin-right-xs" />
            <AiOutlineStar className="font-sm icon margin-right-xs" />
          </Flex>
          <Text className="font-sm font-weight-400 color-white">
            Recieve payment or crypto-currency
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
export default Home;
