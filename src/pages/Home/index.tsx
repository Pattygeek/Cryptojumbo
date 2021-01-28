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
        <Box px={{ base: 10, sm: 15, md: 30, lg: '80px' }}>
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
            py={{ base: '20px', md: '60px' }}
            px={{ base: 5, md: 20 }}
            transform={{ base: 'translateY(80%)', md: 'translateY(50%)' }}>
            <Text
              textAlign="center"
              mb={'30px'}
              fontSize={{ base: '13px', md: '24px' }}
              lineHeight="24px"
              className="color-gray-heading font-weight-500">
              CryptoJumbo offers
            </Text>
            <Flex spacing={5} direction={{ base: 'column', md: 'row' }}>
              <Flex flex={1} mb={5}>
                <Stack
                  flex={1}
                  spacing={{ base: '10px', md: 10 }}
                  direction="column"
                  align="center"
                  justify="center">
                  <Image
                    src={secure}
                    width={{ base: '37px', md: '78px' }}
                    height="auto"
                  />
                  <Box
                    display="inline-block"
                    fontSize={{ base: '9px', md: '18px' }}
                    lineHeight={{ base: '12px', md: '24px' }}>
                    <Text
                      display="inline"
                      className="color-gray-text font-weight-400"
                      textAlign="center"
                      mr={1}>
                      Easy &
                    </Text>
                    <Text display="inline" className="color-primary font-weight-600">
                      Secured
                    </Text>
                    <Text
                      textAlign="center"
                      className="color-primary font-weight-600">
                      transactions
                    </Text>
                  </Box>
                </Stack>
                <Stack
                  flex={1}
                  spacing={{ base: '10px', md: 10 }}
                  direction="column"
                  align="center"
                  justify="center">
                  <Image
                    src={payout}
                    width={{ base: '37px', md: '78px' }}
                    height="auto"
                  />
                  <Box
                    display="inline-block"
                    fontSize={{ base: '9px', md: '18px' }}
                    lineHeight={{ base: '12px', md: '24px' }}>
                    <Text
                      display="inline"
                      className="color-primary font-weight-600"
                      textAlign="center"
                      mr={2}>
                      Faster Payouts
                    </Text>
                    <Text
                      display="inline"
                      className="color-gray-text font-weight-400"
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
                  spacing={{ base: '10px', md: 10 }}
                  direction="column"
                  align="center"
                  justify="center">
                  <Image
                    src={arrowDown}
                    width={{ base: '37px', md: '78px' }}
                    height="auto"
                  />
                  <Box
                    fontSize={{ base: '9px', md: '18px' }}
                    lineHeight={{ base: '12px', md: '24px' }}>
                    <Text
                      className="color-gray-text font-weight-400"
                      textAlign="center">
                      up-to-date &{' '}
                      <Text className="color-primary font-weight-600">
                        affordable rate
                      </Text>
                    </Text>
                  </Box>
                </Stack>
                <Stack
                  flex={1}
                  spacing={{ base: '10px', md: 10 }}
                  direction="column"
                  align="center"
                  justify="center">
                  <Image
                    src={wallet}
                    width={{ base: '37px', md: '78px' }}
                    height="auto"
                  />
                  <Box
                    display="inline-block"
                    fontSize={{ base: '9px', md: '18px' }}
                    lineHeight={{ base: '12px', md: '24px' }}>
                    <Text
                      display="inline"
                      className="color-gray-text font-weight-400"
                      textAlign="center"
                      mr={1}>
                      We Provide
                    </Text>
                    <Text display="inline" className="color-primary font-weight-600">
                      Multiple
                    </Text>
                    <Text
                      textAlign="center"
                      className="color-primary font-weight-600">
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
    <SectionWrapper px={{ base: 10, md: 20 }}>
      <Center flexDirection="column" mb={5}>
        <Box maxWidth="550px" px="30px">
          <Text
            as="h2"
            fontSize={{ base: '13px', md: '24px' }}
            lineHeight="24px"
            className="uppercase color-gray-heading font-weight-500"
            textAlign="center"
            mb={'15px'}>
            HOW IT WORKS
          </Text>
          <Text
            as="h3"
            fontSize={{ base: '10px', md: '18px' }}
            lineHeight={{ base: '12px', md: '24px' }}
            className="font-weight-400 color-gray-text"
            textAlign="center">
            Buying, selling and swapping cryptocurrency can be simple, easy and
            secure with Crypto Jumbo
          </Text>
        </Box>
      </Center>
      <Stack spacing={'-1px'} direction={{ base: 'column', sm: 'row' }}>
        <Stack
          direction={{ base: 'row', sm: 'column' }}
          justify={{ base: 'flex-start', sm: 'space-between' }}
          align={{ base: 'center', md: 'flex-start' }}
          className="how-it-works-step"
          spacing={5}
          flex={0.35}
          p={{ base: '40px 60px', sm: 7 }}
          borderTopLeftRadius={5}
          borderTopRightRadius={{ base: 5, md: 0 }}
          borderBottomLeftRadius={{ base: 0, md: 5 }}>
          <Image src={asteriks} width="54px" height="auto" alt="Security" />
          <Text
            fontSize={{ base: '11px', md: '18px' }}
            lineHeight={{ base: '17.5px', md: '24px' }}
            className="font-weight-400 color-white">
            Login or sign up to your trading dashboard
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'row', sm: 'column' }}
          align={{ base: 'center', md: 'flex-start' }}
          className="how-it-works-step"
          spacing={5}
          flex={0.35}
          p={{ base: '40px 60px', sm: 7 }}>
          <Image src={currencies} width="54px" height="auto" alt="Currencies" />
          <Text
            fontSize={{ base: '11px', md: '18px' }}
            lineHeight={{ base: '17.5px', md: '24px' }}
            className="font-weight-400 color-white">
            Select digital currency to Buy, Sell or Swap
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'row', sm: 'column' }}
          align={{ base: 'center', md: 'flex-start' }}
          className="how-it-works-step"
          spacing={5}
          flex={0.35}
          p={{ base: '40px 60px', sm: 7 }}>
          <Image src={cheque} width="54px" height="auto" alt="Cheque" />
          <Text
            fontSize={{ base: '11px', md: '18px' }}
            lineHeight={{ base: '17.5px', md: '24px' }}
            className="font-weight-400 color-white">
            Complete trading procedures
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'row', sm: 'column' }}
          align={{ base: 'center', md: 'flex-start' }}
          className="how-it-works-step"
          spacing={5}
          flex={0.35}
          p={{ base: '40px 60px', sm: 7 }}
          borderTopRightRadius={{ base: 0, md: 5 }}
          borderBottomRightRadius={5}
          borderBottomLeftRadius={{ base: 5, md: 0 }}>
          <Image src={money} width="54px" height="auto" alt="Cheque" />
          <Text
            fontSize={{ base: '11px', md: '18px' }}
            lineHeight={{ base: '17.5px', md: '24px' }}
            className="font-weight-400 color-white">
            Recieve payment or crypto-currency
          </Text>
        </Stack>
      </Stack>
    </SectionWrapper>
  );
};
export default Home;
