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
        <Box px={{ base: '40px', sm: 15, md: 30, lg: '70px' }}>
          <Flex direction="column" mt={{ base: '0px', md: '50px' }}>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: '30px', sm: '80px' }}>
              <Flex
                direction="column"
                align={{ base: 'center', md: 'flex-start' }}
                flex={0.5}
                order={{ base: 2, md: 1 }}
                mb={5}
                mt={{ base: '20px', md: '100px' }}>
                <Text
                  textAlign={{ base: 'center', md: 'left' }}
                  mb={2}
                  pr="20px"
                  px={{ base: '30px', md: 0 }}
                  fontSize={{ base: '18px', md: '30px' }}
                  className="color-dark font-weight-600"
                  lineHeight={{ base: '17px', md: '31px' }}>
                  Buy, Sell and swap Cryptocurrency with ease
                </Text>
                <Text
                  fontSize={{ base: '12px', md: '20px' }}
                  lineHeight="24px"
                  textAlign={{ base: 'center', md: 'left' }}
                  className="color-white font-weight-400">
                  Fast Payout | Secured Trade | Affordable rate
                </Text>
                <AvailableCoinsSmallBox />
              </Flex>
              <Flex
                justify={{ sm: 'center', md: 'flex-end' }}
                order={{ base: 1, md: 2 }}
                flex={0.45}
                mb={5}>
                <Flex
                  direction="column"
                  width={{ base: '100%', sm: '417px' }}
                  maxWidth={{ base: '100%', md: '417px' }}
                  p={{ base: '20px 40px', md: '20px 60px' }}
                  className="bg-white border-radius-xs">
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
