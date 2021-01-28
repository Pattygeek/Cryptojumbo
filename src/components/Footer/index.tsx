import React from 'react';
import { Flex, Box, Text, Image, Center, Stack, Circle } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-white.png';
import {
  RiFacebookFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiYoutubeFill,
  RiInstagramLine,
} from 'react-icons/ri';
import { SectionWrapper } from '../../pages/components';

declare interface PreFooterProps {
  buttonDefaultState?: string;
}
export const PreFooter: React.FC<PreFooterProps> = ({
  buttonDefaultState = 'btn-primary-outline',
}): JSX.Element => {
  return (
    <Center flexDirection="column" className="bg-white" px={10} py="40px">
      <Text
        className="font-lg color-dark font-weight-600"
        textAlign="center"
        mb={5}
        maxWidth={{ base: '320px', md: '350px' }}>
        Buy, Sell and swap Cryptocurrency with ease
      </Text>
      <Box
        as={Link}
        order={{ base: 1, md: 2 }}
        to="/dashboard/trade"
        borderRadius={5}
        className={`${buttonDefaultState} color-primary color-white font-weight-500`}
        _hover={{
          boxShadow: '4px 5px 15px 1px #f7740841',
          bg: 'brand.100',
          color: 'white',
        }}
        px={'50px'}
        py={2}>
        Begin trade
      </Box>
    </Center>
  );
};

export const Footer: React.FC = (): JSX.Element => {
  return (
    <Box
      as="footer"
      className="bg-secondary"
      borderBottom="8px solid"
      borderBottomColor="#FC9700">
      <SectionWrapper mb={0} px={{ base: '15px', md: 20, lg: 40 }} pb={0}>
        <Stack
          spacing={{ base: '25px', md: 10 }}
          direction={{ base: 'column', sm: 'row' }}
          justify="space-between"
          p={{ base: '20px 50px 10px', md: '20px 0px' }}
          className="slim-border-bottom">
          <Box flex={{ base: 1, sm: 0.6, md: 0.3 }}>
            <Flex
              align="center"
              justify={{ base: 'center', sm: 'flex-start' }}
              mb={5}>
              <Image src={logo} mr={3} />
              <Text className="color-white font-weight-500 font-md">
                CryptoJumbo
              </Text>
            </Flex>
            <Text
              className="font-weight-normal color-white"
              textAlign={{ base: 'center', md: 'left' }}
              lineHeight={{ base: '18.5px', md: '15.5px' }}
              fontSize={{ base: '10px', md: '13px' }}>
              The most secure & efficient medium to sell your crypto. We have a
              global reputation for the fastest transaction coupled with the best
              rates
            </Text>
          </Box>
          <Box flex={{ base: 1, sm: 0.4 }}>
            <Box mb={10} display={{ base: 'none', sm: 'inline-block' }}>
              <Box
                as={Link}
                order={{ base: 1, md: 2 }}
                to="/auth"
                px={5}
                borderRadius={5}
                className="padding-vertical-sm bg-white color-dark font-weight-500 font-sm">
                Login / Signup
              </Box>
            </Box>
            <Stack flex={1} direction="row" spacing={{ base: '20px', md: 10 }}>
              <Stack
                direction={{ base: 'row', md: 'column' }}
                spacing={{ base: '10px', md: '20px' }}
                justify={{ base: 'space-between', md: 'flex-start' }}
                flex={1}>
                <Box
                  as={Link}
                  order={{ base: 2, md: 1 }}
                  to="/contact"
                  fontSize={{ base: '10px', md: '14px' }}
                  fontWeight={{ base: '400', md: '500' }}
                  lineHeight="24px"
                  className="color-white footer-link">
                  Contact us
                </Box>
                <Box
                  as={Link}
                  order={{ base: 1, md: 2 }}
                  to="/about"
                  fontSize={{ base: '10px', md: '14px' }}
                  fontWeight={{ base: '400', md: '500' }}
                  lineHeight="24px"
                  className="color-white footer-link">
                  About
                </Box>
              </Stack>
              <Stack
                direction={{ base: 'row', md: 'column' }}
                spacing={{ base: '10px', md: '20px' }}
                justify={{ base: 'space-between', md: 'flex-start' }}
                flex={1}>
                <Box
                  as={Link}
                  order={{ base: 2, md: 1 }}
                  to="/privacy"
                  fontSize={{ base: '10px', md: '14px' }}
                  fontWeight={{ base: '400', md: '500' }}
                  lineHeight="24px"
                  className="color-white">
                  Privacy Policy
                </Box>
                <Box
                  as={Link}
                  order={{ base: 1, md: 2 }}
                  to="/faqs"
                  fontSize={{ base: '10px', md: '14px' }}
                  fontWeight={{ base: '400', md: '500' }}
                  lineHeight="24px"
                  className="color-white footer-link">
                  FAQ
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </SectionWrapper>
      <SectionWrapper mb={0} py={0}>
        <Stack
          spacing={5}
          direction={{ base: 'column', md: 'row' }}
          justify={{ base: 'flex-start', sm: 'space-between' }}
          py={{ base: 0, md: 5 }}>
          <Text
            order={{ base: 2, sm: 1 }}
            textAlign="center"
            fontSize={{ base: '7px', md: '14px' }}
            className="color-white"
            mb={5}>
            Copyright © 2020 CryptoJumbo. All rights reserved
          </Text>
          <Stack
            order={{ base: 1, sm: 2 }}
            justify="center"
            direction="row"
            spacing={5}
            mb={5}>
            <Link to="/">
              <RiFacebookFill size={15} className="color-white footer-link" />
            </Link>
            <Link to="/">
              <RiLinkedinFill size={15} className="color-white footer-link" />
            </Link>
            <Link to="/">
              <RiTwitterFill size={15} className="color-white footer-link" />
            </Link>
            <Link to="/">
              <RiYoutubeFill size={15} className="color-white footer-link" />
            </Link>
            <Link to="/">
              <RiInstagramLine size={15} className="color-white footer-link" />
            </Link>
          </Stack>
        </Stack>
      </SectionWrapper>
    </Box>
  );
};
