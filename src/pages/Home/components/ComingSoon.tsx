import React from 'react';
import { SectionWrapper } from '../../components';
import { Flex, Image, Text, Box, Stack } from '@chakra-ui/react';
import iphoneX from '../../../assets/iphone-x.png';
import { FaApple } from 'react-icons/fa';
import { RiGooglePlayFill } from 'react-icons/ri';
import apple from '../../../assets/apple.png';
import googlePlay from '../../../assets/g-play.png';
export const ComingSoon: React.FC = (): JSX.Element => {
  return (
    <SectionWrapper
      bg="linear-gradient(107.12deg, #FD9800 -24.88%, #EA7C01 93.28%)"
      mt={{ base: '100px', md: 80 }}
      mb={{ base: '80px', md: '230px' }}
      py={0}
      pr={{ base: '22px', md: 20, lg: 40 }}>
      <Flex px={{ base: '10px', sm: 20, md: 50 }} align="center">
        <Image
          src={iphoneX}
          alt="Coming Soon screen"
          width={{ base: '92px', sm: '120px', md: '150px' }}
          height="auto"
          className="mobile-frame"
          mr={{ base: '50px', sm: 20, md: 40 }}
        />
        <Box flex={{ base: 1, md: 0.8 }}>
          <Box mb={{ base: '10px', md: 5 }}>
            <Text
              lineHeight={{ base: '15.5px', md: '24px' }}
              fontSize={{ base: '13px', md: '26px' }}
              fontWeight={{ base: '400', md: '500' }}
              className="color-white"
              mb={{ base: '10px', md: 5 }}>
              Coming soon - CryptoJumbo App
            </Text>
            <Text
              className="font-md font-weight-400 color-white"
              lineHeight={{ base: '12px', md: '24px' }}
              fontSize={{ base: '9px', md: '18px' }}
              mb={{ base: '10px', md: 5 }}>
              We would be launching our mobile app to Apple and Google play store
              soonest.
            </Text>
          </Box>
          <Stack direction="row" spacing={{ base: '20px', md: 10 }}>
            <Stack direction="row" align="center" spacing={2}>
              <Image
                src={googlePlay}
                width={{ base: '15px', md: '25px' }}
                height="auto"
              />
              <Text
                fontSize={{ base: '10px', md: '26px' }}
                className="color-white font-weight-400">
                Google play
              </Text>
            </Stack>
            <Stack direction="row" align="center" spacing={2}>
              <Image
                src={apple}
                width={{ base: '15px', md: '25px' }}
                height="auto"
              />
              <Text
                fontSize={{ base: '10px', md: '26px' }}
                className="color-white font-weight-500">
                Apple Store
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </SectionWrapper>
  );
};
