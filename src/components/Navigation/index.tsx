import React, { useRef, useEffect } from 'react';
import { Box, Flex, Text, Stack } from '@chakra-ui/react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';

const NavigationBar: React.FC = () => {
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
  return (
    <Flex
      ref={navBar}
      borderRadius={{ sm: 0, md: 20 }}
      px={30}
      py={5}
      boxShadow="8px 8px 16px 4px rgba(133, 139, 146, 0.06)"
      as="nav"
      justify="space-between"
      align="flex-center"
      className="bg-white"
      flexWrap="wrap">
      <Stack direction="row" spacing={5}>
        <Box
          as="button"
          onClick={toggleNavbar}
          display={{ base: 'block', md: 'none' }}>
          <GoThreeBars size={25} className="color-gray-text" />
        </Box>
        <Flex align="center">
          <Box as="img" src={logo} className="logo" mr="10px" />
          <Text className="font-weight-600 font-md color-dark">CryptoJumbo</Text>
        </Flex>
      </Stack>
      <Flex
        ref={ref}
        direction={{ base: 'column', md: 'row' }}
        width={{ base: '100%', md: 'auto' }}
        align={{ base: 'flex-start', md: 'center' }}
        className="navlink-wrapper"
        onClick={hideNavbar}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'flex-start', md: 'center' }}
          className="nav-links">
          <Flex
            align="center"
            px={5}
            py={3}
            mb={5}
            className="bg-white"
            display={{ base: 'flex', md: 'none' }}
            borderBottom="1px solid rgba(19, 88, 134, 0.14)">
            <Box as="img" src={logo} className="logo" mr="10px" />
            <Text className="font-weight-600 color-dark font-sm">CryptoJumbo</Text>
          </Flex>
          <Box
            as={NavLink}
            activeClassName="active"
            exact
            to="/"
            className="capitalize color-gray-text font-sm font-weight-500 padding-sm navlink"
            _hover={{ color: 'rgba(0,0,0,0.5)' }}
            mr="4">
            home
          </Box>
          <Box
            as={NavLink}
            activeClassName="active"
            to="/academy"
            className="capitalize color-gray-text font-sm font-weight-500 padding-sm navlink"
            _hover={{ color: 'rgba(0,0,0,0.5)' }}
            mr="4">
            CJ Academy
          </Box>
          <Box
            as={NavLink}
            activeClassName="active"
            to="/about"
            className="capitalize color-gray-text font-sm font-weight-500 padding-sm navlink"
            _hover={{ color: 'rgba(0,0,0,0.5)' }}
            mr="4">
            about
          </Box>
          <Box
            as={NavLink}
            activeClassName="active"
            to="/faqs"
            className="capitalize color-gray-text font-sm font-weight-500 padding-sm navlink"
            _hover={{ color: 'rgba(0,0,0,0.5)' }}
            mr="4">
            FAQ
          </Box>
          <a
            href="https://blog.cryptojumbo.org"
            target="_blank"
            rel="noreferrer noopener"
            className="capitalize color-gray-text font-sm font-weight-500 padding-sm navlink">
            <Text _hover={{ color: 'rgba(0,0,0,0.5)' }} mr="4">
              blog
            </Text>
          </a>
          <Box
            as={NavLink}
            activeClassName="active"
            to="/auth"
            className="btn-primary-outline font-sm">
            Login / Signup
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavigationBar;