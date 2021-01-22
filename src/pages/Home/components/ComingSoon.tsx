import React from 'react';
import { SectionWrapper } from '../../components';
import { Flex, Image, Text, Box, Stack } from '@chakra-ui/react';
import iphoneX from '../../../assets/iphone-x.png';
import { FaApple } from 'react-icons/fa';
import { RiGooglePlayFill } from 'react-icons/ri';

export const ComingSoon: React.FC = (): JSX.Element => {
  return (
    <SectionWrapper
      bg="linear-gradient(107.12deg, #FD9800 -24.88%, #EA7C01 93.28%)"
      mt={80}
      mb={'230px'}>
      <Flex px={{ base: 0, sm: 20, md: 50 }} align="center">
        <Image
          src={iphoneX}
          alt="Coming Soon screen"
          width={{ base: '15%', sm: '120px', md: '150px' }}
          height="auto"
          className="mobile-frame"
          mr={{ base: 10, sm: 20, md: 40 }}
        />
        <Box flex={{ base: 1, md: 0.8 }}>
          <Box mb={5}>
            <Text className="font-lg color-white font-weight-500" mb={5}>
              Coming soon - CryptoJumbo App
            </Text>
            <Text
              className="font-md font-weight-400 color-white"
              lineHeight="24px"
              mb={5}>
              We would be launching our mobile app to Apple and Google play store
              soonest.
            </Text>
          </Box>
          <Stack direction="row" spacing={10}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align="center"
              spacing={2}>
              <Box as={RiGooglePlayFill} size={40} className="color-white" />
              <Text className="font-md color-white font-weight-400">
                Google Play
              </Text>
            </Stack>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align="center"
              spacing={2}>
              <Box as={FaApple} size={40} className="color-white" />
              <Text className="font-md color-white font-weight-500">
                Apple Store
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </SectionWrapper>
  );
};
