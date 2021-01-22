import React from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  Center,
  AspectRatio,
  Square,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  NavigationTop,
  PreFooter,
  Footer,
  SectionWrapper,
  Accordion,
} from '../components';
import error404 from '../../assets/404.png';

const Error404: React.FC = (): JSX.Element => {
  return (
    <Box className="bg-primary">
      <Box as="header" p={{ base: '0px', md: '20px 40px' }}>
        <NavigationTop />
      </Box>
      <Box>
        <SectionWrapper py={20}>
          <Center flexDirection="column">
            <Image
              src={error404}
              alt="Error 404 Fallback"
              width={{ base: '150px', sm: '25%' }}
              mb={10}
            />
            <Text mb={5} as="h3" className="font-lg font-weight-600 color-white">
              Oops!
            </Text>
            <Text
              mb={5}
              className="font-sm font-weight-400 color-white"
              textAlign="center">
              The page you are requesting for does not exist
            </Text>
            <Box
              as={Link}
              to="/"
              className="padding-horizontal-md padding-vertical-xs btn-white-outline">
              Back to home page
            </Box>
          </Center>
        </SectionWrapper>
      </Box>
      <Footer />
    </Box>
  );
};
export default Error404;
