import React from 'react';
import { Box, Text, Flex, Stack, Square } from '@chakra-ui/react';
import { SubmitButton } from '../../components';
import { FiCheck } from 'react-icons/fi';

const KYC: React.FC = (): JSX.Element => {
  return (
    <Box className="bg-white card-shadow" borderRadius={10} p={'20px 25px'} mb={5}>
      <Text className="color-dark font-md font-weight-500" mb={5}>
        KYC
      </Text>
      <Stack direction="column" pb={5} spacing={6}>
        <Flex justify="space-between">
          <Box>
            <Text className="font-sm font-weight-500 color-dark">Utility bill</Text>
            <Text className="font-xs font-weight-400 color-gray-text">verified</Text>
          </Box>
          <Square className="bg-success-transparent" size={8}>
            <FiCheck size={16} className="color-success" />
          </Square>
        </Flex>
        <Flex justify="space-between">
          <Box>
            <Text className="font-sm font-weight-500 color-dark">Document 2</Text>
            <Text className="font-xs font-weight-400 color-gray-text">
              not verified
            </Text>
          </Box>
          <Box borderRadius={5} bg="gray.600" px={3} className="padding-vertical-xs">
            <Text className="color-gray-3 font-sm font-weight-500">Uploaded</Text>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};

export default KYC;
