import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import PersonalInfo from './PersonalInfo';
import LocalAccounts from './LocalAccounts';
import AccountSecurity from './AccountSecurity';
import Settings from './Settings';
import KYC from './KYC';

const Profile: React.FC = (): JSX.Element => {
  return (
    <Flex justify="space-between" direction={{ base: 'column', md: 'row' }}>
      <Box flex={0.35} mb={5}>
        <PersonalInfo />
        <LocalAccounts />
        <KYC />
      </Box>
      <Box flex={0.62}>
        <AccountSecurity />
        <Settings />
      </Box>
    </Flex>
  );
};

export default Profile;
