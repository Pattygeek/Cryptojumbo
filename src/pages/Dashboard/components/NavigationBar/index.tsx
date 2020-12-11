import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/logo.png';
import { AiFillWindows, AiFillWallet } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { GiTrade } from 'react-icons/gi';
const DashboardNavigation: React.FC = (): JSX.Element => {
  return (
    <Flex
      borderRadius={{ sm: 0, md: 20 }}
      px={30}
      py={2}
      boxShadow="8px 8px 16px 4px rgba(133, 139, 146, 0.06)"
      as="nav"
      justify="space-between"
      align="center"
      className="bg-white">
      <Flex>
        <Flex align="center" pr={5} className="slim-border-right">
          <Box as="img" src={logo} className="logo" mr="10px" />
          <Text className="font-weight-600 font-sm">CryptoJumbo</Text>
        </Flex>
        <Flex align="center" className="dashboard-navbar">
          <NavLink
            activeClassName="color-primary"
            exact
            to="/dashboard"
            className="capitalize color-gray-text font-sm font-weight-500 padding-sm">
            <AiFillWindows size={20} className="color-inherit margin-right-sm" />
            <Text>Overview</Text>
          </NavLink>
          <NavLink
            activeClassName="color-primary"
            to="/dashboard/trade"
            className="capitalize color-gray-text font-sm font-weight-500 padding-sm">
            <GiTrade size={20} className="color-inherit margin-right-sm" />
            <Text>Trade</Text>
          </NavLink>
          <NavLink
            activeClassName="color-primary"
            to="/dashboard/wallet"
            className="capitalize color-gray-text font-sm font-weight-500 padding-sm">
            <AiFillWallet size={20} className="color-inherit margin-right-sm" />
            <Text>Wallet</Text>
          </NavLink>
          <NavLink
            activeClassName="color-primary"
            to="/dashboard/profile"
            className="capitalize color-gray-text font-sm font-weight-500 padding-sm">
            <FaUser size={20} className="color-inherit margin-right-sm" />
            <Text>Profile</Text>
          </NavLink>
        </Flex>
      </Flex>
      <Text className="color-gray-text font-sm">user1234@example.com</Text>
    </Flex>
  );
};

export default DashboardNavigation;
