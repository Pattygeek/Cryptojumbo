import React, { useState } from 'react';
import { Box, Flex, Text, Stack } from '@chakra-ui/react';
import {
  NavigationTop,
  AvailableCoinsSmallBox,
  Footer,
  SectionWrapper,
} from '../components';
import Login from './login';
import SignUp from './signup';
import ForgotPassword from './ForgotPassword';
import VerifyOtp from './VerifyOtp';
import ResetPassword from './ResetPassword';
import VerifyEmail from './VerifyEmail';

const Auth: React.FC = (): JSX.Element => {
  const [state, setState] = useState<
    | 'login'
    | 'signup'
    | 'forgot-password'
    | 'reset-password'
    | 'verify-otp'
    | 'verify-email'
  >('login');
  return (
    <Box>
      <Box
        as="header"
        className="header"
        p={{ base: '0px', sm: '15px 20px', md: '20px 40px' }}>
        <NavigationTop />
        <Box px={{ base: 10, sm: 15, md: 30, lg: '70px' }}>
          <Flex direction="column" mt={'50px'}>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={'80px'}>
              <Flex
                direction="column"
                align={{ base: 'center', md: 'flex-start' }}
                flex={0.5}
                order={{ base: 2, md: 1 }}
                mb={5}
                mt={'100px'}>
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
                  className="color-white font-slg font-weight-400"
                  lineHeight="24px">
                  Fast Payout | Secured Trade | Affordable rate
                </Text>
                <AvailableCoinsSmallBox />
              </Flex>
              <Flex order={{ base: 1, md: 2 }} flex={0.45} mb={5}>
                <Flex
                  direction="column"
                  height={{ base: '100%', md: '481px' }}
                  maxWidth={{ base: '100%', md: '417px' }}
                  justify="center"
                  align="center"
                  className="padding-md padding-vertical-md bg-white border-radius-xs">
                  {state === 'login' && <Login setState={setState} />}
                  {state === 'signup' && (
                    <SignUp state={state} setState={setState} />
                  )}
                  {state === 'forgot-password' && (
                    <ForgotPassword setState={setState} />
                  )}
                  {state === 'verify-otp' && <VerifyOtp setState={setState} />}
                  {state === 'reset-password' && (
                    <ResetPassword setState={setState} />
                  )}
                </Flex>
              </Flex>
            </Stack>
          </Flex>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Auth;
