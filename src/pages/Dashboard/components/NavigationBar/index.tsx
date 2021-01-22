import React, { useRef, useState, useEffect } from 'react';
import { Flex, Box, Text, Stack } from '@chakra-ui/react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../../../assets/logo.png';
import { AiFillWindows, AiFillWallet } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { GiTrade } from 'react-icons/gi';
import { BiLogOut } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, logoutRequest } from '../../../../redux';
import { GoThreeBars } from 'react-icons/go';
import { IoIosArrowDown } from 'react-icons/io';

const DashboardNavigation: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state: AppState) => {
    const { user } = state.profile;
    const { token } = state.auth;
    return { user, token };
  });
  const ref = useRef<HTMLDivElement>(null);
  const toggleNavbar = () => {
    ref.current?.classList.toggle('toggle');
  };
  const hideNavbar = () => {
    if (ref.current && ref.current.classList.contains('toggle')) {
      ref.current.classList.remove('toggle');
    }
  };
  const navBar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const listener = window.addEventListener('scroll', () => {
      if (navBar.current) {
        window.scrollY > 0
          ? navBar.current.classList.add('sticky_nav')
          : navBar.current.classList.remove('sticky_nav');
      }
    });
    return window.removeEventListener('scroll', () => {
      if (navBar.current) {
        window.scrollY > 0
          ? navBar.current.classList.add('sticky_nav')
          : navBar.current.classList.remove('sticky_nav');
      }
    });
  }, []);
  const logout = () => dispatch(logoutRequest({ token }));
  return (
    <Flex
      ref={navBar}
      borderRadius={{ sm: 0, md: 20 }}
      px={30}
      py={5}
      boxShadow="8px 8px 16px 4px rgba(133, 139, 146, 0.06)"
      as="nav"
      justify="space-between"
      align="center"
      className="bg-white">
      <Flex flex={1}>
        <Stack direction="row" spacing={5}>
          <Box
            as="button"
            onClick={toggleNavbar}
            display={{ base: 'block', md: 'none' }}>
            <GoThreeBars size={25} className="color-gray-text" />
          </Box>
          <Flex
            as={Link}
            to="/"
            align="center"
            pr={5}
            borderRight={{ base: 'none', md: '1px solid #e0e0e0' }}>
            <Box as="img" src={logo} className="logo" mr="10px" />
            <Text className="font-weight-600 color-dark font-md">CryptoJumbo</Text>
          </Flex>
        </Stack>
        <Flex
          ref={ref}
          direction={{ base: 'column', md: 'row' }}
          width={{ base: '100%', md: 'auto' }}
          align={{ base: 'flex-start', md: 'center' }}
          className="navlink-wrapper"
          onClick={hideNavbar}
          flex={1}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'flex-start', md: 'center' }}
            justify={{ base: 'space-between', md: 'flex-start' }}
            className="dashboard-navbar nav-links"
            // pb={{ base: 20, md: 0 }}
            flex={1}>
            <Stack
              flex={1}
              spacing={{ base: '5px', sm: '25px' }}
              direction={{ base: 'column', md: 'row' }}
              align={{ base: 'flex-start', md: 'center' }}
              justify={{ base: 'flex-start', md: 'flex-start' }}>
              <Flex
                align="center"
                px={5}
                py={3}
                mb={5}
                className="bg-white"
                display={{ base: 'flex', md: 'none' }}
                borderBottom="1px solid rgba(19, 88, 134, 0.14)">
                <Box as="img" src={logo} className="logo" mr="10px" />
                <Text className="font-weight-600 color-dark font-sm">
                  CryptoJumbo
                </Text>
              </Flex>
              <Box
                as={NavLink}
                display="flex"
                alignItems="center"
                activeClassName="active"
                exact
                to="/dashboard"
                className="capitalize color-gray-text font-sm font-weight-500 padding-sm">
                <AiFillWindows size={23} className="color-inherit margin-right-sm" />
                <Text>Overview</Text>
              </Box>
              <Box
                as={NavLink}
                display="flex"
                alignItems="center"
                activeClassName="active"
                to="/dashboard/trade"
                className="capitalize color-gray-text font-sm font-weight-500 padding-sm">
                <GiTrade size={23} className="color-inherit margin-right-sm" />
                <Text>Trade</Text>
              </Box>
              <Box
                as={NavLink}
                display="flex"
                alignItems="center"
                activeClassName="active"
                to="/dashboard/wallet"
                className="capitalize color-gray-text font-sm font-weight-500 padding-sm">
                <AiFillWallet size={23} className="color-inherit margin-right-sm" />
                <Text>Wallet</Text>
              </Box>
              <Box
                as={NavLink}
                display="flex"
                alignItems="center"
                activeClassName="active"
                to="/dashboard/profile"
                className="capitalize color-gray-text font-sm font-weight-500 padding-sm">
                <FaUser size={23} className="color-inherit margin-right-sm" />
                <Text>Profile</Text>
              </Box>
              <Flex
                flex={1}
                justify="flex-end"
                align="center"
                mt={10}
                py={5}
                px={4}
                className="slim-border-top"
                display={{ base: 'none', md: 'inline-flex' }}>
                <Box display="inline-block">
                  <Text className="color-gray-text font-sm">{user?.email}</Text>
                </Box>
                <Box
                  position="relative"
                  className="tooltip-wrapper"
                  display="inline-block"
                  px="15px"
                  mb="-3px">
                  <Box as="button" className="logout-toggler">
                    <IoIosArrowDown size={20} />
                  </Box>
                  <Stack
                    position="absolute"
                    right="20px"
                    // transform="translateX(50%)"
                    top="80%"
                    direction="row"
                    align="center"
                    spacing={3}
                    borderRadius="5px"
                    as="button"
                    _hover={{ bg: 'brand.100', color: 'white' }}
                    className="bg-white logout-dropdown color-dark"
                    width="120px"
                    p={'10px'}
                    onClick={logout}>
                    <BiLogOut className="color-inherit" size={30} />
                    <Text className="color-inherit font-sm font-weight-500">
                      Logout
                    </Text>
                  </Stack>
                </Box>
              </Flex>
            </Stack>
            <Stack
              display={{ base: 'flex', md: 'none' }}
              direction="row"
              align="center"
              spacing={3}
              as="button"
              width="full"
              className="bg-gray"
              px={5}
              py={2}
              onClick={logout}>
              <BiLogOut className="color-gray-text" size={25} />
              <Text className="color-gray-text font-sm font-weight-500">
                Log out
              </Text>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
      <Text
        display={{ base: 'none', md: 'iniline' }}
        className="color-gray-text font-sm">
        {user?.email}
      </Text>
    </Flex>
  );
};

export default DashboardNavigation;
