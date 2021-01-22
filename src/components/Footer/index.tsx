import React from 'react';
import { Flex, Box, Text, Image, Center, Stack } from '@chakra-ui/react';
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
    <Center flexDirection="column" className="bg-white padding-vertical-lg" px={10}>
      <Text
        className="font-slg color-dark font-weight-600"
        textAlign="center"
        mb={5}
        maxWidth={{ base: '100%', sm: '300px' }}>
        Buy, Sell and swap Cryptocurrency with ease
      </Text>
      <Box
        as={Link}
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
    <SectionWrapper
      as="footer"
      className="bg-secondary"
      borderBottom="4px solid"
      borderBottomColor="brand.100"
      mb={0}>
      <Stack
        spacing={10}
        direction={{ base: 'column', sm: 'row' }}
        justify="space-between"
        py={5}
        className="slim-border-bottom">
        <Box flex={{ base: 1, sm: 0.6, md: 0.3 }}>
          <Flex align="center" justify={{ base: 'center', sm: 'flex-start' }} mb={5}>
            <Image src={logo} mr={3} />
            <Text className="color-white font-we font-weight-500ight-500 font-sm">
              CryptoJumbo
            </Text>
          </Flex>
          <Text className="font-weight-normal font-sm color-white">
            The most secure & efficient medium to sell your crypto. We have a global
            reputation for the fastest transaction coupled with the best rates
          </Text>
        </Box>
        <Box flex={{ base: 1, sm: 0.4 }}>
          <Box mb={10} display={{ base: 'none', sm: 'inline-block' }}>
            <Box
              as={Link}
              to="/auth"
              px={5}
              borderRadius={5}
              className="padding-vertical-sm bg-white color-dark font-weight-500 font-sm">
              Login / Signup
            </Box>
          </Box>
          <Stack
            direction="row"
            justify={{ base: 'center', sm: 'flex-start' }}
            spacing={{ base: 3, sm: 10 }}>
            <Stack
              direction={{ base: 'row', md: 'column' }}
              spacing={{ base: 3, sm: 5 }}>
              <Link to="/contact" className="color-white font-sm font-weight-500">
                Contact Us
              </Link>
              <Link to="/about" className="color-white font-sm font-weight-500">
                About
              </Link>
            </Stack>
            <Stack
              direction={{ base: 'row', md: 'column' }}
              spacing={{ base: 3, sm: 5 }}>
              <Link to="/privacy" className="color-white font-sm font-weight-500">
                Privacy policy
              </Link>
              <Link to="/faqs" className="color-white font-sm font-weight-500">
                FAQ
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Stack
        spacing={5}
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'flex-start', sm: 'space-between' }}
        py={5}>
        <Text
          order={{ base: 2, sm: 1 }}
          textAlign="center"
          className="font-sm color-white"
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
            <RiFacebookFill size={15} className="color-white" />
          </Link>
          <Link to="/">
            <RiLinkedinFill size={15} className="color-white" />
          </Link>
          <Link to="/">
            <RiTwitterFill size={15} className="color-white" />
          </Link>
          <Link to="/">
            <RiYoutubeFill size={15} className="color-white" />
          </Link>
          <Link to="/">
            <RiInstagramLine size={15} className="color-white" />
          </Link>
        </Stack>
      </Stack>
    </SectionWrapper>
  );
};
