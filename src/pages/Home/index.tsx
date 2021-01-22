import React from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  AspectRatio,
  Stack,
  Center,
} from '@chakra-ui/react';
import {
  NavigationTop,
  AvailableCoinsSmallBox,
  AvailableCoinsLargeBox,
  PreFooter,
  Footer,
  SectionWrapper,
} from '../components';
import { AiOutlineStar } from 'react-icons/ai';
import secure from '../../assets/secure.png';
import wallet from '../../assets/wallet.svg';
import payout from '../../assets/payout.svg';
import arrowDown from '../../assets/arrow-down.svg';
import currencies from '../../assets/currency-group.png';
import asteriks from '../../assets/asteriks.png';
import cheque from '../../assets/cheque.png';
import money from '../../assets/money.png';
import { WhyTrustUs, ComingSoon, FAQs } from './components';

const Home: React.FC = (): JSX.Element => {
  return (
    <Box>
      <Box
        as="header"
        className="header"
        p={{ base: '0px', sm: '15px 20px', md: '20px 40px' }}
        mb={{ base: '70%', sm: '40%', md: '20%' }}>
        <NavigationTop />
        <Box px={{ base: 5, sm: 15, md: 30, lg: '80px' }}>
          <Box mb={5}>
            <Flex direction="column" mt={40}>
              <Flex direction={{ base: 'column', md: 'row' }}>
                <Box flex={0.45} mr={{ base: '0px', md: 10 }}>
                  <Text
                    textAlign={{ base: 'center', md: 'left' }}
                    mb={2}
                    pr="20px"
                    className="font-xlg color-dark font-weight-600"
                    lineHeight="31px">
                    Buy, Sell and swap Cryptocurrency with ease
                  </Text>
                  <Text
                    textAlign={{ base: 'center', md: 'left' }}
                    className="color-white font-slg font-weight-400">
                    Fast Payout | Secured Trade | Affordable rate
                  </Text>
                  <AvailableCoinsSmallBox />
                </Box>
                <Box flex={0.55}>
                  <AvailableCoinsLargeBox />
                </Box>
              </Flex>
            </Flex>
          </Box>
          <Box
            borderRadius={15}
            boxShadow="0px 5px 20px rgba(20, 102, 204, 0.15)"
            className="bg-white offers"
            py={{ base: '40px', md: '60px' }}
            px={{ base: 5, md: 20 }}
            transform="translateY(50%)">
            <Text
              textAlign="center"
              mb={'30px'}
              className="color-gray-heading font-lg font-weight-500">
              CryptoJumbo offers
            </Text>
            <Flex spacing={5} direction={{ base: 'column', md: 'row' }}>
              <Flex flex={1} mb={5}>
                <Stack
                  flex={1}
                  spacing={{ base: 5, md: 10 }}
                  direction="column"
                  align="center"
                  justify="center">
                  <Image src={secure} mb={2} />
                  <Box display="inline-block" lineHeight="24px">
                    <Text
                      display="inline"
                      className="color-gray-text font-md font-weight-400"
                      textAlign="center"
                      mr={1}>
                      Easy &
                    </Text>
                    <Text
                      display="inline"
                      className="color-primary font-md font-weight-600">
                      Secured
                    </Text>
                    <Text
                      textAlign="center"
                      className="color-primary font-md font-weight-600">
                      transactions
                    </Text>
                  </Box>
                </Stack>
                <Stack
                  flex={1}
                  spacing={{ base: 5, md: 10 }}
                  direction="column"
                  align="center"
                  justify="center">
                  <Image src={payout} mb={2} />
                  <Box display="inline-block" lineHeight="24px" className="font-md">
                    <Text
                      display="inline"
                      className="color-primary font-md font-weight-600"
                      textAlign="center"
                      mr={2}>
                      Faster Payouts
                    </Text>
                    <Text
                      display="inline"
                      className="color-gray-text font-md font-weight-400"
                      textAlign="center">
                      on
                    </Text>
                    <Text
                      textAlign="center"
                      className="color-gray-text font-weight-400">
                      all transactions
                    </Text>
                  </Box>
                </Stack>
              </Flex>{' '}
              <Flex flex={1} mb={5}>
                <Stack
                  flex={1}
                  spacing={{ base: 5, md: 10 }}
                  direction="column"
                  align="center"
                  justify="center">
                  <Image src={arrowDown} mb={2} />
                  <Text
                    className="color-gray-text font-md font-weight-400"
                    textAlign="center">
                    up-to-date &{' '}
                    <Text className="color-primary font-weight-600">
                      affordable rate
                    </Text>
                  </Text>
                </Stack>
                <Stack
                  flex={1}
                  spacing={{ base: 5, md: 10 }}
                  direction="column"
                  align="center"
                  justify="center">
                  <Image src={wallet} mb={2} />
                  <Box display="inline-block" lineHeight="24px">
                    <Text
                      display="inline"
                      className="color-gray-text font-md font-weight-400"
                      textAlign="center"
                      mr={1}>
                      We Provide
                    </Text>
                    <Text
                      display="inline"
                      className="color-primary font-md font-weight-600">
                      Multiple
                    </Text>
                    <Text
                      textAlign="center"
                      className="color-primary font-md font-weight-600">
                      Crypto-Wallet
                    </Text>
                  </Box>
                </Stack>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
      <HowItWorks />
      <WhyTrustUs />
      <ComingSoon />
      <FAQs />
      <PreFooter />
      <Footer />
    </Box>
  );
};

const HowItWorks: React.FC = (): JSX.Element => {
  return (
    <SectionWrapper>
      <Center flexDirection="column" mb={5}>
        <Box maxWidth="550px">
          <Text
            as="h2"
            className="uppercase color-gray-heading font-slg font-weight-500"
            textAlign="center"
            mb={5}>
            HOW IT WORKS
          </Text>
          <Text
            as="h3"
            className="font-weight-400 font-md color-gray-text"
            textAlign="center">
            Buying, selling and swapping cryptocurrency can be simple, easy and
            secure with Crypto Jumbo
          </Text>
        </Box>
      </Center>
      <Stack spacing={0} direction={{ base: 'column', sm: 'row' }}>
        <Stack
          direction={{ base: 'row', sm: 'column' }}
          className="how-it-works-step"
          spacing={5}
          flex={0.3}
          p={7}
          borderTopLeftRadius={5}
          borderBottomLeftRadius={5}>
          <Image src={asteriks} width="60px" height="auto" alt="Security" />
          <Text className="font-md font-weight-400 color-white" lineHeight="24px">
            Login or sign up to your trading dashboard
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'row', sm: 'column' }}
          className="how-it-works-step"
          spacing={5}
          flex={0.3}
          p={7}>
          <Image src={currencies} width="60px" height="auto" alt="Currencies" />
          <Text className="font-md font-weight-400 color-white" lineHeight="24px">
            Select digital currency to Buy, Sell or Swap
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'row', sm: 'column' }}
          className="how-it-works-step"
          spacing={5}
          flex={0.3}
          p={7}>
          <Image src={cheque} width="60px" height="auto" alt="Cheque" />
          <Text className="font-md font-weight-400 color-white" lineHeight="24px">
            Complete trading procedures
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'row', sm: 'column' }}
          className="how-it-works-step"
          spacing={5}
          flex={0.3}
          p={7}
          borderTopRightRadius={5}
          borderBottomRightRadius={5}>
          <Image src={money} width="60px" height="auto" alt="Cheque" />
          <Text className="font-md font-weight-400 color-white" lineHeight="24px">
            Recieve payment or crypto-currency
          </Text>
        </Stack>
      </Stack>
    </SectionWrapper>
  );
};
export default Home;
