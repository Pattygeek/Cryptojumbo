import React from 'react';
import { Box } from '@chakra-ui/react';
import { NavigationTop, Footer, ContactForm } from '../components';
const Contact: React.FC = (): JSX.Element => {
  return (
    <Box>
      <Box as="header" p={{ base: '0px', md: '20px 40px' }}>
        <NavigationTop />
        <ContactForm />
      </Box>
      <Footer />
    </Box>
  );
};

export default Contact;
