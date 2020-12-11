import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
const NavigationBar: React.FC = () => {
  return (
    <Flex
      borderRadius={{ sm: 0, md: 20 }}
      px={30}
      py={2}
      boxShadow="8px 8px 16px 4px rgba(133, 139, 146, 0.06)"
      as="nav"
      justify="space-between"
      align="flex-center"
      className="bg-white">
      <Flex align="center">
        <Box as="img" src={logo} className="logo" mr="10px" />
        <Text className="font-weight-600 font-sm">CryptoJumbo</Text>
      </Flex>
      <Flex align="center">
        <Link
          to="/about"
          className="capitalize color-gray-text font-sm font-weight-500 padding-sm">
          <Text _hover={{ color: 'rgba(0,0,0,0.5)' }} mr="4">
            about
          </Text>
        </Link>
        <Link
          to="/faqs"
          className="capitalize color-gray-text font-sm font-weight-500 padding-sm">
          <Text _hover={{ color: 'rgba(0,0,0,0.5)' }} mr="4">
            FAQ
          </Text>
        </Link>
        <Link to="/auth" className="btn-primary-outline font-sm">
          Login / Signup
        </Link>
      </Flex>
    </Flex>
  );
};

export default NavigationBar;
