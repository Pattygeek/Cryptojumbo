import React from 'react';
import { Box, Flex, Text, Image, Square, Stack } from '@chakra-ui/react';
import {
  NavigationTop,
  PreFooter,
  Footer,
  SectionWrapper,
  ContactForm,
} from '../components';
import { AiOutlineStar } from 'react-icons/ai';
import logo from '../../assets/logo.png';

const About: React.FC = (): JSX.Element => {
  return (
    <Box>
      <Box as="header" className="header" mb={{ base: 40, md: '300px' }} pb="80px">
        <Box p={{ base: '0px', md: '20px 40px' }}>
          <NavigationTop />
        </Box>
        <Box px={5} position="relative">
          <SectionWrapper>
            <Flex direction="column" mt={{ base: '20px', md: 20 }}>
              <Stack
                spacing={{ base: '10px', md: '80px' }}
                align={{ base: 'flex-start', md: 'center' }}
                direction={{ base: 'column', md: 'row' }}
                maxWidth={{ sm: '450px', md: '100%' }}>
                <Flex
                  align="center"
                  justify="center"
                  width={{ base: '44px', sm: '70px', md: '200px' }}
                  height={{ base: 47, sm: '80px', md: '250px' }}
                  className="bg-white"
                  borderRadius={{ base: 10, md: 25 }}
                  py={25}
                  boxShadow="5px 10px 32px 6px rgba(65, 51, 35, 0.2)">
                  <Image
                    src={logo}
                    alt="Crytojumbo logo"
                    width={{ base: '24px', sm: '50px', md: '100px' }}
                    height="auto"
                  />
                </Flex>
                <Box flex={0.85} className="color-white">
                  <Text
                    fontSize={{ base: '13px', md: '24px' }}
                    lineHeight="24px"
                    className="font-weight-600"
                    mb={{ base: '10px', md: 5 }}>
                    About Crypto Jumbo
                  </Text>
                  <Text
                    fontSize={{ base: '12px', md: '18px' }}
                    lineHeight={{ base: '17px', md: '24px' }}
                    className="font-weight-normal">
                    CryptoJumbo is a user friendly crypto platform, aimed at
                    delivering the best crypto services. With active customers in
                    over 15 countries in the world, including but not limited to,
                    Nigeria, Ghana, South Africa, Uganda, Cyprus, Turkey, Russia,
                    United States, Canada, United Kingdom, Kenya.
                  </Text>
                </Box>
              </Stack>
            </Flex>
          </SectionWrapper>
          <Box
            position={{ base: 'absolute' }}
            bottom={{ base: '-160%', sm: '-125%', md: '-155%' }}
            left={{ base: '40px', md: 20, lg: 40 }}
            right={{ base: '40px', md: 20, lg: 40 }}
            transform="translateY(-50%)"
            display="flex"
            flexDirection="column"
            alignItems={{ base: 'flex-start', lg: 'center' }}>
            <Box
              width="100%"
              maxWidth="1500px"
              as="article"
              borderRadius={15}
              boxShadow="0px 5px 20px rgba(20, 102, 204, 0.15)"
              className="bg-white offers"
              py={{ base: '20px', md: '60px' }}
              px={{ base: '30px', md: 20 }}>
              <Text
                textAlign="center"
                mb={{ base: '15px', md: '30px' }}
                fontSize={{ base: '13px', md: '24px' }}
                lineHeight="24px"
                className="color-gray-heading font-weight-500">
                Our Core Values
              </Text>
              <Box>
                <Text
                  fontSize={{ base: '12px', md: '18px' }}
                  lineHeight={{ base: '17px', md: '24px' }}
                  className="color-gray-text font-weight-400"
                  textAlign="center">
                  We have been in service since the year 2016, with thousands of
                  trades and over 10 million USD worth of cryptocurrency traded with
                  us, CryptoJumbo team keeps working endlessly to put a smile on all
                  customer&apos;s face. With active customers in over 15 countries in
                  the world, including but not limited to, Nigeria, Ghana, South
                  Africa, Uganda, Cyprus, Turkey, Russia, United States, Canada,
                  United Kingdom, Kenya.
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <CryptoJumboAim />
      <Box px={5}>
        <ContactForm />
      </Box>
      <PreFooter />
      <Footer />
    </Box>
  );
};

const CryptoJumboAim: React.FC = (): JSX.Element => {
  return (
    <SectionWrapper mb={{ base: '20px', md: '180px' }}>
      <Box px={{ base: 5, md: 0 }}>
        <Stack
          spacing={10}
          justify="center"
          direction={{ base: 'column', sm: 'row' }}
          px={{ base: 0, sm: 10 }}>
          <Box
            flex={0.5}
            className="slim-border-primary"
            borderRadius={10}
            p={{ base: '0px 15px 20px', md: '15px 30px 30px' }}>
            <Text
              as="label"
              className="font-weight-500"
              p={{ base: '5px 10px' }}
              top={{ base: '-15px', md: '-30px' }}
              left="-10px"
              position="relative"
              bg="#f6f7fb"
              color="brand.300"
              fontSize={{ base: '13px', md: '24px' }}
              lineHeight="24px"
              zIndex={2}>
              Our Mission
            </Text>
            <Text
              className="color-gray-text font-weight-400"
              fontSize={{ base: '12px', md: '18px' }}
              lineHeight={{ base: '17px', md: '24px' }}>
              Get products from any trusted US online store using your Nulla
              fermentum diam in augue id estn maximus.
            </Text>
          </Box>
          <Box
            flex={0.5}
            className="slim-border-primary"
            borderRadius={10}
            p={{ base: '0px 15px 20px', md: '15px 30px 30px' }}>
            <Text
              as="label"
              className="font-weight-500"
              p={{ base: '5px 10px' }}
              top={{ base: '-15px', md: '-30px' }}
              left="-10px"
              position="relative"
              bg="#f6f7fb"
              color="brand.300"
              fontSize={{ base: '13px', md: '24px' }}
              lineHeight="24px"
              zIndex={2}>
              Our Vision
            </Text>
            <Text
              className="color-gray-text font-weight-400"
              fontSize={{ base: '12px', md: '18px' }}
              lineHeight={{ base: '17px', md: '24px' }}>
              Get products from any trusted US online store using your Nulla
              fermentum diam in augue id estn maximus.
            </Text>
          </Box>
        </Stack>
      </Box>
    </SectionWrapper>
  );
};

export default About;
