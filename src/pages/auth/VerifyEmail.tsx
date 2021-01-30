import React from 'react';
import { Text, Flex, Box } from '@chakra-ui/react';
import { AuthProps } from './types';

declare interface VerifyEmailProps extends AuthProps {
  email: string;
}
const VerifyEmail: React.FC<VerifyEmailProps> = ({
  setState,
  email,
}): JSX.Element => {
  return (
    <Box>
      <Flex direction="column" justify="space-between" align="center" pt={5} mb={5}>
        <Text
          as="h2"
          mb={3}
          className="capitalize color-blue-medium font-md font-weight-600">
          Verify Email
        </Text>
        <Text textAlign="center" className="color-gray-text font-sm">
          An activation link has been sent to {email}. Kindly follow the link to
          verify your email and activate your account. Congratulations!!!
        </Text>
        <Text
          mt={10}
          className="color-gray-text font-weight-400 font-sm padding-vertical-sm">
          Already have an account?{' '}
          <button
            onClick={() => setState('login')}
            type="button"
            className="font-weight-500">
            Login
          </button>
        </Text>
      </Flex>
    </Box>
  );
};

export default VerifyEmail;
