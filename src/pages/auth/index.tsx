import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { NavigationTop, AvailableCoinsSmallBox, Footer } from '../components';
import Login from './login';
import SignUp from './signup';
const Auth: React.FC = (): JSX.Element => {
  const [state, setState] = useState<'login' | 'signup' | 'forgot-password'>(
    'login',
  );
  return (
    <Box>
      <Box as="header" className="header" p="20px 40px">
        <NavigationTop />
        <Box mb={5}>
          <Flex direction="column" px={45} mt={20}>
            <Flex justify="space-between">
              <Box flex={0.7} mr={10} mt={20}>
                <Text className="font-xlg color-dark font-weight-600">
                  Buy, Sell and swap Cryptocurrency with ease
                </Text>
                <Text className="color-white font-sm font-weight-400">
                  Fast payout | Secured Trade | Affordable rate
                </Text>
                <AvailableCoinsSmallBox />
              </Box>
              <Box flex={1} justify="flex-end">
                <Flex
                  direction="column"
                  maxWidth={['100%', '365px']}
                  justify="center"
                  align="center"
                  className="padding-md padding-vertical-md bg-white border-radius-xs">
                  {state === 'login' && <Login setState={setState} />}
                  {state === 'signup' && <SignUp setState={setState} />}
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Auth;
