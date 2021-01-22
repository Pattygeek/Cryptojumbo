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
      <Box as="header" className="header" mb={40}>
        <Box p={{ base: '0px', md: '20px 40px' }}>
          <NavigationTop />
        </Box>
        <SectionWrapper>
          <Flex direction="column" mt={{ base: 10, md: 20 }}>
            <Stack
              spacing={{ base: 5, md: 10 }}
              align={{ base: 'flex-start', md: 'center' }}
              direction={{ base: 'column', md: 'row' }}>
              <Flex
                align="center"
                justify="center"
                width={{ base: 45, md: '200px' }}
                height={{ base: 47, md: '250px' }}
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
              <Box flex={0.6} className="color-white">
                <Text className="font-lg font-weight-600" mb={5}>
                  About Crypto Jumbo
                </Text>
                <Text lineHeight="24px" className="font-md font-weight-400">
                  CryptoJumbo is a user friendly crypto platform, aimed at delivering
                  the best crypto services. With active customers in over 15
                  countries in the world, including but not limited to, Nigeria,
                  Ghana, South Africa, Uganda, Cyprus, Turkey, Russia, United States,
                  Canada, United Kingdom, Kenya.
                </Text>
              </Box>
            </Stack>
          </Flex>
        </SectionWrapper>
        <SectionWrapper>
          <Box
            as="article"
            borderRadius={15}
            boxShadow="0px 5px 20px rgba(20, 102, 204, 0.15)"
            className="bg-white offers"
            py={{ base: '40px', md: '60px' }}
            px={{ base: 5, md: 20 }}
            transform="translateY(15%)">
            <Text
              as="h2"
              textAlign="center"
              mb={4}
              className="color-gray-heading font-lg font-weight-500">
              Our Core Values
            </Text>
            <Box>
              <Text
                lineHeight="24px"
                className="color-gray-text font-slg"
                textAlign="center">
                We have been in service since the year 2016, with thousands of trades
                and over 10 million USD worth of cryptocurrency traded with us,
                CryptoJumbo team keeps working endlessly to put a smile on all
                customer&apos;s face. With active customers in over 15 countries in
                the world, including but not limited to, Nigeria, Ghana, South
                Africa, Uganda, Cyprus, Turkey, Russia, United States, Canada, United
                Kingdom, Kenya.
              </Text>
            </Box>
          </Box>
        </SectionWrapper>
      </Box>
      <CryptoJumboAim />
      <ContactForm />
      <PreFooter />
      <Footer />
    </Box>
  );
};

const CryptoJumboAim: React.FC = (): JSX.Element => {
  return (
    <SectionWrapper>
      <Stack
        spacing={10}
        justify="center"
        direction={{ base: 'column', sm: 'row' }}
        px={10}>
        <Box flex={0.5} className="slim-border-primary" borderRadius={10} p={5}>
          <Text
            as="label"
            className="padding-horizontal-sm padding-vertical-xs font-slg font-weight-500 color-primary"
            top="-30px"
            left="-10px"
            position="relative"
            bg="#f6f7fb"
            zIndex={2}>
            Our Mission
          </Text>
          <Text className="color-gray-text font-md">
            Get products from any trusted US online store using your Nulla fermentum
            diam in augue id estn maximus.
          </Text>
        </Box>
        <Box flex={0.5} className="slim-border-primary" borderRadius={10} p={5}>
          <Text
            as="label"
            className="padding-horizontal-sm padding-vertical-xs font-slg font-weight-500 color-primary"
            top="-30px"
            left="-10px"
            position="relative"
            bg="#f6f7fb"
            zIndex={2}>
            Our Vision
          </Text>
          <Text className="color-gray-text font-md">
            Get products from any trusted US online store using your Nulla fermentum
            diam in augue id estn maximus.
          </Text>
        </Box>
      </Stack>
    </SectionWrapper>
  );
};

export default About;
