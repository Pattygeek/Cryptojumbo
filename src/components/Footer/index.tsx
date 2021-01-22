import React from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-white.png';
import {
  RiFacebookFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiYoutubeFill,
  RiInstagramLine,
} from 'react-icons/ri';

const Footer: React.FC = (): JSX.Element => {
  return (
    <Box px={40} py={20} className="bg-secondary">
      <Flex justify="space-between" className="slim-border-bottom padding-bottom-md">
        <Box flex={0.4}>
          <Flex align="center">
            <Image src={logo} mr={3} />
            <Text className="color-white font-weight-500 font-sm">CryptoJumbo</Text>
          </Flex>
          <Text className="font-weight-400 font-sm color-white">
            The most secure & efficient medium to sell your crypto. We have a global
            reputation for the fastest transaction coupled with the best rates
          </Text>
        </Box>
        <Box flex={0.4}>
          <Box as="button" className="btn bg-white font-sm">
            Login / Signup
          </Box>
          <Flex justify="space-between">
            <Flex direction="column">
              <Link to="/contact-us" className="color-white font-sm">
                Contact Us
              </Link>
              <Link to="/about" className="color-white font-sm">
                About
              </Link>
            </Flex>
            <Flex direction="column">
              <Link to="/contact-us" className="color-white font-sm">
                Privacy policy
              </Link>
              <Link to="/about" className="color-white font-sm">
                FAQ
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Flex justify="space-between">
        <Text className="font-sm color-white">
          Copyright © 2020 CryptoJumbo. All rights reserved
        </Text>
        <Flex>
          <Link to="/" className="margin-right-sm">
            <RiFacebookFill size={15} className="color-white" />
          </Link>
          <Link to="/" className="margin-right-sm">
            <RiLinkedinFill size={15} className="color-white" />
          </Link>
          <Link to="/" className="margin-right-sm">
            <RiTwitterFill size={15} className="color-white" />
          </Link>
          <Link to="/" className="margin-right-sm">
            <RiYoutubeFill size={15} className="color-white" />
          </Link>
          <Link to="/" className="margin-right-sm">
            <RiInstagramLine size={15} className="color-white" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
